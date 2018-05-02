import React, { Component } from 'react';

const ApplicationContext = React.createContext();
const { Provider, Consumer} = ApplicationContext;
const styles = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};

const withConsumer = BaseComponent => {
  return class extends Component {
    render() {
      return(
        <Consumer>
          {theme => <BaseComponent {...this.props} theme={theme} /> }
        </Consumer>
      )
    }
  }
};

class ProfileFrom extends Component {
  render () {
    return (
      <div style={styles[this.props.theme]}>{this.props.theme}</div>
    )
  }
}

const ProfileConsumerFrom = withConsumer(ProfileFrom);

class ProfileProvider extends Component {
  state = { theme: "light" };

  showProfile = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  };
  render() {
    return (
      <Provider value={this.state.theme}>
        <button onClick={this.showProfile}>show/hide</button>
        {this.props.children}
      </Provider>
    );
  }
}


export default class ProfileUserConext extends Component {
  render() {
    return(
      <ProfileProvider>
        <ProfileConsumerFrom />
      </ProfileProvider>
    );
  }
}

