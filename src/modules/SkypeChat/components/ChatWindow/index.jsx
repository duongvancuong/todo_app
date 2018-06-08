import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import './ChatWindow.scss';

import HeaderSkype from "../../components/HeaderSkype";
import Chats from "../../components/Chats";
import MessageInput from "../../components/MessageInput";


const ChatWindow = ({ activeUserId, contacts, messages, typing }) => {
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];
  return (
    <div className="ChatWindow">
      <HeaderSkype user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { contacts, activeUserId, messages, typing } = state;
  return {
    contacts,
    activeUserId,
    messages,
    typing,
  }
}

export default connect(mapStateToProps)(ChatWindow);
