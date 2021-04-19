import React from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock.server";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./contexts/DataContext";

setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);
