import { useEffect, useState } from "react"
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import localForage from "localforage"
import Footer from "../Footer"
import Header from "../Header"
import OrderForm from "../forms/OrderForm";
import {createOrder} from "../../actions";
import FullScreenModal from "../FullScreenModal";

function formatNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Order = ({history, user, createOrder}) => {
    let [cartItems, setCartItems] = useState([]);
    let [showModal, setShowModal] = useState(false);
    const onModalClose = () =>{
        setShowModal(false)
        history.push('/')
    }

    useEffect(() => {
        localForage.getItem('cart', null)
        .then(cart => {
            console.log(cart)
            if(!cart) history.push('/cart')
            else setCartItems(cart)
        })
    }, [history])
    let cartTotal = 0
    if(cartItems.length > 0){
        cartItems.forEach((item) => {
            cartTotal = cartTotal + (item.quantity * item.price)
        })
    }

    const onOrderSubmit = (values) => {
        const items = cartItems.map(({_id, quantity}) =>({
            product: _id,
            quantity
        }))
        const body  = ({...values, email: user.email, items})
        console.log(body)
        createOrder(body).then(res =>{
            if(res) setShowModal(true)
            else(console.error("order failed to save"))
        })
    }
    return(
        <div className="Order">
            <Header/>
            <div className="content container">
                <div className="order-content">
                    <div className="left pane">
                    {cartItems.map(item =>(
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
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="right pane">
                        <OrderForm user={user} onFormSubmit={onOrderSubmit}>
                            <div className="order-info">
                                <h4>3. Order Details</h4>
                                <div><p className='head'>Subtotal: </p> <p>₦{formatNumberWithCommas(cartTotal)}</p></div>
                                <div><p className='head'>Shipping Fee: </p> <p>TBD</p></div>
                                <hr />
                                <div><p className='head'>Total Price: </p> <p>₦{formatNumberWithCommas(cartTotal)}</p></div>
                                <p className={'info text-center'}><span>*</span>Shipping details and price will be sent to you for order confirmation</p>
                            </div>
                        </OrderForm>
                        <div className="help">
                            <h5>Need Help?</h5>
                            <a className='talk-to-us'
                               target='_blank'
                               rel="noreferrer"
                               href='https://wa.me/2348026265447?text=Hi,%20I%20need%20help%20on%20your%20EazziDeclutter%20platform'>
                                <i className="fab fa-whatsapp"/>Talk With Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            { showModal && <FullScreenModal onClose={onModalClose}>
                <p>Order Created Successfully</p>
            </FullScreenModal> }
        </div>
    )
}

const mapStateToProps = ({auth}) =>({
    user: {email: auth.email, name: auth.name, phoneNumber:auth.phoneNumber }
})

export default connect(mapStateToProps, {createOrder})(withRouter(Order))