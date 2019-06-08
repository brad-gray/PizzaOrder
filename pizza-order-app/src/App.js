import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrderList from "./components/OrderList";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation />
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <OrderList />
            </header>
        </div>
    );
}

export default App;
