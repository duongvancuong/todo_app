import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveUserId } from "../../actions/activeUserIdAction";
import "./User.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleUserClick = () => {
    this.props.dispatch(setActiveUserId(this.props.user.user_id));
  }

  render() {
    const { name, profile_pic, status } = this.props.user;
    return (
      <div className="User" onClick={this.handleUserClick}>
        <img src={profile_pic} alt={name} className="User__pic" />
        <div className="User__details">
          <p className="User__details-name">{name}</p>
          <p className="User__details-status">{status}</p>
        </div>
      </div>
    )
  }
}

export default connect()(User);
