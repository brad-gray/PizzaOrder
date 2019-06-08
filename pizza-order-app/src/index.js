import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import NewOrder from "./components/NewOrder";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/NewOrder" component={NewOrder} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
