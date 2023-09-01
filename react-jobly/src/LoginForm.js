import React, { useState } from "react";

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
};

/** Renders a login form
 *
 * STATE:
 * -formData:
 * {username, password}

 * - errors:
 *  ['error1', 'error2', ....]

 *
 * PROPS: doLogin (callback function)
 *
 * RoutesList --> LoginForm --> Alert
 */


function LoginForm({ doLogin }) {

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState(null);

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
    try {
      evt.preventDefault();
      await doLogin(formData);
      setFormData(INITIAL_FORM_DATA);

    } catch (err) {
      setErrors(err);
    }
  }

  return (


    <div className='LoginForm'>

      {errors ? errors.map(error => <h3>{error}</h3>) : ''}

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
        <button>Login</button>
      </form>

    </div>



  );

}

export default LoginForm;