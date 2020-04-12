import React, { Component } from 'react';
import { Box, IconButton, Button } from '@material-ui/core';
import SimpleChart from '../../chart/SimpleChart';

import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';

export default class DashboardItem extends Component {

  componentDidUpdate(prevProps) {
    this.resize()
  }

  render() {

    return (
      <Box id={"item-" + this.props.itemId} position="relative" width={this.props.width} height={this.props.height}>
        <Box position="absolute" right="0" zIndex={1}><IconButton onClick={this.removeItem}><ClearIcon  /></IconButton></Box>
        <Box height="100%" display="flex" alignItems="center" justifyContent="center">
          {this.getContent()}
        </Box>  
      </Box>
    );
  }

  getContent = () => {
    switch (this.props.type) {
      case "default":
        return (
          <IconButton 
            onClick={() => this.updateItem({ type: "chart" })}>
            <AddIcon />
          </IconButton>
        )
      case "chart":
        return (
          <SimpleChart 
            itemId={this.props.itemId} 
            rowCount={this.props.rowCount} 
            itemCount={this.props.itemCount} 
            width={this.props.width}
            height={this.props.height}
          />
        )
      default:
        break;
    }
  }

  updateItem = (obj) => {
    this.props.updateItem(this.props.itemNum, obj)
  }

  removeItem = () => {
    this.props.removeItem(this.props.itemNum)
  }

  resize = () => {
    let itemId = "item-" + this.props.itemId
    let item = document.getElementById(itemId);
    item.style.width = this.props.width + "px"
    item.style.height = this.props.height + "px"
  }
}
