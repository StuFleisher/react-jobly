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
  const {user} = useContext(userContext);

  return (
    (user)
      ?
        <h3> Welcome back {user.username} </h3>
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

  )
}

export default Homepage;