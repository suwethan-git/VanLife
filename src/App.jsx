import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router"
import { makeServer } from "./Server";

makeServer()


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)