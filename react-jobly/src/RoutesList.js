import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import SignupForm from "./SignupForm";
import LoginForm from './LoginForm';
import {useContext} from "react";
import userContext from "./userContext";
import ProfileForm from "./ProfileForm";


/**Renders a list of all routes
 *
 *  PROPS:
 *    login (callback for logins)
 *    register (callback for user signups)
 *    update (callback for user updates)
 * App -> RouteList -> {Homepage, Companies, CompanyDetails, Joblist}
*/
//TODO: refactor insteead of passing the entire user

function RoutesList({login, register, update}) {

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
      <Route path='*' element={<Navigate to='/login' />}/>
      </>

     :
     <>
      <Route path='/companies' element={<CompanyList />}/>
      <Route path='/companies/:handle' element={<CompanyDetails />}/>
      <Route path='/jobs' element={<JobList />}/>
      <Route path='/profile' element={<ProfileForm doUpdate={update}/>}/>
      <Route path='*' element={<Navigate to='/' />}/>
    </>
    }
    </Routes>
  );

}



export default RoutesList;