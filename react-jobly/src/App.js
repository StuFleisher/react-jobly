import './App.css';
import { NavLink, BrowserRouter } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';


/** Renders the Navigation bar and Routeslist
 *
 * State:
 * -none
 *
 * Props:
 * -none
 *
 * App -> {Navigation, RoutesList}
 */
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
