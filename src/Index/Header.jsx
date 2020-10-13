import React from "react";
import "./Header.css";

import "bootstrap/dist/css/bootstrap.min.css";
import CouponImg from "./imgs/couponlogo.jpg";

export default function Header(props) {
  const { title, To, slogen, onBack } = props;

  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={CouponImg} className="card-img-top" alt="Coupon Picture" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{slogen}</p>
          <a href={To} className="btn btn-primary">
            {title}
          </a>
        </div>
      </div>
    </div>
  );
}
