

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"




import { Pagination } from 'swiper/modules';
import Sectiontitles from '../../Components/SectionTitles/Sectiontitles';

const Category = () => {
    return (
        <div>
            <div>
                <Sectiontitles
                subHeading={"From 11.00am to 10.30pm"}
                heading={"Order Online"}></Sectiontitles>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className=' text-center text-2xl -mt-16 font-cursive text-pink-700'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className=' text-center text-2xl -mt-16 font-cursive text-pink-700'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className=' text-center text-2xl -mt-16 font-cursive text-pink-700'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className=' text-center text-2xl -mt-16 font-cursive text-pink-700'>Dessert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className=' text-center text-2xl -mt-16 font-cursive text-pink-700'>Stack Salad</h1>
                </SwiperSlide>
                
                
            </Swiper>

        </div>
    );
};

export default Category;