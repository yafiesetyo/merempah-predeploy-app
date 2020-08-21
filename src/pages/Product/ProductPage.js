import React from "react";
import HeroPict from '../../assets/hero1.jpg'
import HeroBg from '../../assets/productHeroBg.png'
import AccessIcon from "../../assets/vectors/24access.png";
import FreePackagingIcon from "../../assets/vectors/packaging.png";
import DeliveryIcon from "../../assets/vectors/delivery.png";
import CSIcon from "../../assets/vectors/cs.png";

const ProductPage = () => {
    return (
        <div className="main-page">
            <div className="hero" style={{background:`url(${HeroBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 110%'}}>
                <div style={{height:'600px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{backgroundColor:'wheat',padding:'3rem'}}>
                        <h1>GRATIS ONGKIR</h1>
                        <p>Untuk Pembelian Pertama Oleh Pengguna Baru</p>
                        <a className="getting-started-button">Belanja Sekarang</a>
                        <p>S&K Berlaku</p>
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
        </div>
    )
}

export default ProductPage