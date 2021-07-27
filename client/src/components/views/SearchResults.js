import Fuse from 'fuse.js'
import Footer from "../Footer"
import Header from "../Header"
import {products} from '../../productData'
import ProductList from "../ProductList"

const SearchResult = (props) => {
    const searchQuery = props.match.params.query.split(/[\s+]+/).join(' ')
    const fuse = new Fuse(products, {
        threshold: 0.45,
        minMatchCharLength: 3,
        includeScore: true,
        keys: [
            "title","category"
        ]
    });

    
    const result = fuse.search(searchQuery).map(item =>products[item.refIndex])
    
    return(
        <div className="SearchResult">
            <Header/>
            <div className="container content">
                <h2>Results for: "{searchQuery}"</h2>
                <small>{result.length} {result.length === 1?'result':'results'} found</small>
                <ProductList products={result}/>
            </div>
            <Footer/>
        </div>
    )
}
export default SearchResult