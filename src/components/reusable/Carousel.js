// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MaterialIcon from "material-icons-react";

const Carousel = (props) => {
  const data = props.data;
  console.log(data);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: props.slideCount,
    slidesToScroll: 2,
    centerMode: true,
  };
  return (
    <div className="carousel-body">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} style={{ width: "0%" }}>
            <div className="card mt-5" style={{ width: "18rem" }}>
              <img
                className="card-img-top image-custom-card"
                src={item.image_URL}
                alt="Product"
              ></img>
              <div className="card-body">
                <div className="card-location">
                  <span style={{ marginTop: "5px" }}>
                    <MaterialIcon icon="location_on" />
                  </span>
                  Kota Malang, Jawa Timur
                </div>
                <h5 className="card-title font-weight-bold text-left ml-2">
                  {item.name.substring(0, 15) + "..."}
                </h5>
                <p className="card-text text-left ml-2">
                  {item.description.substring(0, 80) + "..."}
                </p>

                <button
                  className="getting-started-button"
                  style={{ padding: "5px 2rem" }}
                >
                  Lihat Produk
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
