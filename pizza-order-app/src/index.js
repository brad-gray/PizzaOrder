import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NewOrder from "./components/NewOrder";
import Navigation from "./components/Navigation";

const routing = (
    <>
        <Router>
            <Navigation />
            <div
                style={{
                    padding: "0.5em",
                    backgroundColor: "#282c34",
                    position: "absolute",
                    height: "calc(100% - 2.5em)",
                    width: "100%"
                }}
            >
                <div
                    style={{
                        borderRadius: 4,
                        backgroundColor: "white",
                        padding: "1em"
                    }}
                >
                    <Route exact path="/" component={App} />
                    <Route path="/NewOrder" component={NewOrder} />
                </div>
            </div>
        </Router>
    </>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
