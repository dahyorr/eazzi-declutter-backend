import Counters from "../../AdminCounters/Counters"
import LineChart from "../../AdminCharts/LineChart"
import RequestsDoughnutChart from "../../AdminCharts/RequestsDoughnutChart"
import ProductsDoughnutChart from "../../AdminCharts/ProductsDoughnutChart"

const Dashboard = () => {
    const counters = [
        {title: 'Total Requests', count: 23},
        {title: 'Resolved Requests', count: 9},
        {title: 'Products', count: 345},
        {title: 'Sold Products', count: 345},
    ]
    return (
        <div className="DashBoard">
            <Counters counters={counters}/>
            <div className="charts">
                <div className="chart" style={{width: '33.5vw', height: '300px'}}>
                    <LineChart/>
                </div>
                <div className="chart" style={{width: '33.5vw', height: '300px'}}>
                    <div style={{width: '15vw', height: '300px'}}>
                        <RequestsDoughnutChart/>
                    </div>
                    <div style={{width: '15vw', height: '300px'}}>
                        <ProductsDoughnutChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
