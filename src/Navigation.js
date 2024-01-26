import { NavLink } from "react-router-dom";
import "./Navigation.css";
import userContext from './userContext';
import { useContext } from "react";

/**Renders the navigation bar with appropriate links depending on whether
 * user is logged in or not
 *
 * Props: logout (callback to log a user out)
 *
 * App--> Navigation
*/
function Navigation({logout}) {

  let activeStyle = {
    "fontWeight": "bold"
  };

  const { username } = useContext(userContext);

  return (

    <nav className="Navigation">

      <div className="Navigation-home">
        <NavLink to='/' style={({ isActive }) =>
          isActive ? activeStyle : undefined} end>
          Jobly
        </NavLink>
      </div>
      <div className="Navigation-pages">

        {username
        ?
          <>
            <NavLink to='/companies' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Companies
            </NavLink>

            <NavLink to='/jobs' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Jobs
            </NavLink>

            <NavLink to='/profile' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Profile
            </NavLink>

            <NavLink to='/' onClick={logout} style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Logout
            </NavLink>
          </>
        :
          <>
            <NavLink to='/login' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Login
            </NavLink>

            <NavLink to='/signup' style={({ isActive }) =>
              isActive ? activeStyle : undefined} end>
              Signup
            </NavLink>
          </>}
      </div>
    </nav>
  );
}

export default Navigation;