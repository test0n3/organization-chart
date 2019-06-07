/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const initialColaborators = JSON.parse(
  localStorage.getItem("colaborators") ||
    JSON.stringify([
      {
        id: 0,
        name: "Carlos Ayala",
        position: "CEO",
        parent: "",
        children: []
      },
      {
        id: 1,
        name: "Mayra",
        position: "Product Manager",
        parent: 0,
        children: []
      },
      {
        id: 2,
        name: "Deivy Conde",
        position: "Tech Lead",
        parent: 0,
        children: []
      }
    ])
);

function ChartView() {
  return <div>ChartView</div>;
}

export default ChartView;
