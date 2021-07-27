
import faker from 'faker'
import MUIDataTable from "mui-datatables";
import DetailLink from '../AdminDetailLink/DetailLink';
import { MuiThemeProvider,} from "@material-ui/core/styles";
import {getMuiTheme} from '../../../config'

const columns = [
    {label: 'First Name', name: 'firstName', options: {filter: false, sort: true,}},
    {label: 'Last Name', name: 'lastName', options: {filter: false, sort: true,}},
    {label: 'Email', name: 'email', options: {filter: false, sort: false,}},
    {label: 'Phone Number', name: 'phoneNumber', options: {filter: false, sort: false,}},
    {label: 'Status',name: 'status', options: {
        filter: true, 
        sort: true,
        customBodyRender: status => <span className={status === 'Resolved'? 'text-green' : 'text-yellow'}>{status}</span>
    } },
    {label: ' ',name: 'id', options: {
        filter: false, 
        sort: false,
        customBodyRender: id => <DetailLink path={`/admin/requests/${id}`}/>,
    } },
]
const data = Array(125).fill().map((x,index) => ({
    id: index,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    status: Math.floor(Math.random()*2)?'Resolved': 'Pending'
}))

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
