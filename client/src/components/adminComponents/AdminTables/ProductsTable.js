import MUIDataTable from "mui-datatables";
import DetailLink from '../AdminDetailLink/DetailLink';
import {products} from '../../../productData'
import { MuiThemeProvider,} from "@material-ui/core/styles";
import {getMuiTheme, capitalize, formatWithCommas} from '../../../config'

const columns = [
    {label: 'Category', name: 'category', 
    options: {
        filter: true,
        sort: true,
        customBodyRender: category => capitalize(category[0]),
    }},
    {label: 'Product Name', name: 'title', options: {filter: false, sort: true,}},
    {label: 'Price', name: 'price', 
    options: {
        filter: false, 
        sort: true,
        customBodyRender: price => `₦${formatWithCommas(price)}`,
    }},
    {label: 'Location', name: 'location', options: {filter: true, sort: false,}},
    {label: 'Status',name: 'status', options: {
        filter: true, 
        sort: true,
        customBodyRender: status => <span className={status === 'Completed'? 'text-green' : 'text-yellow'}>{status}</span>
    } },
    {label: ' ',name: 'id', options: {
        filter: false, 
        sort: false,
        customBodyRender: id => <DetailLink path={`/admin/products/${id}`}/>,
    } },
]

const options = {
    filterType: 'checkbox',
    download: false,
    rowsPerPage: 6,
    rowsPerPageOptions: [5, 6, 7, 8, 9, 10, 100],
    searchPlaceholder: 'Search Here...',
    // customSearchRender: ()=>'search',
    print: false,
    viewColumns: false
};

const TableComponent = () => {
    return(
        <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                // title={"Employee List"}
                data={products}
                columns={columns}
                options={options}
                />
        </MuiThemeProvider>
    )
}

export default TableComponent
