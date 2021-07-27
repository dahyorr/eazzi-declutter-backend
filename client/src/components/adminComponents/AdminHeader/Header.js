// import {useState} from 'react'
// import {MdSearch} from 'react-icons/md'
import {FaCaretDown} from 'react-icons/fa'
import userAvatar from '../../../static/userAvatar.svg'

const Header = ({title}) => {
    // const [input, setInput] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('Submit')
    // }

    return (
        <div className="Header flex">
            <h1>{title}</h1>
            <div className="user-search flex">
                {/* <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='search' value={input} onChange={e => setInput(e.target.value)} placeholder='Search'/>
                        <button type="submit"><MdSearch/></button>
                    </form>
                </div> */}
                <div className="user flex">
                    <img src={userAvatar} alt="Avatar" className="user-avatar" />
                    <p className="welcome text-primary">Hi Admin! <FaCaretDown/></p>
                </div>
            </div>
        </div>
    )
}

export default Header
