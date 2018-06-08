import React, { Component } from 'react'
import { connect } from 'react-redux';

import './MessageInput.scss';

import { setTypingValue, sendMessage } from '../../../../actions/typingAction';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = e => {
    this.props.dispatch(setTypingValue(e.target.value));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = this.props;
    this.props.dispatch(sendMessage(typing, activeUserId));
  };

  render() {
    const {value} = this.props;
    return (
      <form className="Message" onSubmit={this.handleSubmit}>
        <input
          className="Message__input"
          onChange={this.handleChange}
          value={value}
          placeholder="write a message"
          />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { typing, activeUserId } = state;
  return {
    typing,
    activeUserId,
  }
}
export default connect(mapStateToProps)(MessageInput);
