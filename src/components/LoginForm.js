import React from 'react';
import PropTypes from 'prop-types';

const error_type = {
  color: 'red',
};

const LoginForm = ({ handleLogin, onChange, errors, user }) => (
  <div className = "container">
    <div className="wrapper">
      <form name="Login_Form" onSubmit={handleLogin} className="form-signin">
        <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
        <hr className="colorgraph" />
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={onChange}
          value={user.email}
          placeholder="Email"
          required=""
          autoFocus=""
        />
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={onChange}
          value={user.password}
          placeholder="Password"
          required=""
        />
        <p style={error_type} >{errors.error_code}</p>
        <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>
      </form>
    </div>
  </div>
);

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  user: PropTypes.object.isRequired,
};

export default LoginForm;
