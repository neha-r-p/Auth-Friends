import React, { useState } from "react";
// import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    // console.log(props)
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
        //   console.log(res.data.payload)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends-list")
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
          placeholder="Username"
          value={credentials.username}
          onChange={changeHandler}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={changeHandler}
        />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Login;
