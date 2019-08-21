import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = e => {
    console.log("form submitted");
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
          console.log(res.data.payload)
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form onSubmit={login}>
      <label>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={changeHandler}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={changeHandler}
        />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Login;
