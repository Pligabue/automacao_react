import React, { Component } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 4, 4, 4),
  },
}));

export default function Sobre() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Typography paragraph variant="h2">
        Custo-Eficiência Energética
      </Typography>
      <Typography paragraph variant="h3">
        Sobre o projeto
      </Typography>
      <br />

      <Typography paragraph variant="h5">
        Qual é o objetivo do projeto?
      </Typography>
      <Typography paragraph variant="subtitle1">
        Este projeto foi desenvolvido para a disciplina
        PCS3519 - Aplicações e Tecnologias em Automação
        do 5o ano de Engenharia Elétrica com Ênfase em Computação
        e busca aplicar os conceitos de Automação.
        Para isso, o projeto visa implementar uma aplicação web de monitoramento dos gastos e
        consumo de energia elétrica baseado nos custos do mês corrente (bandeira) e
        da Tarifa Branca, que classifica diferentes custos durante o período do dia,
        estabelecidos pela distribuidora de energia, a fim de possibilitar controle
        em tempo real dos custos e fornecer sugestões de mudanças nos hábitos de consumo diários.
      </Typography>
      <br />
      
      <Typography paragraph variant="h5">
        Qual problema  projeto se propõe a resolver?
      </Typography>
      <Divider variant="middle" />
      <Typography paragraph variant="subtitle1">
        O projeto visa proporcionar maior autonomia ao consumidor quanto
        ao monitoramento de seus gastos com energia elétrica e colaborar para a
        elaboração de estratégias de redução de consumo através do entendimento do
        próprio consumo ao longo do tempo e das tarifas aplicadas.
        A análise de custo-eficiência será feita com o auxílio da <i>API do
        Setor Elétrico Brasileiro, da Way2 Tecnologia</i>, que disponibiliza bandeiras
        tarifárias, tarifas das concessionárias e preço da liquidação das diferenças.
        Ao final, será gerada uma proposta de como reduzir os gastos com energia.
      </Typography>
      <br />

      <Typography paragraph variant="h5">
        A qual contexto o projeto se aplica?
      </Typography>
      <Divider variant="middle" />
      <Typography paragraph variant="subtitle1">
        Utiliza-se como base para o desenvolvimento deste projeto a
        simulação de um ambiente corporativo no qual utilizam-se
        diversos equipamentos elétricos para manter as funcionalidades das
        instalações e para servir aos funcionários. Os dados de consumo são
        calculados a partir de medições armazenadas temporalmente.
      </Typography>
      <br />
    </div>
  );
}
