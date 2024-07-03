
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";
import img7 from "../../assets/home/banner.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from "react-helmet-async";

const Banner = () => {
    return (
        <div>
            <Helmet><title>khudalagce | banner</title></Helmet>
            <Carousel>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
                <div>
                    <img src={img5} />
                    
                </div>
                <div>
                    <img src={img6} />
                   
                </div>
                <div>
                    <img src={img7} />
                  
                </div>
            </Carousel>
            
            
        </div>
    );
};

export default Banner;