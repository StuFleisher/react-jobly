import { NavLink } from "react-router-dom";


/**Renders the navigation bar */
function Navigation() {

  let activeStyle = {
    "fontWeight": "bold"
  };

  return (

    <nav className="Navigation">
      <NavLink to='/' style={({ isActive }) =>
        isActive ? activeStyle : undefined} end>
        Jobly
      </NavLink>

      <NavLink to='/companies' style={({ isActive }) =>
        isActive ? activeStyle : undefined} end>
        Companies
      </NavLink>


      <NavLink to='/jobs' style={({ isActive }) =>
        isActive ? activeStyle : undefined} end>
        Jobs
      </NavLink>



    </nav>
  );
}

export default Navigation;