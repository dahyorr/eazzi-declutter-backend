import { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import localForage from "localforage"
import Footer from "../Footer"
import Header from "../Header"

function formatNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Order = ({history}) => {
    let [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        localForage.getItem('cart', null)
        .then(cart => {
            if(!cart) history.push('/cart')
            else setCartItems(cart)
        })
    }, [history])

    let cartTotal = 0
    if(cartItems.length > 0){
        cartItems.forEach((item) => {
            cartTotal = cartTotal + (item.quantity * item.price)
        })
        console.log(cartTotal)
    }

    return(
        <div className="Order">
            <Header/>
            <div className="content container">
                <div className="order-content">
                    <div className="left pane">
                    {cartItems.map(item =>(
                        <div className="cartItem" key={item.id}>
                            <img src={item.imgURL} alt="Product" />
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
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="right pane">

                        <div className="address">
                            <h4>1. Address Details</h4>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" name="owner" placeholder="Name"/>
                                <textarea type="text" name="address" placeholder="Address"></textarea>
                                <input type="text" name="state" placeholder="State"/>
                                <input type="text" name="Phone Number" placeholder="Phone Number"/>
                            </form>
                        </div>

                        <div className="delivery-method">
                            <h4>2. Delivery Method</h4>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="input-group">
                                    <input type="radio" value="homeDelivery" id='home' name="deliveryMethod" selected/>
                                    <label htmlFor="home">Home Delivery</label>
                                </div>

                                <div className="input-group">
                                    <input value="pickUp" type='radio' id='pickup' name="deliveryMethod"/>
                                    <label htmlFor="pickup">Pick Up</label>
                                </div>


                            </form>
                        </div>

                        <div className="order-info">
                            <h4>3. Order Details</h4>
                            <div><p className='head'>Subtotal: </p> <p>₦{formatNumberWithCommas(cartTotal)}</p></div>
                            <div><p className='head'>Shipping Fee: </p> <p>₦{formatNumberWithCommas(1500)}</p></div>
                            <hr />
                            <div><p className='head'>Total Price: </p> <p>₦{formatNumberWithCommas(cartTotal + 1500)}</p></div>
                        </div>

                        <button className="place-order"> Place Order</button>
                        <div className="help">
                            <h5>Need Help?</h5>
                            <button>Talk With Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default withRouter(Order) 