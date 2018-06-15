import React, { Component } from 'react';
import hoistNonReactStatics from "hoist-non-react-statics";

import Switch from './Switch';
// => callAll đây là cách compose các functions với nhau.
// truyền vào các funcs thì các function trc sẽ compose các func sau.
// ở đây ko thể hiện dc điều đó. những hơi bị vãi lìn đấy.
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

const ToggleContext = React.createContext({
  on: false,
  toggle: () => {},
  getTogglerProps: props => props
});

class Toggle extends Component {

  static Consumer = props => (
    <ToggleContext.Consumer {...props}>
      {state => Toggle.getUI(props.children, state)}
    </ToggleContext.Consumer>
  );

  static On = ({ children }) => (
    <Toggle.Consumer>
      {({ on }) => (on ? children : null)}
    </Toggle.Consumer>
  );

  static Off = ({ children }) => (
    <Toggle.Consumer>
      {({ on }) => (on ? null : children)}
    </Toggle.Consumer>
  );

  static Button = props => (
    <Toggle.Consumer>
      {({getTogglerProps}) => <Switch {...getTogglerProps(props)}/>}
    </Toggle.Consumer>
  );

  static getUI(children, state) {
    let ui;
    if (Array.isArray(children) || React.isValidElement(children)) {
      ui = children;
    } else if (children.prototype && children.prototype.isReactComponent) {
      ui = React.createElement(children, state);
    } else if (typeof children === "function") {
      ui = children(state);
    } else {
      throw new Error("Please use on of the supported APIs for childrend");
    }
    return ui;
  }

  toggle = () => this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    onClick: callAll(onClick, this.toggle),
    "aria-pressed": this.state.on,
    ...props
  });

  state = {
    on: false,
    toggle: this.toggle,
    getTogglerProps: this.getTogglerProps
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ToggleContext.Provider value={this.state} {...rest}>
        {Toggle.getUI(children, this.state)}
      </ToggleContext.Provider>
    )
  }
}

Toggle.Consumer.displayName = "Toggle.Consumer";
Toggle.On.displayName = "Toggle.On";
Toggle.Off.displayName = "Toggle.Off";
Toggle.Button.displayName = "Toggle.Button";

const withToggle = (Component) => {
  const Wrapper = (props, ref) => (
    <Toggle.Consumer>
      {toggleState => <Component {...props} toggle={toggleState} ref={ref}/>}
    </Toggle.Consumer>
  );

  Wrapper.displayName = `withToggle(${Component.displayName ||  Component.name})`;

  const WrapperWithRef = React.forwardRef(Wrapper);

  hoistNonReactStatics(WrapperWithRef, Component);
  return WrapperWithRef;
}

export {Toggle, withToggle};
