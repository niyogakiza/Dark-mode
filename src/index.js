import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

import "./styles.css";
import { ThemeProvider } from "./components/state/ThemeProvider";



const rootElement = document.getElementById("root");
ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, rootElement);
