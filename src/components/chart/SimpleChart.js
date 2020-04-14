import React, { Component } from 'react';
import Chart from "chart.js"
import { Box } from '@material-ui/core';

export default class SimpleChart extends Component {

  constructor(props) {
    super(props);
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.maintainAspectRatio = false;
    Chart.defaults.scale.gridLines.color = 'rgba(171,171,171,1)'
    Chart.defaults.scale.gridLines.width = 0.5
  }
  

  componentDidMount() {
    let chartId = 'chart-' + String(this.props.itemId)
    let ctx = document.getElementById(chartId);
    
    var chart = new Chart(ctx, this.props.config);
  }

  render() {
    return (
      <Box
        height={1} 
        width={1} 
        style={{ position: "relative", padding: "1rem", boxSizing: "border-box" }}>  
        <canvas id={"chart-" + String(this.props.itemId)} />
      </Box>
    );
  }
}