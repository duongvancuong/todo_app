import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ HandleLogin }) => (
  <div className = "container">
    <div className="wrapper">
      <form name="Login_Form" className="form-signin">
        <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
        <hr className="colorgraph" />
        <input type="text" className="form-control" name="Username" placeholder="Username" required="" autoFocus="" />
        <input type="password" className="form-control" name="Password" placeholder="Password" required=""/>
        <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>
      </form>
    </div>
  </div>
);

Login.propTypes = {
  // HandleLogin: PropTypes.form.isRequired,
};

export default Login;
