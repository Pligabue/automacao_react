import React, { Component } from 'react';
import { Box, IconButton, Button, Typography, Modal, ThemeProvider } from '@material-ui/core';
import SimpleChart from '../chart/SimpleChart';
import ModalForm from "../modal-form/ModalForm"

import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';

import humanize from '../../../helpers/humanize';
import formatDate from '../../../helpers/formatDate';
import getRandomColor from '../../../helpers/getRandomColor'

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
    if (!this.props.query || !this.props.dataInicio || !this.props.dataFim || this.props.estacaoList.length === 0) {
      return
    }
    let url = `https://automacao-backend.azurewebsites.net/${this.state.query}?dataInicio=${this.props.dataInicio}&dataFim=${this.props.dataFim}&estacaoList=${this.props.estacaoList}`
    console.log(url)
    Axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.updateItem({
          config: buildConfig(response.data, this.props.dataInicio, this.props.dataFim, this.props.query),
          type: "chart"
        })
      })
  }

  render() {

    return (
      <Box 
        id={"item-" + this.props.itemId} 
        position="relative" 
        width={this.props.width} 
        borderRight={1}
        borderBottom={1}
        borderColor="background.secondary"
      >
        <Box position="absolute" right="0" zIndex={1}>
          <Button onClick={this.increaseItemWeight}>Expand</Button>
          <Button onClick={this.decreaseItemWeight}>Reduce</Button>
          <IconButton onClick={this.removeItem}><ClearIcon  /></IconButton>
        </Box>
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

  increaseItemWeight = () => {
    this.props.increaseItemWeight(this.props.itemNum)
  }

  decreaseItemWeight = () => {
    this.props.decreaseItemWeight(this.props.itemNum)
  }
}

function buildConfig(data, dataInicio, dataFim, query) {
  let datasets = []
  let title = []
  let type = (query === "valoresTarifas") ? "bar" : "line"
  let options = {}
  switch (query) {
    case "valorTarifa":
      title = data.labels.map((value) => (humanize(value)))
      datasets = [
        { label: "Tarifa Branca", borderColor: "white", backgroundColor: "white", data: data["tarifa_branca"] },
        { label: "Tarifa Verde", borderColor: "green", backgroundColor: "green", data: data["tarifa_verde"] },
        { label: "Tarifa Amarela", borderColor: "yellow", backgroundColor: "yellow", data: data["tarifa_amerela"] },
        { label: "Tarifa Vermelha", borderColor: "red", backgroundColor: "red", data: data["tarifa_vermelha"] }
      ]
      options = {
        title: {
          display: true,
          text: "Consumo: " + title.join(", ") + " - " + formatDate(dataInicio) + " a " + formatDate(dataFim)
        }
      }
      break;
    case "medicoes":
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
      options = {
        scales: {
          xAxes: [{
            type: 'time',
          }]
        }, 
      }, 
        }, 
        title: {
          display: true,
          text: title.join(", ") + " - " + formatDate(dataInicio) + " a " + formatDate(dataFim)
        }
      }
      break;
    default:
      break;
  }
  let config = {
    type: type,
    data: {
      datasets: datasets
    },
    options: options
  }
  return config
}
