import React, { Component, Fragment } from 'react';
import hoistNonReactStatics from "hoist-non-react-statics";

import Switch from './Switch';
// => callAll đây là cách compose các functions với nhau.
// truyền vào các funcs thì các function trc sẽ compose các func sau.
// ở đây ko thể hiện dc điều đó. những hơi bị vãi lìn đấy.
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

class Toggle extends Component {
  static defaultProps = {
    initialOn: false,
    onReset: () => {},
    stateReducer: (state, changes) => changes,
  }

  static stateChangeTypes = {
    reset: '__toggle_reset__',
    toggle: '__toggle_toggele__',
  }

  initialState = {on: this.props.initialOn};
  state = this.initialState;
  initernalSetState(changes, callback) {
    this.setState(state => {
      // this handles setState and gets new state or nothing to be changed.
      const changesObject =
        typeof changes === 'function' ? changes(state) : changes
      // apply reducer
      const reducedChanges =
        this.props.stateReducer(state, changesObject) || {};
      // remove the type when it is not set into state
      const { type: ignoredType, ...onlyChange } = reducedChanges;
      // return null if there are no changes to be made (avoid an unecessary rerender)
      return Object.keys(onlyChange).length
        ? onlyChange
        : null
    }, callback);
  };

  reset = () =>
    this.initernalSetState(
      { ...this.initialState, type: Toggle.stateChangeTypes.reset },
      () => this.props.onReset(this.state.on));

  toggle = ({ type = Toggle.stateChangeTypes.toggle } = {}) =>
    this.initernalSetState(
      ({ on }) => ({ type, on: !on }),
      () => this.props.onToggle(this.state.on)
    );

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    onClick: callAll(onClick, this.toggle),
    "aria-pressed": this.state.on,
    ...props
  });

  getStateAndHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggle,
      reset: this.reset,
      getTogglerProps: this.getTogglerProps,
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

class StateReducer extends Component {
  static defaultProps = {
    onToggle: (...args) => console.log('ontoggle', ...args),
    onReset: (...args) => console.log('onReset', ...args),
  }
  initialState = { timeClicked: 0 };
  state = this.initialState;

  handleToggle = (...args) => {
    this.setState(({ timeClicked }) => ({
      timeClicked: timeClicked + 1,
    })),
    this.props.onToggle(...args)
  }

  handleReset = (...args) => {
    this.setState(this.initialState),
    this.props.onReset(...args)
  }

  toggleStateReducer = (state, changes) => {
    if (changes.type === 'forced') {
      return changes;
    }

    if (this.state.timeClicked >= 4) {
      return {...changes, on: false};
    }

    return changes;
  }

  render() {
    const { timeClicked } = this.state;
    // apply render props pattern here.
    return (
      <Toggle
        stateReducer={this.toggleStateReducer}
        onToggle={this.handleToggle}
        onReset={this.handleReset}
      >
        {props => (
          <Fragment>
            <Switch
              {...props.getTogglerProps({
                on: props.on,
              })}
            />
            {timeClicked > 4 ? (
              <div data-testid="notice">
                you clicked too much!
                <br/>
                <button onClick={() => {props.toggle({type: 'forced'})}}>Force Toggle</button>
              </div>
            ) : timeClicked > 0 ? (
              <div data-testid="click-count">
                Click count: {timeClicked}
              </div>
            ) : null}
            <button onClick={props.reset}> Reset </button>
          </Fragment>
        )}
      </Toggle>
    )
  }
}

export {Toggle, StateReducer as default}
