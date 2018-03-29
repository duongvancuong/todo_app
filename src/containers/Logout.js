import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestLogoutAction } from '../actions/userActions'

class Logout extends Component {
  componentDidMount() {
    const { logout } = this.props.location.state || { logout: false }
    const { history } = this.props;
    if (!logout) {
      history.push('/');
    } else {
      this.props.dispatch(requestLogoutAction(this.props.token));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, history } = nextProps;
    if (!isAuthenticated) {
      history.push('/');
    }
  }

  render() {
    return (
      <div>
        Logging out...
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated,
  }
};

export default connect(mapStateToProps)(Logout);
