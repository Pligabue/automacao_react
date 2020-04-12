import React, { Component } from 'react';
import { Box, IconButton } from '@material-ui/core';
import SimpleChart from '../../chart/SimpleChart';

import ClearIcon from '@material-ui/icons/Clear';

export default class DashboardItem extends Component {

  componentDidUpdate(prevProps) {
    this.resize()
  }

  render() {

    return (
      <Box flexGrow="1" id={"item-" + this.props.itemId}>
        <Box position="absolute" zIndex={1}><IconButton onClick={this.removeItem}><ClearIcon  /></IconButton></Box>
        <SimpleChart 
          itemId={this.props.itemId} 
          rowCount={this.props.rowCount} 
          itemCount={this.props.itemCount} 
          width={this.props.width}
          height={this.props.height} 
        />
      </Box>
    );
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
