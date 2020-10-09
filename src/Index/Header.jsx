import React from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import card from 'react-bootstrap/Card';

export default function Header(props) {
    const { title, To, slogen} = props;

    return (
        <div class="card" style={{width: "18rem"}}>
            <img src="../imgs/1.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{slogen}</p>
                <a href={To} class="btn btn-primary">{title}</a>
            </div>
        </div>
    )
}

