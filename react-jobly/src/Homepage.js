import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

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
  console.log("loading homepage")
  const { username } = useContext(userContext);

  console.log('username', username);

  return (

    <div className='Homepage'>
    {(username)
      ?
      <div className='Homepage-welcome'>
        <h3> Welcome back {username} </h3>
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