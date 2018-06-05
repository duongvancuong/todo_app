import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './styles/App.css';
// import Header from './common/Header';
// import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { getContact } from './actions/contactAction';
import { getSkypeUser } from './actions/userSkypeAction';
import { getMessages } from './actions/messageAction';

class App extends Component {
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
  // const { isAuthenticated } = state.auth;
  const { contacts, user, activeUserId } = state;
  return {
    contacts,
    // isAuthenticated,
    user,
    activeUserId,
  }
}
export default connect(mapStateToProps)(App);
