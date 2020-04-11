import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core';
import SimpleChart from '../../chart/SimpleChart';

export default class DashboardRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.addItem()
    this.updateWidth()
    window.addEventListener("resize", this.updateWidth)
  }

  render() {
    return (
      <Box flexGrow="1" display="flex" flexDirection="row">
        <Box flexGrow="1" display="flex" flexDirection="row" id={"canvas-container-" + this.props.rowNum}>
          {this.getItems()}
        </Box>
        <Button onClick={this.addItem}>ADD ITEM</Button>
      </Box>
    );
  }

  getItems = () => {
    return this.state.items.map((value, index) => (
      <SimpleChart 
        key={index} 
        itemNum={String(this.props.rowNum) + String(index)} 
        rowCount={this.props.rowCount} 
        itemCount={this.state.items.length} 
        width={this.state.totalWidth/this.state.items.length}
        height={this.props.height}
      />
    ))
  }

  addItem = () => {
    let newItem = {
      dataset: [0]
    }
    if (this.state.items.length < 4) {
      this.setState({
        items: [...this.state.items, newItem]
      })
    }
  }

  updateWidth = () => {
    this.setState({
      totalWidth: document.getElementById("canvas-container-" + this.props.rowNum).offsetWidth
    })
  }
}
