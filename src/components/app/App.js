import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Box from "@material-ui/core/Box"
import Siderbar from '../sidebar/Sidebar';


export default class App extends Component {

  render() {
    return (
      <Router>
        <Box display="flex" flexDirection="row" height="100%">
          <Siderbar />
          <Box flexGrow="1"></Box>
        </Box>
      </Router> 
    );
  }
}
