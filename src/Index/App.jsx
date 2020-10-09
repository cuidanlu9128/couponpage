import './App.css';
import React from 'react';
import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    var linkTemplate = "/coupon-template/template/thy/list";
    var linkUser = "http://localhost:7002/coupon-distribution/distribution/thy/users";

    var templateContent = "Create new kind of coupons for your customers"
    var userContent = "See what kind of coupons do you have"
    return (
        <div className="container">
            <Header title = "Coupon Template" To={linkTemplate} slogen={templateContent}/>
            <Header title = "User Coupons" To={linkUser} slogen={userContent} />
        </div>
    
    )
}

export default App; 