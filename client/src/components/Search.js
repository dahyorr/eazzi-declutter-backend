import {useState} from 'react'
import { withRouter } from 'react-router'
// import Dropdown from "./Dropdown"

// const dropdownOptions =[
//     {value: 'All Categories', label:'All Categories', icon: 'border-all'},
//     {value: 'Furniture', label:'Furniture', icon: 'couch'},
//     {value: 'Electronics', label:'Electronics', icon: 'tv' },
//     {value: 'Home & Office', label:'Home & Office', icon: 'home'},
//     {value: 'Household Items', label:'Household Items', icon: 'blender'},
//     {value: 'Computers', label:'Computers', icon: 'laptop' },
//     {value: 'Phones', label:'Phones', icon: 'mobile'},
//     {value: 'Clothing', label:'Clothing', icon: 'tshirt'},
//     {value: 'Children & Toys', label:'Children & Toys', icon: 'puzzle-piece' },
//     {value: 'Health & Beauty', label:'Health & Beauty', icon: 'plus-square' },
//     {value: 'Cars', label:'Cars', icon: 'car' },
// ]

const Search = ({history}) =>{
    const [inputValue, setInputValue] = useState('')
    // const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0])

    const onChange = e =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (inputValue.trim() !== '')history.push(`/search/${inputValue.trim().split(' ').join('+')}`)
    }

    return(
        <form className="Search flex"  onSubmit={handleSubmit}>
            <div className='input-container'>
                <i className="fas fa-search"></i>
                <input type="text" placeholder='Search Here' value={inputValue} onChange={onChange}/>
                {/* <Dropdown options={dropdownOptions} onChange={setDropdownValue} value={dropdownValue} label='Categories'/> */}
            </div>

            <button className='search-button' type='submit'>Search</button>
        </form>
    )
}
export default withRouter(Search)