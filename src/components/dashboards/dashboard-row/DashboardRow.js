import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core';
import DashboardItem from '../dashboard-item/DashboardItem';
import SimpleChart from '../../chart/SimpleChart';

export default class DashboardRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.updateWidth()
    window.addEventListener("resize", this.updateWidth)
  }

  render() {
    return (
      <Box flexGrow="1" display="flex" flexDirection="row">
        <Box flexGrow="1" display="flex" flexDirection="row" id={"row-" + this.props.rowNum}>
          {this.getItems()}
        </Box>
        <Button onClick={this.addItem}>ADD ITEM</Button>
      </Box>
    );
  }

  getItems = () => {
    return this.props.items.map((item, index) => (
      <DashboardItem 
        itemData={item}
        itemNum={index}
        key={index} 
        itemId={String(this.props.rowNum) + String(item.itemNum)}
        width={this.state.totalWidth/this.props.items.length}
        height={this.props.height}
        updateItem={this.updateItem}
      />
    ))
  }

  addItem = () => {
    this.props.addItem(this.props.rowNum)
  }

  updateItem = (itemNum, obj) => {
    this.props.updateItem(this.props.rowNum, itemNum, obj)
  }

  updateWidth = () => {
    this.setState({
      totalWidth: document.getElementById("row-" + this.props.rowNum).offsetWidth
    })
  }
}
