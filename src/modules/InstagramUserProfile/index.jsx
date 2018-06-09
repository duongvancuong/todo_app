import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import isEmpty from 'lodash/isEmpty';

import UserProfile from './components/UserProfile'
import { getUserProfile } from '../../actions/instagramUser'

export class InstagramUserProfile extends Component {
  componentDidMount() {
    this.props.dispatch(getUserProfile());
  }

  render() {
    const { userProfile } = this.props;
    return (
      <div className="container-fluid">
        { isEmpty(userProfile) ? 'loading ....' : <UserProfile user={userProfile} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { userProfile } = state.instagramUser;
  return {
    userProfile,
  }
}

InstagramUserProfile.propTypes = {
  userProfile: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(InstagramUserProfile)
