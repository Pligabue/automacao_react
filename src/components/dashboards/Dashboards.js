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
    this.updateHeight()
    this.addRow()
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
        rowNum={index} 
        rowCount={this.state.rows.length} 
        height={this.state.totalHeight/this.state.rows.length}
        items={this.state.rows[index].items}
        addItem={this.addItem}
        updateItem={this.updateItem}
      />
    ))
  }

  addRow = () => {
    if (this.state.rows.length >= 3) {
      return
    }
    let newRow = {
      rowNum: this.state.rows.length,
      items: [{
        type: "default",
        itemNum: 0
      }]
    }
    if (this.state.rows.length < 3) {
      this.setState({
        rows: [...this.state.rows, newRow]
      })
    }
  }

  addItem = (rowNum) => {
    if (this.state.rows[rowNum].items.length >= 4) {
      return
    }
    let rows = this.state.rows
    rows[rowNum].items = rows[rowNum].items.concat({
      type: "default",
      itemNum: rows[rowNum].items.length
    })
    this.setState({
      rows: rows
    })
  }

  updateItem = (rowNum, itemNum, obj) => {
    let rows = this.state.rows
    rows[rowNum].items[itemNum] = {...rows[rowNum].items[itemNum], ...obj}
    this.setState({
      rows: rows
    })
  }

  updateHeight = () => {
    this.setState({
      totalHeight: document.getElementById("row-container").offsetHeight
    })
  }
}
