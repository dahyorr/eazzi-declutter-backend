import Footer from "../Footer"
import Header from "../Header"

const Error404 = () =>{
    return(
        <div className="Error">
            <Header/>
            <div className="container content flex">
                <h1>404 Not Found</h1>
            </div>
            <Footer/>
        </div>
    )
}
export default Error404