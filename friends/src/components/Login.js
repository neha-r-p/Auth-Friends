import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <form>
      <label>
        Username: <input type="text" />
      </label>
      <label>
        Password: <input type="password" />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Login;
