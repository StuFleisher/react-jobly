import { NavLink } from "react-router-dom";
import "./Navigation.css"

/**Renders the navigation bar */
function Navigation() {

  let activeStyle = {
    "fontWeight": "bold"
  };

  return (

    <nav className="Navigation">

      <div className="Navigation-home">
      <NavLink to='/' style={({ isActive }) =>
        isActive ? activeStyle : undefined} end>
        Jobly
      </NavLink>
      </div>

      <div className="Navigation-pages">
      <NavLink to='/companies' style={({ isActive }) =>
        isActive ? activeStyle : undefined} end>
        Companies
      </NavLink>


      <NavLink to='/jobs' style={({ isActive }) =>
        isActive ? activeStyle : undefined} end>
        Jobs
      </NavLink>
      </div>



    </nav>
  );
}

export default Navigation;