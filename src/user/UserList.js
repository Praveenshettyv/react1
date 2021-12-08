import React from "react";
import "./Userlist.css";
const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li>
          {user.name};- ({user.age} years old) and email;- {user.email} number
          ;-{user.number}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
