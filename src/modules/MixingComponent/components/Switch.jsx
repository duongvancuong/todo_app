import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../MixingComponent.scss';

class Switch extends Component {
  static propTypes = {}

  render() {
    const { className = "", ...props } = this.props;
    const on = this.props["aria-pressed"] || this.props.on;
    const btnClassName = [
      className,
      "toggle-btn",
      on ? "toggle-btn-on" : "toggle-btn-off"
    ].filter(Boolean).join(" ");

    return (
      <div>
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={() => {
            // changing is handled bt clicking the button
          }}
        />
        <button className={btnClassName} aria-lable="Toggle" {...props} />
      </div>
    )
  }
}

export default Switch;
