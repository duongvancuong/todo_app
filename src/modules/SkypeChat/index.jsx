import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './SkypeChat.scss';

import { getContact } from '../../actions/contactAction';
import { getSkypeUser } from '../../actions/userSkypeAction';
import { getMessages } from '../../actions/messageAction';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class SkypeChat extends Component {
  componentDidMount() {
    this.props.dispatch(getContact());
    this.props.dispatch(getSkypeUser());
    this.props.dispatch(getMessages());
  }

  render() {
    const { contacts, user, activeUserId } = this.props;
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { contacts, user, activeUserId } = state;
  return {
    contacts,
    user,
    activeUserId,
  }
}
export default connect(mapStateToProps)(SkypeChat);
