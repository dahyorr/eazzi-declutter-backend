import {Link} from 'react-router-dom'
import Footer from "../Footer"
import Header from "../Header"
import ProductList from "../ProductList"
import {products} from "../../productData"

const Favourites = () =>{
    const renderProducts = products.slice(0,4).map((item, index) => (
        <div className="item" key={index}>
            <button className="remove-icon"><i className="fas fa-times-circle fa-2x text-secondary"></i></button>
                <img src={item.imgURL} alt=""/>
                <Link to={`/product/${item.id}`}>
                    <div className='text'>{item.title}</div>
                </Link>
        </div>
    ))

    return(
        <div className="Favourites">
            <Header/>
            <div className="content container">
                <h1 className="text-center">FAVOURITES</h1>
                <div className="favourite-content">
                    <h3>My Favourites</h3>
                    <div className='list'>
                        {renderProducts}
                    </div>
                </div>
                <ProductList products={products} title={'MOST SEARCHED ITEMS'}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Favourites