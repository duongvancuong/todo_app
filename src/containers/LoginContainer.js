import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../services/user/index';
import { requestLoginAction } from '../actions/userActions';
import Login from '../components/Login';
export default class LoginContainer extends Component {
  constructor(){
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.props.dispatch(requestLoginAction(data));
  }

  render() {
    return (
      <div>
        <Login handleLogin={this.handleLogin} />
      </div>
    )
  }
}

LoginContainer.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

mapStateToProps = (state) => {
  const auth_token = state;

}

export default connect(mapStateToProps)(LoginContainer);
