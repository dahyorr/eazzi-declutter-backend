import ProductCard from './ProductCard';

const ProductList = ({products, title}) =>{
    const renderedProducts = products.map((product,index)=>(
        <ProductCard product={product} key={index}/>
))
    if(products.length<1){
        return(
            <div className='ProductList container'>
                <div className="title">
                    <h2 className='text-center'>{title}</h2>
                </div>
                <h3>No products found</h3>
            </div>
        )
    }
    else return(
        <div className='ProductList container'>
            <div className="title">
                <h2 className='text-center'>{title}</h2>
            </div>
            <div className="grid">
                {renderedProducts}
            </div>
        </div>
    )
}
export default ProductList