import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
 return(
     <div className="carousel-body">
        <Slider {...settings}>
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <div className="card-title">Title</div>
                </div>
            </div>
            <div className="card" style={{width:'18rem',height:'20px'}}>
                <div className="card-body">
                    <div className="card-title">Title</div>
                </div>
            </div>
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <div className="card-title">Title</div>
                </div>
            </div>
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <div className="card-title">Title</div>
                </div>
            </div>
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <div className="card-title">Title</div>
                </div>
            </div>
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <div className="card-title">Title</div>
                </div>
            </div>
        </Slider>
     </div>
 )
}

export default Carousel