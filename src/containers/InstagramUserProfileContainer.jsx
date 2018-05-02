import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import InstagramUserProfile from '../components/InstagramUserProfile'
import { getUserProfile } from '../actions/instagramUser'

export class InstagramUserProfileContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserProfile());
  }

  render() {
    const { userProfile } = this.props;
    return (
      <div className="container-fluid">
        { isEmpty(userProfile) ? 'loading ....' : <InstagramUserProfile user={userProfile} />}
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

InstagramUserProfileContainer.propTypes = {
  userProfile: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(InstagramUserProfileContainer)
