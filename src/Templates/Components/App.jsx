import "./App.css";
import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import List from "./List";

export default function App(props) {
  return (
    <div>
      <Header />
      <List />
    </div>
  );
}
