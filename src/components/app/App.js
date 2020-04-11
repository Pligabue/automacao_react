import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Box from "@material-ui/core/Box"
import Siderbar from '../sidebar/Sidebar';
import Dashboards from '../dashboards/Dashboards';


export default class App extends Component {

  render() {
    return (
      <Router>
        <Box display="flex" flexDirection="row" height="100%" width="100%">
          <Siderbar />
          <Switch>
            <Route path="/dashboards"><Dashboards /></Route>
            <Route path="/outracoisa">Outra Coisa</Route>
            <Route path="/algo">Algo</Route>
            <Route path="/">Home</Route>
          </Switch>
        </Box>
      </Router> 
    );
  }
}
