import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ submitForm, errors, children, errorsForm }) => (
  <div className = "container">
    <div className="wrapper">
      <form name="Login_Form" onSubmit={submitForm} className="form-signin">
        <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
        <hr className="colorgraph" />
          {children}
        <button className="btn btn-lg btn-primary btn-block" name="Submit" value="Login" type="Submit">Login</button>
      </form>
    </div>
  </div>
);

LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;
