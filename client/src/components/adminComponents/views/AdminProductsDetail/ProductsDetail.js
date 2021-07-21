import {withRouter, Link} from 'react-router-dom'
import {FaArrowLeft, FaPen} from 'react-icons/fa'
import {products} from '../../../../productData'
import {capitalize, formatWithCommas} from '../../../../config'


const ProductsDetail = ({match: {params: {id}}, history}) =>{
    const data = products.filter(product => `${product.id}` === id)[0]
    return (
        <div className="ProductsDetail">
            <div className="content">
                <div className="back" onClick={history.goBack}>
                    <FaArrowLeft/>
                </div>
                <div className="top-row">
                    <div>
                        <div className="title">Product Name</div>
                        <div className="content">{data.title}</div>
                    </div>
                    
                    <div>
                        <div className="title">Location</div>
                        <div className="content">{data.location}</div>
                    </div>
                    <div>
                        <div className="title">Price</div>
                        <div className="content">{`₦ ${formatWithCommas(data.price)}`}</div>
                    </div>
                    <div>
                        <div className="title">Category</div>
                        <div className="content">{`${capitalize(data.category[0])}`}</div>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="description">
                        <div className="title">Description</div>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestias, hic adipisci magnam modi cumque corporis natus, consectetur nemo eaque vel optio amet suscipit doloremque, debitis laudantium incidunt unde omnis!
                        </div>
                    </div>
                    <div className="image">
                        <img src={data.imgURL} alt="Product" />
                    </div>
                </div>
                <div className="controls">
                    <div className="content">
                        <button className="btn btn-red">Remove</button>
                        <Link className='btn btn-white' to={`/admin/edit/products/${id}`}>Edit <FaPen style={{marginLeft: '0.3rem'}}/></Link>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default withRouter(ProductsDetail)
