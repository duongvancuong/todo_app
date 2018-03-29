import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import { requestRegisterAction } from '../actions/userActions';

class SignUpContainer extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      },
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSignUp(event) {
    event.preventDefault();

    this.props.dispatch(requestRegisterAction(this.state.user));
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
        <SignUpForm
          handleSignUp={this.handleSignUp}
          errors={this.state.errors}
          onChange={this.onChange}
          user={this.state.user}
        />
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated,
  }
};

export default connect(mapStateToProp)(SignUpContainer);
