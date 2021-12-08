import React, { useState } from "react";

const User = (props) => {
  const [enterusername, setenterusername] = useState("");
  const [enterage, setenterage] = useState("");
  const [enteremail, setenteremail] = useState("");
  const [enternumber, setenternumber] = useState("");
  const submiteventhandler = (e) => {
    e.preventDefault();

    props.exchangedata(enterusername, enterage, enteremail, enternumber);

    setenterusername("");
    setenterage("");
    setenteremail("");
    setenternumber("");
  };
  const userHandler = (e) => {
    setenterusername(e.target.value);
  };
  const ageHandler = (e) => {
    setenterage(e.target.value);
  };
  const emailHandler = (e) => {
    setenteremail(e.target.value);
  };
  const numberHandler = (e) => {
    setenternumber(e.target.value);
  };

  return (
    <div>
      <form on onSubmit={submiteventhandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="text"
          onChange={userHandler}
          value={enterusername}
        />
        <label>Age</label>
        <input type="number" id="num" onChange={ageHandler} value={enterage} />
        <label>Email</label>
        <input
          type="email"
          id="email"
          onChange={emailHandler}
          value={enteremail}
        />
        <label> Mobile Number</label>
        <input
          type="number"
          id="number"
          onChange={numberHandler}
          value={enternumber}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default User;
