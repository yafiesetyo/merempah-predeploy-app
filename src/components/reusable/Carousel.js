import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MaterialIcon from 'material-icons-react';

const Carousel = (props) => {
    const data = props.data
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:false
      };
 return(
     <div className="carousel-body">
        <Slider {...settings}>
            {data.map((item,index)=>(
                <div key={index} style={{width:'0%',margin:'10px'}}>
                    <div className="card" style={{width:'18rem'}}>
                        <img className="card-img-top image-custom-card" src={item.image_url} alt="Card image cap"></img>
                        <div className="card-body">
                            <div className='card-location'>
                                <span style={{marginTop:'5px'}}><MaterialIcon icon="location_on"/></span>
                                {''.concat(item.location[0].city,', ',item.location[0].province)}
                            </div>
                            <h5 className="card-title font-weight-bold text-left ml-2">{item.title.substring(0,15)+'...'}</h5>
                            <p className="card-text text-left ml-2">{item.description.substring(0,80)+'...'}</p>
                            <a className="getting-started-button" style={{padding:'5px 2rem'}}>Lihat Produk</a>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
     </div>
 )
}

export default Carousel