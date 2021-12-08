import "./App.css";
import React, { useState } from "react";
import User from "./user/User";
import UserList from "./user/UserList";

function App(props) {
  const [userdata, setuserdata] = useState([]);
  const exchangesdata = (un, ua, ue, unu) => {
    setuserdata((prevusers) => {
      return [
        ...prevusers,
        {
          name: un,
          age: ua,
          gmail: ue,
          number: unu,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className="App">
      <User exchangedata={exchangesdata} />
      <UserList users={userdata} />
    </div>
  );
}

export default App;
