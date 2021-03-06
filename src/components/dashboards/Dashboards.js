import React, { Component } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import DashboardRow from './components/dashboard-row/DashboardRow';

export default class Dashboards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    }
  }
  
  componentDidMount() {
    this.addRow()
  }

  render() {
    return (
      <Box width={1} display="flex" flexDirection="column" justifyItems="stretch" bgcolor="secondary.main">
        <Box p="0.5rem 4rem"><Typography variant="h3">Dashboards</Typography></Box>
        <Box flexGrow="1" id="row-container" bgcolor="background.default">
          {this.getRows()}
        </Box>
        <Button onClick={this.addRow} color="inherit"><Typography>ADD ROW</Typography></Button>
      </Box>
    );
  }

  getRows = () => {
    return this.state.rows.map((value, index) => (
      <DashboardRow
        key={String(index)+String(this.state.rows.length)} 
        rowNum={index} 
        rowCount={this.state.rows.length} 
        height={1/this.state.rows.length}
        items={this.state.rows[index].items}
        addItem={this.addItem}
        updateItem={this.updateItem}
        removeItem={this.removeItem}
      />
    ))
  }

  addRow = () => {
    if (this.state.rows.length >= 3) {
      return
    }
    let newRow = {
      items: [{
        type: "default",
        weight: 1,
      }]
    }
    if (this.state.rows.length < 3) {
      this.setState({
        rows: [...this.state.rows, newRow]
      })
    }
  }

  addItem = (rowNum) => {
    let rows = this.state.rows
    rows[rowNum].items = rows[rowNum].items.concat({
      type: "default",
      weight: 1,
    })
    this.setState({
      rows: rows
    }, () => { console.log("AddedItem", this.state.rows[0].items) })
  }

  updateItem = (rowNum, itemNum, obj) => {
    let rows = this.state.rows
    rows[rowNum].items[itemNum] = {...rows[rowNum].items[itemNum], ...obj}
    this.setState({
      rows: rows
    })
  }

  removeItem = (rowNum, itemNum) => {
    let rows = this.state.rows
    rows[rowNum].items.splice(itemNum, 1)
    if (rows[rowNum].items.length === 0) {
      rows.splice(rowNum, 1)
    }
    this.setState({
      rows: rows
    })
  }
}
