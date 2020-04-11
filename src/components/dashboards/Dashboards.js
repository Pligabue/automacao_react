import React, { Component } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import DashboardRow from './dashboard-row/DashboardRow';

export default class Dashboards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    }
  }
  
  componentDidMount() {
    this.addRow()
    this.updateHeight()
    window.addEventListener("resize", this.updateHeight)
  }

  render() {
    return (
      <Box flexGrow="1" display="flex" flexDirection="column" justifyItems="stretch">
        <Box m="2rem 4rem 0"><Typography color="secondary" variant="h3">Dashboards</Typography></Box>
        <Box flexGrow="1" id="row-container">
          {this.getRows()}
        </Box>
        <Button onClick={this.addRow}>ADD ROW</Button>
      </Box>
    );
  }

  getRows = () => {
    return this.state.rows.map((value, index) => (
      <DashboardRow
        key={index} 
        rowNum={String(index)} 
        rowCount={this.state.rows.length} 
        height={this.state.totalHeight/this.state.rows.length}
      />
    ))
  }

  addRow = () => {
    if (this.state.rows.length < 3) {
      this.setState({
        rows: [...this.state.rows, 0]
      })
    }
  }

  updateHeight = () => {
    this.setState({
      totalHeight: document.getElementById("row-container").offsetHeight
    })
  }
}
