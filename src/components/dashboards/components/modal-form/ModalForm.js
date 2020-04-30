import React from "react"

import { Modal, Box, Typography, Button } from "@material-ui/core";

export default function ModalForm(props) {
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
        <Box display="flex" flexDirection="column" alignItems="stretch" bgcolor="text.secondary" p={1} borderRadius="0 0 0.5rem 0.5rem">
          <Box p={1}>
            <label>Estações selecionadas: </label>
            <span>{props.getEstacaoList()}</span>
          </Box>
          <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
            <Box p={1}>
              <label htmlFor={"estacao-" + props.itemId}>Selecione a estação: </label>
              <select 
                id={"estacao-" + props.itemId} 
                name="estacao" 
                defaultValue=""
                style={{ width: "100%" }}
              >
                <option value="" disabled>Selecione</option>
                <option value="iluminacao">Iluminação</option>
                <option value="servidor">Servidor</option>
                <option value="rede">Rede</option>
                <option value="ar_cond">Ar condicionado</option>
                <option value="bancadas">Bancadas</option>
              </select>
            </Box>
            <Box textAlign="right"><Button onClick={props.addToList}>Adicionar</Button></Box>
            <Box p={1}>
              <label htmlFor={"query-" + props.itemId}>Selecione o tipo de dado: </label>
              <select 
                id={"query-" + props.itemId} 
                name="query" 
                defaultValue=""
                style={{ width: "100%" }}
              >
                <option value="" disabled>Selecione</option>
                <option value="valoresTarifas">Valor por Tarifa</option>
                <option value="medicoes">Medições no Tempo</option>
              </select>
            </Box>
            <Box p={1}>
              <label htmlFor={"dataInicio-" + props.itemId}>Data de Início: </label>
              <input 
                id={"dataInicio-" + props.itemId} 
                name="dataInicio" 
                type="datetime-local" 
                style={{ width: "100%" }} 
              />
            </Box>
            <Box p={1}>
              <label htmlFor={"dataFim-" + props.itemId}>Data de Fim: </label>
              <input 
                id={"dataFim-" + props.itemId} 
                name="dataFim" 
                type="datetime-local" 
                style={{ width: "100%" }}
              />
            </Box>
            <Box textAlign="right"><Button type="submit">SEND</Button></Box>
          </form>
        </Box>  
      </Box>
    </Modal>
  )
}