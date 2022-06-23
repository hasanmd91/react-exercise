import React, { useState } from "react";

const UseForm = ({ btntxt, handeleSubmit }) => {
  const [user, setuser] = useState({
    username: "",
    email: "",
  });

  const { username, email } = user;

  const handelChange = (e) => {
    const selectedfiled = e.target.name;
    const selectedvalue = e.target.value;

    setuser((prevstate) => {
      return { ...prevstate, [selectedfiled]: selectedvalue };
    });
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    handeleSubmit(user);
    setuser({
      username: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handelsubmit}>
      <div className="usefield">
        <label htmlFor="username"> username</label>
        <input
          type="text"
          value={username}
          name="username"
          id="username"
          required
          onChange={handelChange}
        />
      </div>

      <div className="usefield">
        <label htmlFor="email"> email</label>
        <input
          type="text"
          value={email}
          name="email"
          id="email"
          required
          onChange={handelChange}
        />
      </div>

      <button type="submit"> {btntxt} </button>
    </form>
  );
};

export default UseForm;
