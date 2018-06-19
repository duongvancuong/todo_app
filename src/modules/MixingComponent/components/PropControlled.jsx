import React, { Component } from 'react'

import Switch from './Switch';

class Toggle extends Component {
  state = { on: false};
  isControlled = (props) => {
    return this.props[props] !== 'undefined';
  }
  getState = () => {
    return {
      on: this.isControlled('on') ? this.props.on : this.state.on,
    }
  }
  toggle = () => {
    if (this.isControlled('on')) {
      this.props.onToggle(!this.getState().on)
    } else {
      this.setState(
        ({on}) => ({on: !on}),
        () => {
          this.props.onToggle(this.getState().on)
        },
      );
    }
  }
  render() {
    return <Switch on={this.getState().on} onClick={this.toggle} />
  }
}

class PropControlled extends Component {
  state = { bothOn: false };
  handleToggle = on => {
    this.setState({ bothOn: on })
  }
  render() {
    const { bothOn } = this.state;
    const {toggle1Ref, toggle2Ref} = this.props
    return (
      <div>
        <Toggle
          on={bothOn}
          onToggle={this.handleToggle}
          ref={toggle1Ref}
        />
        <Toggle
          on={bothOn}
          onToggle={this.handleToggle}
          ref={toggle2Ref}
        />
      </div>
    );
  }
}

export default PropControlled;
