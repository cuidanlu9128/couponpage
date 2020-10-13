import "./App.css";
import React, { useCallback } from "react";
import Header from "./Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Common/Navbar.jsx";

function App() {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  var linkTemplate = "http://127.0.0.1:3000/detail.html";
  var linkUser =
    "http://localhost:7002/coupon-distribution/distribution/thy/users";

  var templateContent = "Create new kind of coupons for your customers";
  var userContent = "See what kind of coupons do you have";
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row align-items-middle">
          <Header
            title="Coupon Template"
            To={linkTemplate}
            slogen={templateContent}
            onBack={onBack}
          />
          <Header
            title="User Coupons"
            To={linkUser}
            slogen={userContent}
            onBack={onBack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
