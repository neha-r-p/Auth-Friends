import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/add-friend">Add Friend</Link>
      <Link to="/login" onClick={() => localStorage.clear()}>Log Out</Link>

      <Route path="/login" component={Login} />
      <PrivateRoute path="/add-friend" component={AddFriend} />
      <PrivateRoute exact path="/friends-list" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
