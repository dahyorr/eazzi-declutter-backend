import {withRouter} from 'react-router-dom'
import {products, categories} from '../../productData'
import Footer from "../Footer"
import Header from "../Header"
import ProductList from '../ProductList'
import Error404 from './Error404'

const Category = (props) => {
    const category = props.match.params.categoryName.split('-').join(' ')
    const categoryName = category.split(' ').map(str=> str.charAt(0).toUpperCase() + str.slice(1)).join(' ')
    const filteredProducts = products.filter(product => product.category.includes(category))
    const categoryList = categories.map(category => category.value)
    console.log(category)
    if (!categoryList.includes(category)){
        return(
            <><Error404/></>
        )
    }
    else return(
        <div className="Category">
            <Header/>
            <div className="container content">
                <small>{`Categories > ${categoryName}`}</small>
                <h2 className='title'>{categoryName}</h2>
                <ProductList products={filteredProducts}/>
            </div>
            <Footer/>
        </div>
    )
}
export default withRouter(Category)