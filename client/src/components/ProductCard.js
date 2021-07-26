import {withRouter} from 'react-router-dom'

const formatWithCommas = (number)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProductCard = ({product, history}) =>{
    const onItemClick = (e)=>{
        history.push(`/product/${product._id}`)
    }
    return(
        <div className="ProductCard" onClick={onItemClick}>
            <div className="img-container">
                <img src={product.imgUrl} alt={product.title}/>
            </div>

            <div className='info'>
                <p className="text">{product.title}</p>
                <p className="price text-primary">₦{formatWithCommas(product.price)}</p>
            </div>
        </div>
    )
}
export default withRouter(ProductCard)