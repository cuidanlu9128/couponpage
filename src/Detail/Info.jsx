import React, { useState, useEffect } from "react";

import "./Info.css";

export default function (props) {
  const {
    code,
    message,
    Id,
    name,
    logo,
    desc,
    category,
    productline,
    key,
    target,
    period,
    gap,
    deadline,
    quota,
    base,
    limitation,
    province,
    city,
    goodstype,
    weight,
  } = props;

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Template Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Template Type</th>
            <th scope="col">Product Line</th>
            <th scope="col">Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row"></th> */}
            <td>{Id}</td>
            <td>{name}</td>
            <td>{desc}</td>
            <td>{category}</td>
            <td>{productline}</td>
            <td>{code}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
