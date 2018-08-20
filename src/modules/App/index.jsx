import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../common/Header';
import HomePage from '../../common/HomePage';
import TodoList from '../TodoAppWithCan';
class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="container-fluid text-center todoapp">
        <Header isAuthenticated={isAuthenticated}/>
        <TodoList />
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
