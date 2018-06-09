import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import Header from './common/Header';
import HomePage from './common/HomePage';
class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="container-fluid text-center">
        <Header isAuthenticated={isAuthenticated}/>
        <HomePage />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated,
  }
}
export default connect(mapStateToProps)(App);
