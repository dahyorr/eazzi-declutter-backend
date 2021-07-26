import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {categories} from '../productData'
import {logout} from '../actions/index'
import localForage from "localforage";

const Nav = ({isAuthenticated, name, logout}) => {
    const [openCategory, setOpenCategory] = useState(false)
    const [navOpen, setNavOpen] = useState(false)
    const [cartCount, setCartCount] = useState(false)
    useEffect(() => {
        localForage.getItem('cart')
            .then(cart => setCartCount(cart.length))
    })



    const toggleNav = () =>{
        setNavOpen(!navOpen)
    }

    const renderCategories = () => categories.map(category => (
        <Link key={category.value} className="item" to={`/category/${category.value.split(' ').join('-')}`}>
            <i className={`fas ${category.iconName} text-secondary`}/> {category.name}
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

                <div className="categories nav-link" onMouseEnter={() => setOpenCategory(true)} onMouseLeave={() => setOpenCategory(false)}>Categories <i className="fas fa-caret-down"/>
                    <div className={`dropdown-options ${openCategory? 'visible': 'non-visible'}`}>
                        {renderCategories()}
                    </div>
                </div>
            </div>
                
            
            <button className="hamburger" onClick={toggleNav}><i className={`fas fa-2x ${navOpen ? 'fa-times' : 'fa-bars'}`}/></button>

            <ul className={`links flex ${navOpen?'toggleNav':''}`}>
                <li className='nav-link'><Link to='/'>Home</Link></li>
                <li className='nav-link'><Link to='/about'>About</Link></li>
                <li className='nav-link'><Link to='/contact'>Contact Us</Link></li>
                {/*<li className='nav-link'><Link to='/favourites'>Favourites</Link></li>*/}
                <li className='nav-link cart-link'><Link to='/cart'>Cart{cartCount?<span className="count text-secondary">{cartCount}</span>:''}</Link></li>
                {!isAuthenticated? 
                    (<>
                        <li className='nav-link'><Link to='/login'>Sign In</Link></li>
                        <li className='nav-link'><span className="no-pointer">Don't have an account yet? </span><Link to='/signup' className='sign-up'>Sign Up</Link></li>
                    </>):
                    <>
                        <li className='nav-item'>{name}</li>
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

const mapStateToProps = ({auth}) =>({
    isAuthenticated: auth.isAuthenticated,
    name: auth.name
})

export default connect(mapStateToProps, {logout})(Nav)