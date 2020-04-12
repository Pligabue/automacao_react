import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import SimpleChart from '../../chart/SimpleChart';

export default class DashboardItem extends Component {

  componentDidUpdate(prevProps) {
    this.resize()
  }

  render() {

    return (
      <Box flexGrow="1" id={"item-" + this.props.itemId}>
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

  resize = () => {
    let itemId = "item-" + this.props.itemId
    let item = document.getElementById(itemId);
    item.style.width = this.props.width + "px"
    item.style.height = this.props.height + "px"
  }
}
