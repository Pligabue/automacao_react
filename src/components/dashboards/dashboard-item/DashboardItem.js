import React, { Component } from 'react';
import { Box, IconButton, Button, Typography, Modal, ThemeProvider } from '@material-ui/core';
import SimpleChart from '../chart/SimpleChart';
import ModalForm from "../modal-form/ModalForm"

import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';

export default class DashboardItem extends Component {

  handleChange = (e) => {
    this.updateItem({
      [e.target.name]: e.target.value 
    })
  }

  addToList = () => {
    if (!this.props.estacaoList.includes(this.props.estacao) && this.props.estacao) {
      this.updateItem({
        estacaoList: [...this.props.estacaoList, this.props.estacao],
      })
    }
  }

  openForm = () => {
    this.updateItem({
      type: "form",
      estacao: "",
      estacaoList: [],
      open: true,
    })
  }

  closeForm = () => {
    this.updateItem({
      type: "default",
      estacao: "",
      estacaoList: [],
      open: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.props.dataInicio || !this.props.dataFim || this.props.estacaoList.length === 0) {
      return
    }
    let url = `https://automacao-backend.azurewebsites.net/medicoes?dataInicio=${this.props.dataInicio}&dataFim=${this.props.dataFim}&estacaoList=${this.props.estacaoList}`
    console.log(url)
    Axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.updateItem({
          config: buildConfig(response.data, this.props.dataInicio, this.props.dataFim),
          type: "chart"
        })
      })
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
            <IconButton onClick={this.openForm}>
              <AddIcon />
            </IconButton>
          </Box>
        )
      case "form":
        return (
          <ModalForm 
            open={this.props.open}
            onClose={this.closeForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            itemId={this.props.itemId}
            currentEstacao={this.props.estacao}
            getEstacaoList={this.getEstacaoList}
            addToList={this.addToList}
          />
        )
      case "chart":
        return (
          <SimpleChart 
            itemId={this.props.itemId} 
            rowCount={this.props.rowCount} 
            itemCount={this.props.itemCount} 
            config={this.props.config}
          />
        )
      default:
        break;
    }
  }

  getEstacaoList = () => {
    let humanized = this.props.estacaoList.map((estacao, index) => (humanize(estacao)))
    if (humanized.length >= 1) {
      return humanized.reduce((total, estacao) => {
        return total + ", " + estacao
      })
    } else {
      return "Nenhuma"
    }
  }

  updateItem = (obj) => {
    this.props.updateItem(this.props.itemNum, obj)
  }

  removeItem = () => {
    this.props.removeItem(this.props.itemNum)
  }
}

function humanize(text) {
  switch (text) {
    case "iluminacao":
      return "Iluminação"
    case "servidor":
      return "Servidor"
    case "rede":
      return "Rede"
    case "ar_cond":
      return "Ar condicionado"
    case "bancadas":
      return "Bancadas"
    default:
      return text
  }  
}

function buildConfig(data, dataInicio, dataFim) {
  let datasets = []
  let title = []
  for (let estacao of Object.keys(data)) {
    title.push(humanize(estacao))
    datasets.push({
      fill: false,
      label: humanize(estacao),
      borderColor: getRandomColor(),
      lineTension: 0.0,
      data: data[estacao]
    })
  }
  let config = {
    type: 'line',
    data: {
      datasets: datasets
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
        }]
      }, 
      title: {
        display: true,
        text: title.join(", ") + " - " + formatDate(dataInicio) + " a " + formatDate(dataFim)
      }
    }
  }
  return config
}

function getRandomColor() {
  return `rgb(${128+Math.floor(128*Math.random())}, ${128+Math.floor(128*Math.random())}, ${128+Math.floor(128*Math.random())})`;
}

function formatDate(dateString) {
  let date = new Date(dateString)
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}` 
}