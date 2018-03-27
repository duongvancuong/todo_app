import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './common/Header';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <LoginContainer />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
