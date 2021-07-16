import { withRouter, Link } from 'react-router-dom'
import ProductsTable from '../../AdminTables/ProductsTable'
import CreateProducts from '../../AdminCreateProducts/CreateProducts'


const ComponentSwitcher = withRouter(({location:{pathname}}) =>{
    console.log(pathname)
    return (
        <div className="ComponentSwitcher">
            <Link className={`button ${pathname === '/admin/products'? 'active':null}`} to='/admin/products'>Existing Products</Link>
            <Link className={`button ${pathname === '/admin/create/products'? 'active':null}`} to='/admin/create/products'>Create New Product</Link>
        </div>
    )
})

const Products = ({location: {pathname}}) =>{
    const page = pathname === '/admin/products' ? 0: pathname === '/admin/create/products' ? 1 : 0;
    return (
        <div className="Products">
            <div className="table">
                <ComponentSwitcher/>
                {page === 0 && <ProductsTable/>}
                {page === 1 && <CreateProducts/>}
            </div>
        </div>  
    )
}

export default withRouter(Products)
