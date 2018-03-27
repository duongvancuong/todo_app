import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestLoginAction } from '../actions/userActions';
import LoginForm from '../components/LoginForm';

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
    return (
      <div>
        <LoginForm
          handleLogin={this.handleLogin}
          onChange={this.onChange}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    )
  }
}

LoginContainer.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const auth_token = state;
}

export default connect(mapStateToProps)(LoginContainer);
