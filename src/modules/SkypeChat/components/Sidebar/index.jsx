import React from "react";

import "./Sidebar.scss";

import User from "../../components/User";

const Sidebar = ({ contacts }) => {
  if (contacts) {
    return (
      <aside className="Sidebar">
        {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
      </aside>
    );
  }
  return null;
};

export default Sidebar;
