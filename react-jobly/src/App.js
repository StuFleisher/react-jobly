import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import userContext from './userContext.js';
import JoblyApi from './api';
import jwt_decode from 'jwt-decode';
import LoadingPage from './LoadingPage';

const ANON_USER = {
  username:null,
  firstName:null,
  lastName:null,
  isAdmin:null,
  jobs:null,
}

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

  const [user, setUser] = useState(ANON_USER);
  const [token, setToken] = useState(localStorage.getItem("token")||null);

  console.log("rendering app.\n user:",user,"\ntoken:",token );

  /** Sets state about our current user and token by doing the following:
   * -Stores the users token in local storages
   * -Sets the token property on the JoblyApi class
   * -Makes an api call and updates the user state
   */
  useEffect(function saveStateOnMountOrChange() {

    async function saveState() {
      //TODO: move to api file

      if (token){
        localStorage.setItem("token", token);
        const { username } = jwt_decode(token);
        const userData = await JoblyApi.getUser(username);
        setUser(userData);
      }
    }

    saveState();
  }, [token]);


  /** Calls the api with login credentials and tries to log the user in
   * If successful, updates the token and the user states.
   * data: {username, password}//TODO: update docstring
   */

  async function login(credentials) {
      const token = await JoblyApi.userLogin(credentials);
      setToken(token);
  }


  /** Logs the user out
   *  Clears token from localstorage and resets state for the app */

  function logout() {
    setUser(ANON_USER);
    localStorage.removeItem("token");
    JoblyApi.userLogout();
  }


  /** Calls the api with user data and tries to create a new account.
   * If successful, updates the token and user states.
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
      {(token && !user.username)
        ?
          <LoadingPage />
        :
          <userContext.Provider value={ user }>
            <BrowserRouter>
              <Navigation logout={logout} />
              <RoutesList register={register} login={login} />
            </BrowserRouter>
          </ userContext.Provider>
      }
    </div>
  );
}

export default App;
