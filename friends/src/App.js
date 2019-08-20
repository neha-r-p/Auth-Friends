import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/Login';
import AddFriend from './components/AddFriend';

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/add-friend">Add Friend</Link>

      <Route path="/login" component={Login} />
      <Route path="/add-friend" component={AddFriend} />
      </div>
    </Router>
  );
}

export default App;
