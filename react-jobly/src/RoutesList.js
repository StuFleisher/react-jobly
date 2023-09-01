import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import SignupForm from "./SignupForm";
import LoginForm from './LoginForm';
import {useContext} from "react";
import userContext from "./userContext";


/**Renders a list of all routes
 *
 *  PROPS:
 *    login (callback for logins)
 *    register (callback for user signups)
 * App -> RouteList -> {Homepage, Companies, CompanyDetails, Joblist}
*/

function RoutesList({login, register}) {

  const { username } = useContext(userContext);


  return (
    <Routes>
      <>
      <Route path='/' element={<Homepage />}/>
      </>
      {!username
      ?
      <>
      <Route path='/login' element={<LoginForm doLogin={login} />}/>
      <Route path='/signup' element={<SignupForm doSignup={register} />}/>
      </>

     :
     <>
      <Route path='/companies' element={<CompanyList />}/>
      <Route path='/companies/:handle' element={<CompanyDetails />}/>
      <Route path='/jobs' element={<JobList />}/>
      <Route path='*' element={<Navigate to='/' />}/>
    </>
    }
    </Routes>
  );

}

//TODO: for later use
/* <Route path='/profile' element={<ProfileForm />}/> */


export default RoutesList;