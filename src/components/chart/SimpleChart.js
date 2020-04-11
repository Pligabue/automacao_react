import React, { Component } from 'react';
import Chart from "chart.js"

export default class SimpleChart extends Component {

  componentDidMount() {
    let chartId = 'chart-' + String(this.props.itemId)
    let ctx = document.getElementById(chartId);
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.resize()
  }

  componentDidUpdate(prevProps) {
    this.resize()
  }

  render() {
    return (
      <div style={{ position: "relative", padding: "1rem", boxSizing: "border-box" }}>  
        <canvas id={"chart-" + String(this.props.itemId)} />
      </div>
    );
  }

  resize = () => {
    let chartId = 'chart-' + String(this.props.itemId)
    let ctx = document.getElementById(chartId);
    ctx.parentNode.style.width = this.props.width + "px"
    ctx.style.width = ctx.offsetWidth + "px"
    ctx.parentNode.style.height = this.props.height + "px"
    ctx.style.height = this.props.height + "px"
  }
}
