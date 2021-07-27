import React from 'react'
import {Chart, registerables} from "chart.js";

Chart.register(...registerables)

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    componentDidMount(){
        this.ctx = this.chartRef.current.getContext('2d')
        this.gradient = this.ctx.createLinearGradient(0, 0, 0, 700);
        this.gradient.addColorStop(0, "rgb(123, 237, 157)");
        this.gradient.addColorStop(0.8, "rgba(255,255,255,1)");
        this.labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];
        this.data = {
            labels: this.labels,
            datasets: [{
                label: 'Users',
                backgroundColor: this.gradient,
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgb(46, 173, 223)',
                borderColor: 'rgb(46, 173, 223)',
                data: [550, 250, 550, 750, 550, 1000],
                fill: {
                    target: 'origin',
                },
                tension: 0.4
            }]
        };
        this.config = {
            type: 'line',
            data: this.data,
            options: {
                responsive: true,
                plugins:{
                    title: {
                        display: true,
                        text: 'User Sign Ups',
                    },
                    legend: {
                        position:'bottom',
                        align:'start',
                        labels: {
                            usePointStyle: true,
                        }
                    },
                },
                scales: {
                    y:{suggestedMax: 1200}
                }
            }
        };
        this.chart = new Chart(this.ctx, this.config)
    }
    componentWillUnmount(){
        this.chart.destroy()
    }
    componentDidUpdate(){
        this.chart.destroy()
        this.chart = new Chart(this.ctx, this.config)
    }

    render(){
        return(
            <>
                <canvas ref={this.chartRef} id="lineChart">
                </canvas>
            </>
            )
    }

}

export default LineChart
