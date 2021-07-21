import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper/core';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Autoplay, Navigation, Pagination])

const Carousel = ({children}) => {
    const renderedContent = children.map((child,index) =>(
        <SwiperSlide key={index}>
            {child}
        </SwiperSlide>
    ))

    return (
    <div className='Carousel container'>
        <Swiper 
        autoplay={{"delay": 7500,"disableOnInteraction": false}} 
        navigation={true}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true, 
            }}
        className="mySwiper">
        {renderedContent}
</Swiper>
    </div>
    )
}
export default Carousel