import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import FavWatch from './components/FavWatch';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Nav from './components/Nav';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <>
        {/* @todo show login button and hide the list for unauthenticated users */}
        {/* @todo show logout button and show items list components for authenticated users */}
        {
          this.props.auth0.isAuthenticated ? <>
            <Router>
              <Nav />
              <Switch>
                <Route exact path="/">
                <Home />
                </Route>
              </Switch>
              <Switch>
                <Route  path="/FavList">
                <FavWatch />
                </Route>

              </Switch>
              <Switch>
                <Route  path="/Profile">
                <Profile />
                </Route>
              </Switch>
            </Router>
            <LogoutButton />
          </> : <LoginButton />


        }

      </>

    )
  }
}

export default withAuth0(App);
