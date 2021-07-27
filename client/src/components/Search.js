import {useState} from 'react'
import { withRouter } from 'react-router-dom'

const Search = ({history}) =>{
    const [inputValue, setInputValue] = useState('')

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
                <i className="fas fa-search"/>
                <input type="text" placeholder='Search Here' value={inputValue} onChange={onChange}/>
            </div>

            <button className='search-button' type='submit'>Search</button>
        </form>
    )
}
export default withRouter(Search)