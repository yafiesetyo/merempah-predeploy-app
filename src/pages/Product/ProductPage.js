import React from "react";
import { connect } from "react-redux";

import CustomCarousel from "../../components/reusable/Carousel";
import MaterialIcon from "material-icons-react";
import { Spinner } from "react-bootstrap";

import HeroPict from "../../assets/hero1.jpg";
import HeroBg from "../../assets/productHeroBg.png";
import subscribeBg from "../../assets/subscribeBg.png";
import BannerBg from "../../assets/bannerBg.png";

import AccessIcon from "../../assets/vectors/24access.png";
import FreePackagingIcon from "../../assets/vectors/packaging.png";
import DeliveryIcon from "../../assets/vectors/delivery.png";
import CSIcon from "../../assets/vectors/cs.png";

import AkarIcon from "../../assets/vectors/akar.png";
import BatangIcon from "../../assets/vectors/batang.png";
import DaunIcon from "../../assets/vectors/daun.png";
import BungaIcon from "../../assets/vectors/bunga.png";
import BijiIcon from "../../assets/vectors/biji.png";

const mapStateToProps = (state) => {
  return {
    dataAllStore: state.getAllStore,
  };
};

const ProductPage = (props) => {
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
        <div
          style={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ backgroundColor: "#e3d081", padding: "3rem" }}>
            <h1
              style={{ fontWeight: "bold", fontSize: "58px", color: "#964F38" }}
            >
              GRATIS ONGKIR
            </h1>
            <p style={{ color: "#964F38", fontSize: "22px" }}>
              Untuk Pembelian Pertama Oleh Pengguna Baru
            </p>
            <a className="getting-started-button">Belanja Sekarang</a>
            <p style={{ color: "#964F38", fontSize: "18px" }}>S&K Berlaku</p>
          </div>
        </div>
      </div>
      <div className="hero-features">
        <div
          className="d-flex font-weight-bold"
          style={{ marginRight: "10rem" }}
        >
          <img src={AccessIcon} style={{ width: "45px", height: "45px" }} />
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
      <div className="product-categories pb-5" style={{ color: "#964F38" }}>
        <h1 className="pt-5 pb-5" style={{ fontWeight: "bold" }}>
          Kategori
        </h1>
        <div
          className="row d-flex justify-content-center"
          style={{ marginRight: "0px" }}
        >
          <div className="col-lg-2">
            <div className="category-list pb-5 pt-5">
              <img src={AkarIcon} className="category-img" />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                Akar
              </h3>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-list pb-5 pt-5">
              <img src={BatangIcon} className="category-img" />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                Batang
              </h3>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-list pb-5 pt-5">
              <img src={DaunIcon} className="category-img" />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                Daun
              </h3>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-list pb-5 pt-5">
              <img src={BungaIcon} className="category-img" />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                Bunga
              </h3>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="category-list pb-5 pt-5">
              <img src={BijiIcon} className="category-img" />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "2rem",
                }}
              >
                Biji
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="product-for-you">
        <div className="row" style={{ marginRight: "0px" }}>
          <div className="col-lg-2" style={{ textAlign: "start" }}>
            <h1
              style={{
                marginBottom: "20px",
                fontSize: "40px",
                marginBottom: "3rem",
              }}
              className="header-title"
            >
              Paling <br />
              Banyak <br /> Dicari
            </h1>
            <a
              className="getting-started-button"
              style={{ padding: "5px 20px" }}
            >
              Lihat Selengkapnya
            </a>
          </div>
          <div className="col-lg-10">
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
      <div className="product-lists">
        <h1 className="pt-5 pb-5" style={{ fontWeight: "bold" }}>
          Semua Produk
        </h1>
        <div
          className="row d-flex justify-content-center"
          style={{ marginRight: "0px" }}
        >
          {props.dataAllStore.isLoading === false ? (
            props.dataAllStore.data.map((item, index) => (
              <div key={index} className="col-lg-2 mr-5 ml-3 mb-5">
                <div style={{ width: "0%" }}>
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
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
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
    </div>
  );
};

export default connect(mapStateToProps)(ProductPage);
