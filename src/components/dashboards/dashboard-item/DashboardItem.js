import React, { Component } from 'react';
import { Box, IconButton, Button, Modal, Typography } from '@material-ui/core';
import SimpleChart from '../../chart/SimpleChart';

import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';

export default class DashboardItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  

  componentDidUpdate(prevProps) {
    this.resize()
  }

  render() {

    return (
      <Box id={"item-" + this.props.itemId} position="relative" width={this.props.width}>
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
          <Box bgcolor="secondary.main" borderRadius="100%" p={1}>
            <IconButton
              onClick={() => { this.updateItem({ type: "chart" }) }}>
              <AddIcon />
            </IconButton>
          </Box>
        )
      case "form":
        return (
          <form>
            <Box>
              <label htmlFor="station">Selecione a estação:</label>
              <select id="station" name="station">
                <option value="ar_cond">Ar-condicionado</option>
                <option value="server">Servidor</option>
              </select>
            </Box>
            <Box>
              <label htmlFor="measurement">Selecione a medição:</label>
              <select id="measurement" name="measurement">
                <option value="interval">Consumo em intervalo de tempo</option>
                <option value="value">Valor</option>
              </select>
            </Box>
          </form>
        )
      case "chart":
        return (
          <SimpleChart 
            itemId={this.props.itemId} 
            rowCount={this.props.rowCount} 
            itemCount={this.props.itemCount} 
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
    // let itemId = "item-" + this.props.itemId
    // let item = document.getElementById(itemId);
    // item.style.width = this.props.width + "px"
    // item.style.height = this.props.height + "px"
  }
}