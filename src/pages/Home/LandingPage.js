import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { GetAllStoresData } from "../../redux/actions/stores/storesAction";

import CustomCarousel from "../../components/reusable/Carousel";

import HeroPict from "../../assets/hero1.jpg";
import HeroBg from "../../assets/heroBg.png";
import BannerBg from "../../assets/bannerBg.png";
import Banner2Bg from "../../assets/banner2Bg.png";
import subscribeBg from "../../assets/subscribeBg.png";
import AccessIcon from "../../assets/vectors/24access.png";
import FreePackagingIcon from "../../assets/vectors/packaging.png";
import DeliveryIcon from "../../assets/vectors/delivery.png";
import CSIcon from "../../assets/vectors/cs.png";
import Logo from "../../assets/Logo.png";

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStore: () => dispatch(GetAllStoresData()),
  };
};

const mapStateToProps = (state) => {
  return {
    dataAllStore: state.getAllStore,
  };
};

const LandingPage = (props) => {
  useEffect(() => {
    props.getAllStore();
  }, []);
  return (
    <div className="main-page">
      <div
        className="hero"
        style={{
          background: `url(${HeroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 110%",
        }}
      >
        <div className="row" style={{ marginRight: "0px" }}>
          <div
            className="col-lg-4 col-md-12"
            style={{
              background: `url(${HeroPict})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 600px",
              height: "600px",
            }}
          ></div>
          <div className="col-lg-7 col-md-12 d-flex justify-content-center align-items-center ml-4">
            <div
              style={{
                width: "inherit",
                height: "inherit",
                textAlign: "start",
              }}
            >
              <h1 className="header-title">
                Authentic Spices <br></br> From Indonesia
              </h1>
              <p className="header-subtitle mb-4">
                Mau cari rempah? Kini lebih mudah dengan Merempah!
              </p>
              <a className="getting-started-button">Mulai Sekarang</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-features">
        <div
          className="d-flex font-weight-bold"
          style={{ marginRight: "10rem" }}
        >
          <img
            src={AccessIcon}
            style={{ width: "45px", height: "45px" }}
            alt="Akses 24 Jam"
          />
          <p className="mt-2 ml-3" style={{ fontSize: "20px" }}>
            Akses 24 Jam
          </p>
        </div>
        <div
          className="d-flex font-weight-bold"
          style={{ marginRight: "10rem" }}
        >
          <img
            src={FreePackagingIcon}
            style={{ width: "45px", height: "45px" }}
          />
          <p className="mt-2 ml-3" style={{ fontSize: "20px" }}>
            Free Packaging
          </p>
        </div>
        <div
          className="d-flex font-weight-bold"
          style={{ marginRight: "10rem" }}
        >
          <img src={DeliveryIcon} style={{ width: "45px", height: "45px" }} />
          <p className="mt-2 ml-3" style={{ fontSize: "20px" }}>
            Pengiriman Mendunia
          </p>
        </div>
        <div className="d-flex font-weight-bold">
          <img src={CSIcon} style={{ width: "45px", height: "45px" }} />
          <p className="mt-2 ml-3" style={{ fontSize: "20px" }}>
            Layanan Pelanggan
          </p>
        </div>
      </div>
      <div className="hero-description">
        <div className="description">
          <div className="row">
            <div className="col-lg-3 mr-3">
              <img src={Logo} />
            </div>
            <div className="col-lg-8 text-left">
              <p className="description-text">
                Merempah merupakan platform penyedia rempah-rempah, di mana
                platform ini akan membantu petani rempah dalam hal
                pendistribusian dan penjualan rempah. Merempah memiliki bisnis
                model dimana merempah akan menangani dan memastikan
                pendistribusian rempah baik pengiriman domestik maupun
                internasional, hingga sampai kepada pelanggan yang sesuai atau
                melebihi harapan petani rempah.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="new-products">
                <p>Produk Terbaru</p>
            </div>
            <div className="facility">
                <p>Free Ongkir</p>
                <p>Free Promo</p>
            </div> */}
      <div className="product-for-you">
        <div className="row" style={{ marginRight: "0px" }}>
          <div className="col-lg-2 mt-5 mb-5" style={{ textAlign: "start" }}>
            <h1
              style={{
                fontSize: "40px",
                marginBottom: "3rem",
              }}
              className="header-title"
            >
              Produk <br />
              Terbaru
            </h1>
            <a
              className="getting-started-button"
              style={{ padding: "5px 20px" }}
            >
              Lihat Selengkapnya
            </a>
          </div>
          <div className="col-lg-10 d-flex align-items-center">
            {props.dataAllStore.isLoading === false ? (
              <CustomCarousel data={props.dataAllStore.data} slideCount={3} />
            ) : (
              <Spinner animation="border" variant="dark" />
            )}
          </div>
        </div>
      </div>

      <div
        className="hero-banner"
        style={{
          background: `url(${BannerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 110%",
        }}
      >
        <div className="banner-promote">
          <div className="banner-content">
            <p
              style={{ fontWeight: "bold", color: "#E3D081", fontSize: "32px" }}
            >
              Tingkatkan daya tahan tubuh dengan mengkonsumsi rempah-rempah.
            </p>
            <a
              className="getting-started-button"
              style={{
                padding: "5px 20px",
                backgroundColor: "#E3D081",
                color: "#793f0d",
              }}
            >
              Lihat Selengkapnya
            </a>
          </div>
        </div>
      </div>

      <div className="lastest-product">
        <div className="row" style={{ marginRight: "0px", marginLeft: "5rem" }}>
          <div
            className="col-lg-2 col-lg-2 mt-5 mb-5"
            style={{ textAlign: "start" }}
          >
            <h1
              style={{
                marginBottom: "20px",
                fontSize: "40px",
                marginBottom: "3rem",
              }}
              className="header-title"
            >
              Produk <br />
              Untukmu
            </h1>
            <a
              className="getting-started-button"
              style={{ padding: "5px 20px" }}
            >
              Lihat Selengkapnya
            </a>
          </div>
          <div className="col-lg-10 mt-5 mb-3">
            {props.dataAllStore.isLoading === false ? (
              <CustomCarousel data={props.dataAllStore.data} slideCount={3} />
            ) : (
              <Spinner animation="border" variant="dark" />
            )}
          </div>
        </div>
      </div>

      <div
        className="hero-banner"
        style={{
          background: `url(${Banner2Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 110%",
        }}
      >
        <div className="banner-promote">
          <div className="banner-content">
            <p
              style={{ fontWeight: "bold", color: "#E3D081", fontSize: "32px" }}
            >
              Tak Kenal Maka Tak Sayang. Kenalan dulu sama Merempah, yuk!
            </p>
            <a
              className="getting-started-button"
              style={{
                padding: "5px 20px",
                backgroundColor: "#E3D081",
                color: "#793f0d",
              }}
            >
              Yuk !
            </a>
          </div>
        </div>
      </div>
      <div className="article-card-container">
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "48px",
            color: "#964F38",
            marginBottom: "3rem",
          }}
        >
          Artikel Terkait
        </h1>
        <div
          style={{ width: "90%" }}
          className="d-flex justify-content-center ml-5"
        >
          {/* {props.dataAllStore.isLoading === false ? (
            <CustomCarousel data={props.dataAllStore.data} slideCount={3} />
          ) : (
            <Spinner animation="border" variant="dark" />
          )} */}
        </div>
      </div>
      <div
        className="subscribe-us"
        style={{
          background: `url(${subscribeBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 110%",
        }}
      >
        <div
          className="row pt-5 pb-5"
          style={{ marginRight: "0px", paddingLeft: "5rem" }}
        >
          <div className="col-lg-3 text-left">
            <h3
              style={{ fontWeight: "bold", color: "#964F38", fontSize: "32px" }}
            >
              Dapatkan Info Terbaru Dari Merempah !
            </h3>
          </div>
          <div className="col-lg-9 ">
            <div className="subscribe-us-input-container mt-5 d-flex justify-content-start">
              <div className="subscribe-us-input d-flex justify-content-center">
                <input
                  className="custom-search-box"
                  style={{ width: "500px" }}
                  placeholder="Masukkan email"
                />
                <div className="subscribe-button-container">Berlangganan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
