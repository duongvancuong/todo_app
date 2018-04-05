import React, { Component } from 'react';

const ProfileContext = React.createContext();
const { Provider, Consumer} = ProfileContext;
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

class ProfileProvider extends Component {
  state = { theme: "light" };

  showProfile = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
    console.log(this.state.theme);
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

const ProfileConsumerFrom = props => {
  return (
    <Consumer>
      {theme => (<div style={styles[theme]}>{theme}</div>)}
    </Consumer>
  );
};

export default class ProfileUserConext extends Component {
  render() {
    return(
      <ProfileProvider>
        <ProfileConsumerFrom />
      </ProfileProvider>
    );
  }
}

