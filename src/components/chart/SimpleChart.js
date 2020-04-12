import React, { Component } from 'react';
import Chart from "chart.js"
import { Box } from '@material-ui/core';

export default class SimpleChart extends Component {

  componentDidMount() {
    let chartId = 'chart-' + String(this.props.itemId)
    let ctx = document.getElementById(chartId);
    Chart.defaults.global.defaultFontColor = 'white';
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              color: 'rgba(171,171,171,1)',
              lineWidth: 0.5
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: 'rgba(171,171,171,1)',
              lineWidth: 0.5
            }
          }],
        },
      }
    });
  }

  render() {
    return (
      <Box
        height={this.props.height} 
        width={this.props.width} 
        style={{ position: "relative", padding: "1rem", boxSizing: "border-box" }}>  
        <canvas id={"chart-" + String(this.props.itemId)} />
      </Box>
    );
  }
}
