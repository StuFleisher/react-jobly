import React, { useState } from "react";

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Renders a signup form
 *
 * STATE: formData
 *
 * PROPS: doSignup (callback function)
 *
 * RoutesList --> SignupForm --> Alert
 */

function SignupForm({ doSignup }) {

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  console.log('***formData', formData);

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Send search term to parent & clear form. */

  function handleSubmit(evt) {
    evt.preventDefault();
    doSignup(formData);
    setFormData(INITIAL_FORM_DATA);
  }


  return (

    <div className='SignupForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange} />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange} />


        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange} />


        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange} />

        <label htmlFor='email'>email</label>
        <input
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange} />

        <button>Submit</button>
      </form>
    </div>
  );

}

export default SignupForm;