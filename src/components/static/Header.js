import React from "react";
import MaterialIcon from "material-icons-react";
import { NavLink } from "react-router-dom";

const CustomHeader = () =>{
    return(
        <div className="custom-header">
            <div className="header-first-row mt-1">
                <div className="mt-2 ml-5 mr-5 logo-container">
                    <svg width="268" height="46" viewBox="0 0 268 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.6 36.4L51 35.8V18.2L48.6 17.6V17H52.2C53.7733 17 55.0133 17.5067 55.92 18.52C56.2667 18.92 56.56 19.4133 56.8 20C57.2 19.2533 57.6267 18.6533 58.08 18.2C59.28 17 60.6533 16.4 62.2 16.4C63.7467 16.4 65.1067 16.7467 66.28 17.44C67.4533 18.1067 68.36 19.0267 69 20.2C69.4 19.4267 69.8267 18.8 70.28 18.32C71.5067 17.04 72.88 16.4 74.4 16.4C75.8133 16.4 77.08 16.6933 78.2 17.28C79.3467 17.8667 80.2267 18.6667 80.84 19.68C81.48 20.6933 81.8 21.8 81.8 23V35.8L84.2 36.4V37H79C76.6 37 75.4 35.8 75.4 33.4V23C75.4 21.2667 75.1333 19.9733 74.6 19.12C74.0667 18.24 73.4667 17.8 72.8 17.8C72.0267 17.8 71.24 18.3333 70.44 19.4C70.12 19.9067 69.84 20.44 69.6 21V35.8L72 36.4V37H60.8V36.4L63.2 35.8V23C63.2 21.2667 62.9333 19.9733 62.4 19.12C61.8667 18.24 61.2667 17.8 60.6 17.8C59.8267 17.8 59.04 18.3333 58.24 19.4C57.92 19.9067 57.64 20.44 57.4 21V35.8L59.8 36.4V37H48.6V36.4ZM97.4078 37.6C93.9945 37.6 91.3411 36.6667 89.4478 34.8C87.5545 32.9067 86.6078 30.3067 86.6078 27C86.6078 24.84 87.0211 22.96 87.8478 21.36C88.6745 19.76 89.8211 18.5333 91.2878 17.68C92.7811 16.8267 94.4878 16.4 96.4078 16.4C98.3278 16.4 100.008 16.76 101.448 17.48C102.914 18.2 104.034 19.1733 104.808 20.4C105.608 21.6 106.008 22.9333 106.008 24.4C106.008 25.0667 105.941 25.64 105.808 26.12L105.608 26.8C104.461 27.04 103.221 27.24 101.888 27.4C99.0878 27.8 96.2611 28 93.4078 28C93.4078 31.0933 93.8345 33.3067 94.6878 34.64C95.5411 35.9467 96.7145 36.6 98.2078 36.6C99.2478 36.6 100.208 36.36 101.088 35.88C101.994 35.3733 102.701 34.72 103.208 33.92C103.741 33.0933 104.008 32.2533 104.008 31.4H105.008C105.008 32.4667 104.688 33.48 104.048 34.44C103.408 35.4 102.514 36.1733 101.368 36.76C100.221 37.32 98.9011 37.6 97.4078 37.6ZM93.4078 27C95.1145 27 96.5011 26.9333 97.5678 26.8C98.0211 26.7733 98.5011 26.7067 99.0078 26.6C99.0345 26.4667 99.1011 26.1733 99.2078 25.72C99.3411 25.0533 99.4078 24.3467 99.4078 23.6C99.4078 21.3867 99.1145 19.7733 98.5278 18.76C97.9411 17.72 97.2345 17.2 96.4078 17.2C94.4078 17.2 93.4078 20.4667 93.4078 27ZM108.991 36.4L111.391 35.8V18.2L108.991 17.6V17H112.591C114.164 17 115.404 17.5067 116.311 18.52C116.657 18.92 116.951 19.4133 117.191 20C117.591 19.4133 118.084 18.88 118.671 18.4C120.004 17.3333 121.497 16.8 123.151 16.8C124.564 16.8 125.617 17.1333 126.311 17.8C127.031 18.44 127.391 19.3733 127.391 20.6C127.391 21.5067 127.111 22.24 126.551 22.8C126.017 23.3333 125.297 23.6 124.391 23.6C124.017 23.6 123.644 23.5733 123.271 23.52L122.791 23.4V17.8C121.431 17.8 120.191 18.3333 119.071 19.4C118.537 19.9333 118.111 20.4667 117.791 21V35.8L120.191 36.4V37H108.991V36.4ZM139.986 37.6C136.573 37.6 133.919 36.6667 132.026 34.8C130.133 32.9067 129.186 30.3067 129.186 27C129.186 24.84 129.599 22.96 130.426 21.36C131.253 19.76 132.399 18.5333 133.866 17.68C135.359 16.8267 137.066 16.4 138.986 16.4C140.906 16.4 142.586 16.76 144.026 17.48C145.493 18.2 146.613 19.1733 147.386 20.4C148.186 21.6 148.586 22.9333 148.586 24.4C148.586 25.0667 148.519 25.64 148.386 26.12L148.186 26.8C147.039 27.04 145.799 27.24 144.466 27.4C141.666 27.8 138.839 28 135.986 28C135.986 31.0933 136.413 33.3067 137.266 34.64C138.119 35.9467 139.293 36.6 140.786 36.6C141.826 36.6 142.786 36.36 143.666 35.88C144.573 35.3733 145.279 34.72 145.786 33.92C146.319 33.0933 146.586 32.2533 146.586 31.4H147.586C147.586 32.4667 147.266 33.48 146.626 34.44C145.986 35.4 145.093 36.1733 143.946 36.76C142.799 37.32 141.479 37.6 139.986 37.6ZM135.986 27C137.693 27 139.079 26.9333 140.146 26.8C140.599 26.7733 141.079 26.7067 141.586 26.6C141.613 26.4667 141.679 26.1733 141.786 25.72C141.919 25.0533 141.986 24.3467 141.986 23.6C141.986 21.3867 141.693 19.7733 141.106 18.76C140.519 17.72 139.813 17.2 138.986 17.2C136.986 17.2 135.986 20.4667 135.986 27ZM151.569 36.4L153.969 35.8V18.2L151.569 17.6V17H155.169C156.742 17 157.982 17.5067 158.889 18.52C159.235 18.92 159.529 19.4133 159.769 20C160.169 19.2533 160.595 18.6533 161.049 18.2C162.249 17 163.622 16.4 165.169 16.4C166.715 16.4 168.075 16.7467 169.249 17.44C170.422 18.1067 171.329 19.0267 171.969 20.2C172.369 19.4267 172.795 18.8 173.249 18.32C174.475 17.04 175.849 16.4 177.369 16.4C178.782 16.4 180.049 16.6933 181.169 17.28C182.315 17.8667 183.195 18.6667 183.809 19.68C184.449 20.6933 184.769 21.8 184.769 23V35.8L187.169 36.4V37H181.969C179.569 37 178.369 35.8 178.369 33.4V23C178.369 21.2667 178.102 19.9733 177.569 19.12C177.035 18.24 176.435 17.8 175.769 17.8C174.995 17.8 174.209 18.3333 173.409 19.4C173.089 19.9067 172.809 20.44 172.569 21V35.8L174.969 36.4V37H163.769V36.4L166.169 35.8V23C166.169 21.2667 165.902 19.9733 165.369 19.12C164.835 18.24 164.235 17.8 163.569 17.8C162.795 17.8 162.009 18.3333 161.209 19.4C160.889 19.9067 160.609 20.44 160.369 21V35.8L162.769 36.4V37H151.569V36.4ZM189.177 44.4L191.577 43.8V18.2L189.177 17.6V17H192.777C194.35 17 195.59 17.5067 196.497 18.52C196.843 18.92 197.137 19.4133 197.377 20C197.723 19.3067 198.163 18.7067 198.697 18.2C199.897 17 201.39 16.4 203.177 16.4C204.75 16.4 206.15 16.8133 207.377 17.64C208.603 18.44 209.577 19.64 210.297 21.24C211.017 22.8133 211.377 24.7333 211.377 27C211.377 30.4133 210.577 33.04 208.977 34.88C207.403 36.6933 205.27 37.6 202.577 37.6C201.297 37.6 200.177 37.3333 199.217 36.8C198.817 36.6133 198.403 36.3467 197.977 36V43.8L200.377 44.4V45H189.177V44.4ZM200.977 36.4C202.123 36.4 203.003 35.7333 203.617 34.4C204.257 33.0667 204.577 30.6 204.577 27C204.577 23.56 204.283 21.1733 203.697 19.84C203.137 18.48 202.43 17.8 201.577 17.8C200.563 17.8 199.657 18.3333 198.857 19.4C198.51 19.8533 198.217 20.3867 197.977 21V34.8C198.35 35.1733 198.643 35.44 198.857 35.6C199.577 36.1333 200.283 36.4 200.977 36.4ZM222.377 37.6C220.003 37.6 218.177 37.0933 216.897 36.08C215.617 35.0667 214.977 33.7733 214.977 32.2C214.977 31.16 215.203 30.1333 215.657 29.12C215.843 28.64 216.083 28.2 216.377 27.8C217.47 27.5333 218.657 27.2933 219.937 27.08C222.817 26.6 225.363 26.3067 227.577 26.2V25C227.577 22.04 227.217 20 226.497 18.88C225.777 17.76 224.67 17.2 223.177 17.2C222.617 17.2 222.137 17.2667 221.737 17.4L221.177 17.6V23.6L220.657 23.72C220.23 23.7733 219.87 23.8 219.577 23.8C218.67 23.8 217.937 23.5333 217.377 23C216.843 22.44 216.577 21.7067 216.577 20.8C216.577 19.5733 217.19 18.5333 218.417 17.68C219.67 16.8267 221.523 16.4 223.977 16.4C226.057 16.4 227.843 16.7733 229.337 17.52C230.857 18.24 232.003 19.2533 232.777 20.56C233.577 21.84 233.977 23.32 233.977 25V35.8L236.377 36.4V37H232.777C231.177 37 229.937 36.5067 229.057 35.52C228.683 35.12 228.39 34.6133 228.177 34C227.803 34.6667 227.363 35.2667 226.857 35.8C225.657 37 224.163 37.6 222.377 37.6ZM223.977 36.2C224.963 36.2 225.857 35.6667 226.657 34.6C226.95 34.2 227.257 33.6667 227.577 33V27.2C226.35 27.2 225.177 27.2667 224.057 27.4C223.23 27.5067 222.67 27.5733 222.377 27.6C222.243 27.8933 222.11 28.2933 221.977 28.8C221.71 29.8133 221.577 30.8133 221.577 31.8C221.577 33.2933 221.803 34.4 222.257 35.12C222.71 35.84 223.283 36.2 223.977 36.2ZM238.795 36.4L241.195 35.8V10.2L238.795 9.6V9H243.995C246.395 9 247.595 10.2 247.595 12.6V19C247.995 18.4667 248.409 18.04 248.835 17.72C249.982 16.84 251.302 16.4 252.795 16.4C254.289 16.4 255.622 16.72 256.795 17.36C257.995 17.9733 258.929 18.7867 259.595 19.8C260.262 20.8133 260.595 21.88 260.595 23V35.8L262.995 36.4V37H257.795C255.395 37 254.195 35.8 254.195 33.4V23C254.195 21.32 253.889 20.04 253.275 19.16C252.689 18.2533 251.995 17.8 251.195 17.8C250.182 17.8 249.275 18.3333 248.475 19.4C248.129 19.8533 247.835 20.3867 247.595 21V35.8L249.995 36.4V37H238.795V36.4Z" fill="#964F38"/>
                        <path d="M21.1772 21.4372C16.8847 19.3872 9.39793 12.9911 12.7803 4.39057C14.6028 4.53284 18.6732 5.55327 20.3746 8.49679" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="23.6558" cy="23.3564" r="2.21396" transform="rotate(-30.0277 23.6558 23.3564)" stroke="#964F38" stroke-width="2.3"/>
                        <path d="M20.9141 17.5835C18.8058 17.188 15.7568 13.0914 16.1827 9.39776C18.8893 11.0087 21.2518 13.0965 20.9141 17.5835Z" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.3404 24.8628C30.6329 26.9127 38.1197 33.3089 34.7373 41.9094C32.9148 41.7671 28.8444 40.7467 27.143 37.8031" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.6051 28.7163C28.7133 29.1118 31.7624 33.2084 31.3364 36.902C28.6299 35.2911 26.2673 33.2033 26.6051 28.7163Z" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.0366 21.7574C29.9582 19.065 39.2408 15.7793 44.9979 23.0088C43.9634 24.516 41.0445 27.5308 37.6446 27.5325" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.5055 23.4559C30.9022 21.8278 35.9745 21.2356 38.9602 23.4512C36.2118 24.9898 33.2225 25.9919 29.5055 23.4559Z" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.0167 19.9877C23.6457 15.2453 25.4416 5.56347 34.581 4.19242C35.369 5.84192 36.5205 9.8772 34.822 12.8224" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.2209 17.8325C26.5093 15.8089 28.5325 11.12 31.9442 9.6421C31.9024 12.7915 31.2756 15.8814 27.2209 17.8325Z" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.963 24.4049C17.0414 27.0974 7.7588 30.383 2.00172 23.1536C3.0362 21.6464 5.95511 18.6315 9.35495 18.6299" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.4946 22.7067C16.0979 24.3348 11.0256 24.927 8.03982 22.7114C10.7882 21.1728 13.7776 20.1707 17.4946 22.7067Z" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.9845 26.1747C23.3554 30.9171 21.5596 40.5989 12.4202 41.9699C11.6321 40.3204 10.4806 36.2852 12.1791 33.34" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.7792 28.3301C20.4908 30.3537 18.4676 35.0426 15.0558 36.5205C15.0976 33.3711 15.7245 30.2812 19.7792 28.3301Z" stroke="#964F38" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="mt-3 search-box-container">
                    <div className="d-flex">
                        <input className="custom-search-box"/>
                        <div className="d-flex justify-content-center align-items-center search-icon-container">
                            <div className="mt-2">
                                <MaterialIcon icon="search" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <a className="button">Masuk</a>
                    <a className="button button-inverted">Daftar</a>
                </div>
            </div>
            <div className="header-second-row">
                <div className="navbar-container mt-1">
                    <ul>
                        <li>
                            <NavLink exact to="/" className="navbar-link" activeClassName="active">
                                Beranda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="navbar-link" activeClassName="active">
                                Produk
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/articles" className="navbar-link" activeClassName="active">
                                Artikel
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order" className="navbar-link" activeClassName="active">
                                Pesanan
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/help" className="navbar-link" activeClassName="active">
                                Bantuan
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="navbar-link" activeClassName="active">
                                Tentang Merempah
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="misc-icons-container">   
                    <div className="mr-3 ml-5">
                        <MaterialIcon icon="shopping_cart" size={32} color='#964F38'/>
                    </div>
                    <div className="mr-3 ">
                        <MaterialIcon icon="notifications" size={32} color='#964F38'/>
                    </div>
                    <div className="mr-3">
                        <MaterialIcon icon="account_circle" size={32} color='#964F38'/>
                    </div>
                    <div className="mr-3">
                        <select className="custom-dropdown">
                            <option value="indonesian">ID</option>
                            <option value="english">EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomHeader