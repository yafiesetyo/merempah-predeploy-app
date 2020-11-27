import React, { useState, useEffect } from "react";

import { translate } from "../../functions/numberFormatter";

import BadgeCheck from "../../assets/vectors/badge_check.svg";
import Trash from "../../assets/vectors/trash.svg";
import Counter from "../../components/reusable/Counter";

const dummyData = [
  {
    store_id: "1",
    store_name: "Tani Sehat",
    store_location: "Jawa Tengah",
    product: [
      {
        id: "1",
        product_name: "Kunyit",
        image_url:
          "https://www.chilibeli.com/uploads/blog/manfaat-kunyit-corona-covid-19-main.jpg",
        jumlah: 400,
        harga: 150000,
      },
      {
        id: "2",
        product_name: "Kunyit",
        image_url:
          "https://www.chilibeli.com/uploads/blog/manfaat-kunyit-corona-covid-19-main.jpg",
        jumlah: 200,
        harga: 150000,
      },
    ],
  },
  {
    store_id: "2",
    store_name: "Tani Sehat Bahagia",
    store_location: "Jawa Tengah",
    product: [
      {
        id: "3",
        product_name: "Kunyit",
        image_url:
          "https://www.chilibeli.com/uploads/blog/manfaat-kunyit-corona-covid-19-main.jpg",
        jumlah: 100,
        harga: 250000,
      },
      {
        id: "4",
        product_name: "Kunyit",
        image_url:
          "https://www.chilibeli.com/uploads/blog/manfaat-kunyit-corona-covid-19-main.jpg",
        jumlah: 200,
        harga: 250000,
      },
      {
        id: "4",
        product_name: "Kunyit",
        image_url:
          "https://www.chilibeli.com/uploads/blog/manfaat-kunyit-corona-covid-19-main.jpg",
        jumlah: 150,
        harga: 250000,
      },
    ],
  },
];

const CartPage = () => {
  const [verified] = useState(true);
  const [hidden, setHidden] = useState(true);

  const handleProductSelectAllChecked = (store_id) => {
    let element = document.getElementsByClassName(
      `cart_list_content_${store_id}`
    );
    let trigger = document.getElementsByClassName(
      `cart_list_content_trigger_${store_id}`
    );
    if (trigger[0].checked === false) {
      for (let i = 0; i < element.length; i++) {
        element[i].checked = false;
      }
    } else {
      for (let i = 0; i < element.length; i++) {
        element[i].checked = true;
      }
    }
  };

  const handleSelectAllChecked = () => {
    let element = document.getElementsByClassName("select-all-checkbox");
    let trigger = document.getElementsByClassName("check-all-trigger");
    if (trigger[0].checked === false) {
      for (let i = 0; i < element.length; i++) {
        element[i].checked = false;
      }
      setHidden(true);
    } else {
      for (let i = 0; i < element.length; i++) {
        element[i].checked = true;
      }
      setHidden(false);
    }
  };

  return (
    <div className="main-page container">
      <p className="text-left" style={{ marginTop: "10rem" }}>
        Beranda / Produk / Akar / Kunyit Segar
      </p>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "48px",
          color: "#964F38",
          marginBottom: "3rem",
          marginTop: "2rem",
        }}
      >
        Keranjang
      </h1>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          {/*  */}
          <div className="cart-list">
            <div className="d-flex justify-content-between">
              <label for="select-all-checkbox" className="mt-3 ml-2">
                <input
                  type="checkbox"
                  id="select-all-checkbox"
                  onChange={() => handleSelectAllChecked()}
                  className="check-all-trigger"
                />
                <text className="ml-2">Pilih Semua</text>
              </label>
              <p
                className="mt-3 mr-2 cart-delete-text"
                style={{ display: hidden ? "none" : "block" }}
              >
                Hapus
              </p>
            </div>
          </div>
          {/*  */}
          <div className="mt-3">
            {dummyData.map((data, index) => {
              return (
                <div className="cart-list mb-2 text-left" key={index}>
                  {/* Card Label */}
                  <label className="mt-3 ml-2">
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleProductSelectAllChecked(data.store_id)
                      }
                      className={`select-all-checkbox cart_list_content_trigger_${data.store_id}`}
                    />
                    <b className="ml-2">
                      {verified ? (
                        <img
                          src={BadgeCheck}
                          alt="badge-check"
                          className="mr-2"
                        />
                      ) : null}
                      {data.store_name}
                    </b>
                    <p style={{ opacity: "0.5" }}>{data.store_location}</p>
                  </label>
                  {/* Card Contents */}
                  {data.product.map((product, i) => {
                    return (
                      <div className="cart-list-content" key={i}>
                        <div className=" row">
                          <div
                            className="col-lg-7 col-sm-12"
                            style={{ display: "flex" }}
                          >
                            <input
                              type="checkbox"
                              className={`cart_list_content_${data.store_id} ml-2 select-all-checkbox`}
                            />
                            <img
                              src={product.image_url}
                              alt="cart-product"
                              className="cart-product-img"
                            />
                            {/* product */}
                            <div>
                              <b>{product.product_name}</b>
                              <p style={{ opacity: "0.5" }}>
                                Rp. {translate(product.harga)}
                              </p>
                            </div>
                            {/* end product */}
                          </div>
                          <div className="col-lg-5 col-sm-12 d-flex align-items-end justify-content-end">
                            <div className="quantity-count-container d-flex mr-5">
                              <img
                                src={Trash}
                                alt="trash"
                                className="delete-button mr-2"
                              />
                              <Counter count={product.jumlah} id={product.id} />
                            </div>
                          </div>
                        </div>
                        <p
                          style={{
                            color: "#793f0d",
                            fontWeight: "bold",
                            fontSize: "14px",
                            marginLeft: "2rem",
                          }}
                        >
                          Catatan untuk penjual
                        </p>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="cart-list mb-2">
            <div className="ml-3 mr-3 text-left">
              <b>Ringkasan belanjamu</b>
              <div className="d-flex justify-content-between mt-3 mb-3">
                <h6>Total Harga</h6>
                <h6>Rp {translate(20000000)}</h6>
              </div>
              <button
                className="getting-started-button"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "100%",
                  fontWeight: "bold",
                }}
                onSubmit={() => {}}
              >
                Bayar Sekarang <br />( Rp {translate(20000000)} )
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
