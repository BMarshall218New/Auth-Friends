import React from 'react';
import Login from "./components/Login";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import { FriendsList } from "./components/friendsList";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Login /> */}
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/authFriends">Authorized Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/authFriends" component={FriendsList} />
          <Route render="/login" component={Login} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
