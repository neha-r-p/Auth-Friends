import React from "react";

const Login = () => {
  return (
    <form>
        <label>Username: <input type="text" /></label>
      <label>Password: <input type="password" /></label>
      
      <button>Submit</button>
    </form>
  );
};

export default Login;