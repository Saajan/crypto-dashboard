import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import Login from './route/Login';
import Register from './route/Register';
import Dashboard from './route/Dashboard';

import store from './store';

import 'antd/dist/antd.css';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  try {
    let decoded = decode(token);
    console.log(decoded);
  } catch (err) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app-container">
            <Switch>
              <Route path="/register" component={props => <Register {...props} />} />
              <Route path="/login" component={props => <Login {...props} />} />
              <Route path="/logout" component={Logout} />
              <PrivateRoute path="/" component={props => <Dashboard {...props} />} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

const Logout = () => {

  localStorage.removeItem('token');
  localStorage.removeItem('user');

  return <Redirect to='/login' />
};


export default App;
