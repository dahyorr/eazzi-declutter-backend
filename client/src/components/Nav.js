import {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {categories} from '../productData'
import {logout} from '../actions/index'

const Nav = ({isAuthenticated, email, logout}) => {
    const [openCategory, setOpenCategory] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () =>{
        setNavOpen(!navOpen)
    }

    const renderCategories = () => categories.map(category => (
        <Link key={category.value} className="item" to={`/category/${category.value.split(' ').join('-')}`}>
            <i className={`fas ${category.iconName} text-secondary`}></i> {category.name}
        </Link>))

    return(
        <div className="Nav">
            <div className='flex'>
                <Link to='/' className="logo flex nav-link">
                    {/* <p>
                        <span className="text-secondary">E</span>
                        <span className="text-primary">D</span>
                    </p> */}
                        <p>
                            <span className="text-primary">Eazzi</span>
                            <span className="text-secondary">Declutter</span>
                        </p>
                </Link>

                <div className="categories nav-link" onMouseEnter={() => setOpenCategory(true)} onMouseLeave={() => setOpenCategory(false)}>Categories <i className="fas fa-caret-down"></i>
                    <div className={`dropdown-options ${openCategory? 'visible': 'non-visible'}`}>
                        {renderCategories()}
                    </div>
                </div>
            </div>
                
            
            <button className="hamburger" onClick={toggleNav}><i className={`fas fa-2x ${navOpen?'fa-times':'fa-bars'}`}></i></button>

            <ul className={`links flex ${navOpen?'toggleNav':''}`}>
                <li className='nav-link'><Link to='/'>Home</Link></li>
                <li className='nav-link'><Link to='/about'>About</Link></li>
                <li className='nav-link'><Link to='/contact'>Contact Us</Link></li>
                <li className='nav-link'><Link to='/favourites'>Favourites<span className="count text-secondary">1</span></Link></li>
                <li className='nav-link'><Link to='/cart'>Cart</Link></li>
                {!isAuthenticated? 
                    (<>
                        <li className='nav-link'><Link to='/login'>Sign In</Link></li>
                        <li className='nav-link'><span className="no-pointer">Don't have an account yet? </span><Link to='/signup' className='sign-up'>Sign Up</Link></li>
                    </>):
                    <>
                        <li className='nav-item'>{email}</li>
                        <li className='nav-link' onClick={logout}>
                            {/* <i className="fas fa-user"></i> <i className="fas fa-caret-down"></i> */}
                            <p>Logout</p>
                            </li>
                    </>
                }
            </ul>

        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated,
    email: state.auth.email
})

export default connect(mapStateToProps, {logout})(Nav)