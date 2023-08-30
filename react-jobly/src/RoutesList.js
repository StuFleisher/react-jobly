import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';

/**Renders a list of all routes
 *
 * App -> RouteList -> {Homepage, Companies, CompanyDetails, Joblist}
*/
//TODO: rename the component
function RoutesList() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/companies' element={<CompanyList />}/>
      <Route path='/companies/:handle' element={<CompanyDetails />}/>
      <Route path='/jobs' element={<JobList />}/>
      <Route path='*' element={<Navigate to='/' />}/>
    </Routes>

  );

}


export default RoutesList;