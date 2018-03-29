import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestLogoutAction } from '../actions/userActions'

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(requestLogoutAction(this.props.token));
  }

  render() {
    const { logout } = this.props.location.state || { logout: false }
    if (!logout) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div>
        Logging out...
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { token } = state.auth;
  return {
    token,
  }
};

export default connect(mapStateToProps)(Logout);
