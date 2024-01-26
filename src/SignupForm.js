import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Renders a signup form
 *
 * STATE:
 * -formData:

  * { username, password, firstName, lastName, email }

 * - errors:
 * ['error1', 'error2', ....]
 *
 * PROPS: doSignup (callback function)
 *
 * RoutesList --> SignupForm --> Alert
 */

function SignupForm({ doSignup }) {

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Send search term to parent & clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await doSignup(formData);
      setFormData(INITIAL_FORM_DATA);
      navigate('/');

    } catch (err) {
      setErrors(err);
    }
  }

  return (

    <div className='SignupForm'>

      {errors ? errors.map((error, index) => <h3 key={index}>{error}</h3>) : ''}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            autoComplete='username' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            autoComplete='new-password' />
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
            type='email'
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

export default SignupForm;