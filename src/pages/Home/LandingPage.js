import React from "react";

import CustomCarousel  from "../../components/reusable/Carousel";

import HeroPict from '../../assets/hero1.jpg'

const LandingPage = () => {
    return (
        <div className="main-page" >
            <div className="hero">
                <div className="row" style={{marginRight:'0px'}}>
                    <div className="col-lg-4 col-md-12" style={{background:`url(${HeroPict})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 500px',height:'500px'}}>
                    </div>
                    <div className="col-lg-7 col-md-12 d-flex justify-content-center align-items-center ml-4">
                        <div style={{width:'inherit',height:'inherit',textAlign:'start'}}>
                            <h1 className="header-title">Authentic Spices <br></br> From Indonesia</h1>
                            <p className="header-subtitle mb-4">Mau cari rempah? Kini lebih mudah dengan Merempah!</p>
                            <a className="getting-started-button">Mulai Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-features">
                <p>Akses 24 Jam</p>
                <p>Free Packaging</p>
            </div>
            {/* <div className="new-products">
                <p>Produk Terbaru</p>
            </div>
            <div className="facility">
                <p>Free Ongkir</p>
                <p>Free Promo</p>
            </div> */}
            <div className="product-for-you">
                <div className="row" style={{marginRight:'0px'}}>
                    <div className="col-lg-3" style={{textAlign:'start'}}>
                        <h1 style={{marginBottom:'20px',fontSize:'40px'}} className="header-title">Produk <br/>Terbaru</h1>
                        <a className="getting-started-button" style={{padding:'5px 30px'}}>Lihat Selengkapnya</a>
                    </div>
                    <div className="col-lg-9">
                        <CustomCarousel/>
                    </div>
                </div>
            </div>
            {/* <div>
                KOSONG
            </div> */}
            {/* <div className="subscribe-us">
                <h3>Dapatkan Info Terbaru Dari Merempah !</h3>
                <div className="subscribe-us-input-container mb-2">
                    <div className="subscribe-us-input d-flex justify-content-center">
                        <input className="custom-search-box" style={{width:'500px'}} placeholder="Masukkan email"/>
                        <div className="subscribe-button-container">
                            Berlangganan
                        </div>
                    </div>
                </div>
            </div> */}
            <div>

            </div>
        </div>
    )
}

export default LandingPage
