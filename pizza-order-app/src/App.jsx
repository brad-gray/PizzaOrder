import React from "react";
import OrderList from "./components/OrderList";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NewOrder from "./components/NewOrder";
import Navigation from "./components/Navigation";

const App = () => (
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
            <h2
                style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <p>Teleflex Pizza Order App</p>
            </h2>
            <div
                style={{
                    borderRadius: 4,
                    backgroundColor: "white",
                    padding: "1em"
                }}
            >
                <Route exact path="/" component={OrderList} />
                <Route path="/NewOrder" component={NewOrder} />
            </div>
        </div>
    </Router>
);

export default App;
