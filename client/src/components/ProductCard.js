import {useState} from 'react'
import {withRouter} from 'react-router-dom'

const formatWithCommas = (number)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProductCard = ({product, history}) =>{
    const [heartHover, setHeartHover] = useState(false)
    const onHeartClick = (e)=>{
        console.log('Add to favourites')
    }
    const onItemClick = (e)=>{
        history.push(`/product/${product.id}`)
        console.log('Item click')
    }
    return(
        <div className="ProductCard" onClick={onItemClick}>
            <div className="img-container">
                <img src={product.imgURL} alt={product.title}/> 
            </div>

            <div className='info'>
                <p className="text">{product.title}</p>
                <p className="price text-primary">₦{formatWithCommas(product.price)}</p>
                <div className="like"  onClick={e => e.stopPropagation()} >
                    
                    <i onMouseEnter={() => setHeartHover(true)} onMouseLeave={()=>setHeartHover(false)} className={`${heartHover?'fas':'far'} fa-heart text-secondary`} onClick={onHeartClick}> </i>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ProductCard)