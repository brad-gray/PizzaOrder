import React from "react";
import "./App.css";
import OrderList from "./components/OrderList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Teleflex Pizza Order App</p>
                <OrderList />
            </header>
        </div>
    );
}

export default App;
