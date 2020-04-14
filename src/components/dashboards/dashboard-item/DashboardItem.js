import React, { Component } from 'react';
import { Box, IconButton, Button, Typography, Modal, ThemeProvider } from '@material-ui/core';
import SimpleChart from '../../chart/SimpleChart';

import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';

export default class DashboardItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estacao: "",
      estacaoList: [],
      open: true,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  addToList = () => {
    if (!this.state.estacaoList.includes(this.state.estacao) && this.state.estacao) {
      this.setState({
        estacaoList: [...this.state.estacaoList, this.state.estacao],
      })
    }
  }

  closeModal = () => {
    this.updateItem({
      type: "default"
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.dataInicio || !this.state.dataFim || this.state.estacaoList.length === 0) {
      return
    }
    let url = `https://automacao-backend.azurewebsites.net/medicoes?dataInicio=${this.state.dataInicio}&dataFim=${this.state.dataFim}&estacaoList=${this.state.estacaoList}`
    console.log(url)
    Axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.updateItem({
          config: buildConfig(response.data),
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
            <IconButton
              onClick={() => { this.updateItem({ type: "form" }) }}>
              <AddIcon />
            </IconButton>
          </Box>
        )
      case "form":
        return (
          <SelectionForm 
            open={this.state.open}
            onClose={this.closeModal}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            itemId={this.props.itemId}
            currentEstacao={this.state.estacao}
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
    let humanized = this.state.estacaoList.map((estacao, index) => (humanize(estacao)))
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

function SelectionForm(props) {
  return(
    <Modal 
      open={props.open} 
      onClose={props.onClose} 
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box position="absolute" style={{ outline: 0 }} bgcolor="background.default">
        <Box bgcolor="secondary.main" p={1} textAlign="center"  borderRadius="0.5rem 0.5rem 0 0">
          <Typography variant="h6">Adicionar Medição</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" bgcolor="text.secondary" p={1} borderRadius="0 0 0.5rem 0.5rem">
          <Box p={1}>
            <label>Estações selecionadas: </label>
            <span>{props.getEstacaoList()}</span>
          </Box>
          <form onSubmit={props.handleSubmit}>
            <Box p={1}>
              <label htmlFor={"estacao-" + props.itemId}>Selecione a estação: </label>
              <select 
                id={"estacao-" + props.itemId} 
                name="estacao" 
                value={props.currentEstacao}
                onChange={props.handleChange}
              >
                <option value="" disabled>Selecione</option>
                <option value="iluminacao">Iluminação</option>
                <option value="servidor">Servidor</option>
                <option value="rede">Rede</option>
                <option value="ar_cond">Ar condicionado</option>
                <option value="bancadas">Bancadas</option>
              </select>
              <Button onClick={props.addToList}>Adicionar</Button>
            </Box>
            <Box p={1}>
              <label htmlFor={"dataInicio-" + props.itemId}>Data de Início: </label>
              <input 
                id={"dataInicio-" + props.itemId} 
                name="dataInicio" 
                type="datetime-local"  
                onChange={props.handleChange}
              />
            </Box>
            <Box p={1}>
              <label htmlFor={"dataFim-" + props.itemId}>Data de Fim: </label>
              <input 
                id={"dataFim-" + props.itemId} 
                name="dataFim" 
                type="datetime-local" 
                onChange={props.handleChange}
              />
            </Box>
            <Box textAlign="right"><Button type="submit">SEND</Button></Box>
          </form>
        </Box>  
      </Box>
    </Modal>
  )
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

function buildConfig(data) {
  let datasets = []
  for (let estacao of Object.keys(data)) {
    console.log(data[estacao])
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
      }
    }
  }
  return config
}

function getRandomColor() {
  return `rgb(${128+Math.floor(128*Math.random())}, ${128+Math.floor(128*Math.random())}, ${128+Math.floor(128*Math.random())})`;
}