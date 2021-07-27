import Carousel from "./Carousel"

const ProductCarousel = ({images}) =>{
    const renderedImages = images.map((image, index) => (
        <div className="item" key={index}>
            <img src={image.url} alt={image.text}/>
            <h3>{image.text}</h3>
        </div> 
    ))

    return(
        <Carousel>
            {renderedImages}
        </Carousel>
    )
}
export default ProductCarousel