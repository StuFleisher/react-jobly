import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import userContext from "./userContext";
import './ProfileForm.css';



/** Renders a profile form
 *
 * STATE:
 * -formData:

  * { username, firstName, lastName, email }

 * - errors:
 * ['error1', 'error2', ....]
 *
 * -success:
 * initially false, tracks whether form was submitted successfully
 *
 * PROPS: doUpdate (callback function)
 *
 * RoutesList --> ProfileForm --> Alert
 */

function ProfileForm({ doUpdate }) {

  const user = useContext(userContext);

  console.log('*******user', user);

  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(false);


  console.log('errors', errors);

  console.log('***formData', formData);

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Send search term to parent. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await doUpdate(formData);
      setSuccess(true);
      setErrors(null);

    } catch (errs) {
      setErrors(errs);
      setSuccess(false);
    }
  }

  return (

    <div className='ProfileForm'>

      {errors ? errors.map((error, index) => <h3 key={index}>{error}</h3>) : ''}
      {success ? <h3>Updated successfully</h3> : ''}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            autoComplete='username'
            disabled={true}/>
        </div>

        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='email'>email</label>
          <input
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );

}

export default ProfileForm;