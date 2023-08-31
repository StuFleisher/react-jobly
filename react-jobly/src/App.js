import './App.css';
import { NavLink, BrowserRouter, useState } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import userContext from './userContext.js';



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

  const [user, setUser] = useState()

  const [token, setToken] = useState()

  function updateUser(newUser){
    setUser(newUser);
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
