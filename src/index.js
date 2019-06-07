import React from "react";
import { render } from "react-dom";
import App from "./app";
import ChartView from "./views/chart";

const $root = document.getElementById("root");

render(<ChartView />, $root);
