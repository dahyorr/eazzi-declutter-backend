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
            'Ongoing',
            'Completed',
        ];
        this.data = {
            labels: this.labels,
            datasets: [{
                // label: 'Users',
                backgroundColor: ['#27aade','#43E673'],
                data: [60, 40],
                // fill: {
                //     target: 'origin',
                // },
                // tension: 0.4
            }]
        };
        this.config = {
            type: 'doughnut',
            data: this.data,
            options: {
                responsive: true,
                plugins:{
                    title: {
                        display: true,
                        text: 'Products',
                    },
                    legend: {
                        position:'left',
                        // align:'start',
                        labels: {
                            usePointStyle: true,
                        }
                    },
                },
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
