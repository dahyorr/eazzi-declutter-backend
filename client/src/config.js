import {createTheme} from "@material-ui/core/styles";


export const getMuiTheme = () => createTheme({
    overrides: {
        MUIDataTable: {
            root: {
                backgroundColor: "#FF000"
            },
            paper: {
                boxShadow: "none"
            }
        },
        MuiTableCell:{
            root: {
                color: 'red',
            },
            body: {
                fontWeight: '500',
            },
        },
        MUIDataTableSelectCell: {
            checked: {color: "#2F9C40 !important" }
        },
        // MUIDataTableToolbar: {
        //     actions:{
        //         width: 'fit-content',
        //     }
        // },
        MuiToolbar:{
            root:{
                // display: 'block',
                // justifyContent: 'left'
            }
        }
    }
})
export const capitalize = (word) =>{
    return word.split(' ').map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}

export const formatWithCommas = (number)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const API_URL = "/api"
// export const API_URL = "https://benefique-choucroute-07068.herokuapp.com/api"