import React from "react";

const CartPage = () => {
  return (
    <div className="main-page">
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "48px",
          color: "#964F38",
          marginBottom: "3rem",
          marginTop: "10rem",
        }}
      >
        Keranjang
      </h1>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="cart-list-delete-all"></div>
        </div>
        <div className="col-lg-6 col-md-12">total pay</div>
      </div>
    </div>
  );
};

export default CartPage;
