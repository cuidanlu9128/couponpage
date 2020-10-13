import "./TableHeader.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
  return (
    <div>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Status</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Product Line</th>
          <th scope="col">Quantity</th>
          <th scope="col">Deadline</th>
          <th scope="col">Code</th>
          <th scope="col">Target</th>
        </tr>
      </thead>
    </div>
  );
}
