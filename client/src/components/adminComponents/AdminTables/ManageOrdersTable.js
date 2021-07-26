import {useEffect, useState} from "react";
import api from "../../../helpers/api";
// import faker from 'faker'
import MUIDataTable from "mui-datatables";
import DetailLink from '../AdminDetailLink/DetailLink';
import { MuiThemeProvider,} from "@material-ui/core/styles";
import {getMuiTheme} from '../../../config'

const columns = [
    {label: 'Order Id', name: 'id', options: {
            filter: false,
            sort: true,
            customBodyRender: id => `#${id}`
        }},
    {label: 'Name', name: 'name', options: {filter: false, sort: true,}},
    {label: 'Phone Number', name: 'phone', options: {filter: false, sort: false,}},
    {label: 'Delivery Method', name: 'deliveryMethod', options: {
        filter: false,
        sort: false,
        customBodyRender: delivery => delivery === 'homeDelivery' ? 'Home Delivery' : delivery === 'pickUp' ? 'Pick Up' : null
        }},
    {label: 'Location', name: 'state', options: {filter: false, sort: false,}},
    {label: 'Status',name: 'status', options: {
        filter: true, 
        sort: true,
        customBodyRender: status => <span className={status === 'Resolved'? 'text-green' : 'text-yellow'}>{status}</span>
    } },
    {label: ' ',name: 'id', options: {
        filter: false, 
        sort: false,
        customBodyRender: id => <DetailLink path={`/admin/orders/${id}`}/>,
    } },
]

// const dataOld = Array(125).fill().map((x,index) => ({
//     id: index,
//     name: faker.name.firstName(),
//     email: faker.internet.email(),
//     phoneNumber: faker.phone.phoneNumber(),
//     status: Math.floor(Math.random()*2)?'Resolved': 'Pending'
// }))

const options = {
    filterType: 'checkbox',
    download: false,
    rowsPerPage: 8,
    rowsPerPageOptions: [5, 6, 8, 10, 100],
    searchPlaceholder: 'Search Here...',
    print: false,
    viewColumns: false
};

const TableComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        api.get('/orders')
            .then(res => setData(res.data.orders))
    }, [])
    return(
        <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
            // title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
            />
        </MuiThemeProvider>
    )
}

export default TableComponent
