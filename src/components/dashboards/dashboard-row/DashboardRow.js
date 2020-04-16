import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core';
import DashboardItem from '../dashboard-item/DashboardItem';

export default class DashboardRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  render() {
    return (
      <Box flexGrow="1" display="flex" flexDirection="row" height={this.props.height}>
        <Box flexGrow="1" display="flex" flexDirection="row" id={"row-" + this.props.rowNum}>
          {this.getItems()}
        </Box>
        <Button onClick={this.addItem}>ADD</Button>
      </Box>
    );
  }

  getItems = () => {
    return this.props.items.map((item, index) => (
      <DashboardItem 
        {...item}
        itemNum={index}
        key={index} 
        itemId={String(this.props.rowNum) + String(item.itemNum)}
        width={1/this.props.items.length}
        updateItem={this.updateItem}
        removeItem={this.removeItem}
      />
    ))
  }

  addItem = () => {
    this.props.addItem(this.props.rowNum)
  }

  updateItem = (itemNum, obj) => {
    this.props.updateItem(this.props.rowNum, itemNum, obj)
  }

  removeItem = (itemNum) => {
    this.props.removeItem(this.props.rowNum, itemNum)
  }
}
