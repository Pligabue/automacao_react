import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from './Home';
import Sobre from './Sobre';
import Equipe from './Equipe';
import Ficha from './Ficha';

import Box from "@material-ui/core/Box"
import Siderbar from '../sidebar/Sidebar';
import Dashboards from '../dashboards/Dashboards';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import orange from "@material-ui/core/colors/orange"

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: orange
  },
});
export default class App extends Component {

  render() {
    return (
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Box display="flex" flexDirection="row" height="100%" width="100%">
            <Siderbar />
            <Switch>
              <Route path="/dashboards"><Dashboards /></Route>
              <Route path="/sobre"><Sobre /></Route>
              <Route path="/equipe"><Equipe /></Route>
              <Route path="/ficha"><Ficha /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </Box>
        </ThemeProvider>
      </Router> 
    );
  }
}
