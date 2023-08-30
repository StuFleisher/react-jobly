import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './Homepage';
import Companies from './CompanyList';
import CompanyDetails from './CompanyDetails';
import Joblist from './Joblist';

/**Renders a list of all routes
 *
 * App -> RouteList -> {Homepage, Companies, CompanyDetails, Joblist}
*/

function RoutesList() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/companies' element={<Companies />}/>
      <Route path='/companies/:handle' element={<CompanyDetails />}/>
      <Route path='/jobs' element={<Joblist />}/>
      <Route path='*' element={<Navigate to='/' />}/>
    </Routes>

  );

}


export default RoutesList;