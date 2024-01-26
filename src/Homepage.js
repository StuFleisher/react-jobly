import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import './Homepage.css';

/** Renders the homepage.  Adds a welcome message to logged in users or links
 * for logged out users
 *
 * State:
 *
 * Props:
 *
 *
 * RoutesList -> Homepage
 */

function Homepage(){
  const { username, firstName } = useContext(userContext);

  return (

    <div className='Homepage'>
    {(username)
      ?
      <div className='Homepage-welcome'>
        <h3> Welcome back, {firstName} </h3>
      </div>
      :
        <>
          <Link to="/login">
            <div className="Homepage-button">
              Log in
            </div>
          </Link>

          <Link to="/signup">
            <div className="Homepage-button">
              Sign up
            </div>
          </Link>
        </>
    }
    </div>

  )
}

export default Homepage;