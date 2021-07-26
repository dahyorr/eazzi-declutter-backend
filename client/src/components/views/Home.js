import Header from "../Header"
import Footer from "../Footer"
import Landing from "../Landing"
import ProductCarousel from "../ProductCarousel"
import ProductList from "../ProductList"
import Testimonials from "../Testimonials"
import {connect} from "react-redux";
import {fetchProducts} from '../../actions'
import couchImg from '../../static/productCarousel/couch-carousel.jpg'
import tvImg from '../../static/productCarousel/tv-carousel.jpg'
import {useEffect} from "react";


const images = [
    {url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80', text: 'Dell Laptop'},
    {url: couchImg, text: 'Green Couch'},
    {url: tvImg, text: 'LG UHD TV'},
    {url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 
    text: 'Headphones'},
]

const Home = ({fetchProducts, products}) => {
    useEffect(() => {
        fetchProducts()
        console.log('run')
    }, [fetchProducts])
    return (
        <div className="Home">
            <Header/>
            <Landing/>
            <ProductCarousel images={images}/>
            <ProductList products={products.slice(0,8)} title={'DEALS OF THE DAY'}/>
            <ProductList products={products.slice(0,8)} title={'HOT NEW ARRIVALS'}/>
            <ProductList products={products.slice(0,4)} title={'TOP SALES OF THE MONTH'}/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = ({products}) => ({
    products: products
})

export default connect(mapStateToProps, {fetchProducts})(Home)