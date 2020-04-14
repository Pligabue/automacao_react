import React, { Component } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 4, 4, 4),
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Typography paragraph variant="h2">
        Custo-Eficiência Energética
      </Typography>
      <Typography paragraph variant="h3">
        Análise e Otimização
      </Typography>
      <br />

      <Typography variant="overline">
        Este projeto visa proporcionar maior autonomia ao consumidor quanto 
        ao monitoramento de seus gastos com energia elétrica e colaborar para a 
        elaboração de estratégias de redução de consumo através do entendimento do 
        próprio consumo ao longo do tempo e das tarifas aplicadas.
        A análise de custo-eficiência será feita com o auxílio da API do 
        Setor Elétrico Brasileiro, da Way2 Tecnologia, que disponibiliza bandeiras 
        tarifárias, tarifas das concessionárias e preço da liquidação das diferenças. 
        Ao final, será gerada uma proposta de como reduzir os gastos com energia.
      </Typography>

    </div>
  );
}
