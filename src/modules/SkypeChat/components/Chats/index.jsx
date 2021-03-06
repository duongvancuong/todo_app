import React, { Component } from "react";

import LazyLoad from 'react-lazyload';

import "./Chats.scss";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    if (this.props.messages) {
      return (
        <div className="Chats" ref={this.chatsRef}>
          {this.props.messages.map(message => (
            <LazyLoad throttle={200} height={200} key={`lazy${message.number}`}>
              <Chat message={message} key={message.number} />
            </LazyLoad>
          ))}
        </div>
      );
    }
    return null;
  }
}

export default Chats;
