import {withRouter} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {products} from '../../productData'
import localForage from 'localforage'
import Header from '../Header'
import Footer from '../Footer'
import Error404 from './Error404';

function formatNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const addToCart = async (product) => {
    let cartItems = await localForage.getItem('cart')
    if (!cartItems){
        cartItems = [{...product, quantity: 1}]
    }
    else{
        const itemIndex = cartItems.findIndex(item => item.id === product.id)
        if (itemIndex < 0){
            cartItems.push({...product, quantity: 1})
        }
        else{
            ++cartItems[itemIndex].quantity
        }
    }
    console.log(cartItems)
    localForage.setItem('cart', cartItems, () => toast.success('Added to cart Successfully'))   
}

const ProductPage = ({match}) => {
    const id = parseInt(match.params.id, 10)
    const product = products.filter((item) => id === item.id)[0]
    if(!product) return <Error404/>
    else return(
        <div className="ProductPage">
            <ToastContainer/>
            <Header/>
                <div className="content container flex">
                    <div className="left">
                        <div className="img-container">
                            <img src={product.imgURL}
                        alt={product.title}/>
                        </div>
                        <div className="info-container">
                        <div className="info">
                            <h3>{product.title}</h3>
                            <div className='flex'>
                                <p className="date-posted"><i className="fas fa-clock text-secondary"></i> Posted today, 12:00pm</p>
                                <p className="view-count"><i className="fas fa-eye text-secondary"></i> Viewed by 15</p>
                            </div>
                            <div className='flex'>
                                <p className="location"><i className="fas fa-map-marker-alt text-secondary"></i> Gbagada, Lagos</p>
                                <div className='action-buttons'>
                                <button className="add-to-cart text-primary" onClick={()=>addToCart(product)}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                                <button className="favorite text-secondary"><i className="fas fa-heart"></i> Add to favourites</button>
                                </div>
                            </div>
                            <div className="mobile interact flex">
                                <div className="price text-primary">₦{formatNumberWithCommas(product.price)}</div>
                                <div className="seller"><button className='bg-primary'><i className="fab fa-whatsapp"></i> Talk To Us</button></div>
                            </div>
                            </div>

                            
                            <h4>Description</h4>
                            {/* {id===1 && <table> */}
                            {<table>
                                <thead>
                                    <tr>
                                        <th>Component</th><th>Specification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>CPU</td>
                                        <td>x86-64-AMD Ryzen Zen 8 Cores / 16 Threads at 3.5GHz (variable frequency)</td>
                                    </tr>
                                    <tr>
                                        <td>GPU</td>
                                        <td>Ray Tracing Acceleration Up to 2.23 GHz (10.3 TFLOPS)</td>
                                    </tr>
                                    <tr>
                                        <td>GPU Architecture</td>
                                        <td>AMD Radeon RDNA 2-based graphics engine</td>
                                    </tr>
                                    <tr>
                                        <td>Memory Interface</td>
                                        <td>16GB GDDR6/256-bit</td>
                                    </tr>
                                    <tr>
                                        <td>Memory Bandwidth</td>
                                        <td>448GB/s</td>
                                    </tr>
                                    <tr>
                                        <td>Internal Storage</td>
                                        <td>Custom 825GB SSD</td>
                                    </tr>
                                    <tr>
                                        <td>IO Throughput</td>
                                        <td>5.5GB/s (Raw), Typical 8-9GB/s</td>
                                    </tr>
                                </tbody>
                            </table>}
                            </div>
                    </div>
                    <div className="right">

                        <div className="price text-primary mobile-hide">₦{formatNumberWithCommas(product.price)}</div>

                        <div className="seller bg-primary mobile-hide">
                            <p><i className="fab fa-whatsapp"></i> Talk To Us</p>
                        </div>

                        <div className="stock" >
                            <p className="text-secondary">Temporarily out of stock.</p>
                            <p>Order now and we will deliver when available.</p>
                            <p className='details'><span className='text-primary'>Details</span> <i className="fas fa-caret-down"></i></p>
                            {/* <h2 className='text-center text-secondary'> <i className="fas fa-shopping-cart"></i> Add to cart</h2> */}
                        </div>

                        <div className="feedback text-primary"><p><i className="far fa-smile"></i> Give Feedback</p></div>

                        <div className="ad text-secondary">Advertisement</div>
                    </div>
                    <div className="mobile mobile-ad">

                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default withRouter(ProductPage)