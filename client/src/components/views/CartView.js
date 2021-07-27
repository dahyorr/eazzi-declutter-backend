import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import localForage from 'localforage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function formatNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CartView = () => {
    let [cartItems, setCartItems] = useState([]);
    // let [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        localForage.getItem('cart', null)
        .then(cart => {
            if(!cart) setCartItems([])
            else setCartItems(cart)
        })
    }, [])

    let cartTotal = 0
    if(cartItems.length > 0){
        cartItems.forEach((item) => {
            cartTotal = cartTotal + (item.quantity * item.price)
        })
    }

    const removeFromCart = async (product)=>{
        const newCart = cartItems.filter((item) => item.id !== product.id)
        setCartItems(newCart)
        await localForage.setItem('cart', newCart, () => {toast.info('Removed from cart')})
    }

    return(
        <div className="CartView">
            <ToastContainer/>
            <Header/>
            <div className="content container">
                <h1 className="text-center">CART</h1>
                <div className="cartList">
                    {cartItems.length<1?
                    <h3>No cart items</h3>:
                    cartItems.map(item =>(
                        <div className="cartItem" key={item._id}>
                            <img src={item.imgUrl} alt="Product" />
                            <h4>{item.title}</h4>
                            <div className="details">
                                <div>
                                    <h4>Quantity</h4>
                                    <p>{item.quantity}</p>
                                </div>
                                <div>
                                    <h4>Price</h4>
                                    <p>₦{formatNumberWithCommas(item.price)}</p>
                                </div>
                                <div className="delete-icon" onClick={() => removeFromCart(item)}>
                                    <i className="far fa-trash-alt"/>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {cartItems.length > 0 &&
                    <div className="total">
                        <h2>Total Price: ₦{formatNumberWithCommas(cartTotal)}</h2>
                    </div>}

                    {cartItems.length > 0 &&
                    <div className="checkout">
                        <Link className="checkout-button" to='/create-order'>Checkout</Link>
                    </div>}

                </div>

            </div>
            <Footer/>
        </div>
    )
}
export default CartView;