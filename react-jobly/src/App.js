import './App.css';
import { BrowserRouter, useState, useEffect } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import userContext from './userContext.js';
import JoblyApi from './api';


/** Renders the Navigation bar and Routeslist
 *
 * State:
 * -user
 * { username, firstName, lastName, isAdmin, jobs }
 * -token
 * {}
 * Props:
 * -none
 *
 * App -> {Navigation, RoutesList}
 */
function App() {

  const [user, setUser] = useState();
  const [token, setToken] = useState("");

  // function updateUser(newUser){
  //   setUser(newUser);
  // }
  useEffect(function updateToken (token) {JoblyApi.token=token}, [token])

  /** Calls the api with login credentials and tries to log the user in
   * If successful, updates the token and the user states.
   * TODO: On failure, publish an error message
   *
   * data: {username, password}
   */
  async function login(credentials) {
    const token = await JoblyApi.userLogin(credentials);
    setToken(token);

    const userData = await JoblyApi.getUser(credentials.username);
    setUser(userData);
  }

  /** Calls the api with user data and tries to create a new account.
   * If successful, updates the token and user states.
   * TODO: On failure, publish an error message
   *
   * userData:{username, password, firstName, lastName, email}
   */
  async function register(userData){
    const token = await JoblyApi.userSignup(userData);
    setToken(token);

    const userData = await JoblyApi.getUser(userData.username);
    setUser(userData);
  }

  return (
    <div className='App'>
      <userContext.Provider >
        <BrowserRouter>
          <Navigation />
          <RoutesList />
        </BrowserRouter>
      </ userContext.Provider>
    </div>

  );
}

export default App;
