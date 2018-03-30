import React, { Component } from 'react'
import { connect } from 'react-redux';
import { requestLoginAction } from '../actions/userActions';
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component {
  constructor(){
    super();
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();

    this.props.dispatch(requestLoginAction(this.state.user));
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' }}
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <LoginForm
          handleLogin={this.handleLogin}
          onChange={this.onChange}
          errors={this.props.errors}
          user={this.state.user}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated, errors } = state.auth;
  return {
    isAuthenticated,
    errors,
  }
}

export default connect(mapStateToProps)(LoginContainer);
