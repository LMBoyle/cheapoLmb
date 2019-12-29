// Imports ========================================================================================

import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';


// Pages
import LoginForm from "./pages/Auth/LoginForm"
import SignupForm from "./pages/Auth/SignupForm"
import Welcome from "./pages/App/Welcome"
import Dashboard from "./pages/App/Dashboard";
import Goals from "./pages/App/Goals";
import Friends from "./pages/App/Friends";
import Profile from "./pages/App/Profile";
import NoMatch from "./pages/Error/NoMatch";
import NotUser from "./pages/Error/NotUser";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer"

// Other
import AUTH from "./utils/AUTH"

// Functions ======================================================================================

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: null
    };
  }

  componentDidMount() {
    AUTH.getUser().then(response => {
      if (!!response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  logout = (event) => {
    event.preventDefault();

    AUTH.logout().then(response => {
      // console.log(response.data);
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  login = (username, password) => {
    AUTH.login(username, password).then(response => {
      console.log("login func: ", response.message);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
  }

  render() {
    return (
      <>
        {/* If user is logged in */}
        {this.state.loggedIn && (
          <div>
            <Nav user={this.state.user} logout={this.logout} />
            <div className="main-view">
              <Switch>
                <Route exact path="/" component={() => <Dashboard user={this.state.user} />} />
                <Route exact path="/dashboard" component={() => <Dashboard user={this.state.user} />} />
                <Route exact path="/goals" component={Goals} />
                <Route exact path="/friends" component={Friends} />
                <Route exact path="/profile" component={() => <Profile user={this.state.user} />} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        )}

        {/* If user is not logged in */}
        {!this.state.loggedIn && (
          <div>
            <Nav user={this.state.user} />
            <div className="auth-wrapper">
              <Switch>
                <Route exact path="/" component={() => <Welcome />} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/login" component={() => <LoginForm login={this.login} />} />
                <Route exact path="/dashboard" component={() => <Dashboard user={this.state.user} />} />
                <Route exact path="/goals" component={NotUser} />
                <Route exact path="/friends" component={NotUser} />
                <Route exact path="/profile" component={NotUser} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        )}
        <Footer />
      </>
    );
  };
};

// Export =========================================================================================

export default App;
