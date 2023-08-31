import React, { useState } from "react";

const INITIAL_FORM_DATA={
  username:"",
  password:"",
  firstName:"",
  lastName:"",
  email:"",
}

/** Renders a signup form
 *
 * STATE: formData
 *
 * PROPS: doSignup (callback function)
 *
 * RoutesList --> SignupForm --> Alert
 */

//TODO: update this to be login form not signup form

function SignupForm(doSignup) {

  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

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

}

export default SignupForm;