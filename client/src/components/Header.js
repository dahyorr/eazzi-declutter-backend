import Nav from "./Nav"
import Search from "./Search"

const Header = () => {
    return(
        <div className="Header">
            <div className="container">
                <Nav/>
                <Search/>
            </div>
        </div>
    )
}
export default Header