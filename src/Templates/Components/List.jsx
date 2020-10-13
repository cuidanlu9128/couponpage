import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "bootstrap/dist/css/bootstrap.min.css";
import "./List.css";
import { data } from "jquery";

export default function () {
  return (
    <div>
      <table class="table container">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
