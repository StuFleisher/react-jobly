import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';
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

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  // function updateUser(newUser){
  //   setUser(newUser);
  // }
  useEffect(function updateTokenOnMount(token) {
    async function updateToken() {

      JoblyApi.token = token;
      const userData = await JoblyApi.getUser(credentials.username);
      setUser(userData);
    }
    updateToken();
  }, [token]);

  /** Calls the api with login credentials and tries to log the user in
   * If successful, updates the token and the user states.
   * TODO: On failure, publish an error message
   *
   * data: {username, password}
   */
  async function login(credentials) {
    const token = await JoblyApi.userLogin(credentials);
    setToken(token);

  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  /** Calls the api with user data and tries to create a new account.
   * If successful, updates the token and user states.
   * TODO: On failure, publish an error message
   *
   * userData:{username, password, firstName, lastName, email}
   */
  async function register(userInfo) {
    const token = await JoblyApi.userSignup(userInfo);
    setToken(token);
    setUser({
      username: userInfo.username,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email
    });
  }



  return (
    <div className='App'>
      <userContext.Provider value={{ username: user?.username, token }}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList register={register} login={login} />
        </BrowserRouter>
      </ userContext.Provider>
    </div>

  );
}

export default App;
