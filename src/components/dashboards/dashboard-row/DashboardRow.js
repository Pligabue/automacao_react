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
        width={item.weight/this.totalWeight()}
        updateItem={this.updateItem}
        removeItem={this.removeItem}
        increaseItemWeight={this.increaseItemWeight}
        decreaseItemWeight={this.decreaseItemWeight}
      />
    ))
  }

  addItem = () => {
    console.log("Total Weight =", this.totalWeight())
    if (this.totalWeight() >= 4) {
      return
    } else {
      this.props.addItem(this.props.rowNum)
    }
  }

  updateItem = (itemNum, obj) => {
    this.props.updateItem(this.props.rowNum, itemNum, obj)
  }

  removeItem = (itemNum) => {
    this.props.removeItem(this.props.rowNum, itemNum)
  }
  
  increaseItemWeight = (itemNum) => {
    if (this.totalWeight() >= 4) {
      return
    } else {
      this.props.updateItem(this.props.rowNum, itemNum, {
        weight: this.props.items[itemNum].weight + 1
      })
    }
  }

  decreaseItemWeight = (itemNum) => {
    if (this.props.items[itemNum].weight <= 1) {
      return
    } else {
      this.props.updateItem(this.props.rowNum, itemNum, {
        weight: this.props.items[itemNum].weight - 1
      })
    }
  }

  totalWeight = () => {
    console.log(this.props.items)
    return this.props.items.reduce((total, currentItem) => (
      total + currentItem.weight
    ), 0)
  }
}
