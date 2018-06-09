import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => (
  <div className="container profile">
    <div className="row">
      <div className="span12">
        <div className="well well-small clearfix">
          <div className="row-fluid">
            <div className="span2">
              <img src={user.profile_picture} alt="avatar" className="img-polaroid"/>
            </div>
            <div className="span4">
              <h2>{user.full_name}</h2>
              <ul className="unstyled">
                <li><i className="icon-envelope"></i>{user.bio}</li>
                <li><i className="icon-globe"></i>{user.website}</li>
              </ul>
            </div>
            <div className="span6">
              <ul className="inline stats">
                <li>
                  <span>{user.counts.media}</span>
                  media
                </li>
                <li>
                  <span>{user.counts.follows}</span>
                  follows
                </li>
                <li>
                  <span>{user.counts.followed_by}</span>
                  followed by
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;
