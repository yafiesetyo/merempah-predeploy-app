import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions";

import CustomCarousel  from "../../components/reusable/Carousel";

import HeroPict from '../../assets/hero1.jpg'
import HeroBg from '../../assets/heroBg.png'
import AccessIcon from "../../assets/vectors/24access.png";
import FreePackagingIcon from "../../assets/vectors/packaging.png";
import DeliveryIcon from "../../assets/vectors/delivery.png";
import CSIcon from "../../assets/vectors/cs.png";


const mapStateToProps = (state) => {
    return {
        data : state.getAll.data
    }
} 

const LandingPage = (props) => {
    console.log(props.data)
    return (
        <div className="main-page" >
            <div className="hero" style={{background:`url(${HeroBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100%'}}>
                <div className="row" style={{marginRight:'0px'}}>
                    <div className="col-lg-4 col-md-12" style={{background:`url(${HeroPict})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 600px',height:'600px'}}>
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
                <div className="d-flex font-weight-bold" style={{marginRight:'10rem'}}>
                    <img src={AccessIcon} style={{width:'45px',height:'45px'}}/>
                    <p className="mt-2 ml-3" style={{fontSize:'20px'}}>Akses 24 Jam</p>
                </div>
                <div className="d-flex font-weight-bold" style={{marginRight:'10rem'}}>
                    <img src={FreePackagingIcon} style={{width:'45px',height:'45px'}}/>
                    <p className="mt-2 ml-3" style={{fontSize:'20px'}}>Free Packaging</p>
                </div>
                <div className='d-flex font-weight-bold' style={{marginRight:'10rem'}}>
                    <img src={DeliveryIcon} style={{width:'45px',height:'45px'}}/>
                    <p className="mt-2 ml-3" style={{fontSize:'20px'}}>Pengiriman Mendunia</p>
                </div>
                <div className='d-flex font-weight-bold'>
                    <img src={CSIcon} style={{width:'45px',height:'45px'}}/>
                    <p className="mt-2 ml-3" style={{fontSize:'20px'}}>Layanan Pelanggan</p>
                </div>
            </div>
            <div>

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
                    <div className="col-lg-2" style={{textAlign:'start'}}>
                        <h1 style={{marginBottom:'20px',fontSize:'40px',marginBottom:'3rem'}} className="header-title">Produk <br/>Terbaru</h1>
                        <a className="getting-started-button" style={{padding:'5px 20px'}}>Lihat Selengkapnya</a>
                    </div>
                    <div className="col-lg-10">
                        <CustomCarousel data={props.data}/>
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

export default connect(mapStateToProps) (LandingPage)
