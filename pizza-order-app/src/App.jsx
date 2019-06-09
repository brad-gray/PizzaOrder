import React from "react";
import OrderList from "./components/OrderList";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NewOrder from "./components/NewOrder";
import Navigation from "./components/Navigation";
import { ScrollPanel } from "primereact/scrollpanel";

const App = () => (
    <Router>
        <div style={{ overflowY: "hidden" }}>
            <div
                style={{
                    backgroundColor: "#282c34",
                    position: "absolute",

                    height: "100%",
                    width: "100%",
                    overflowY: "hidden"
                }}
            >
                <div
                    style={{ backgroundColor: "white", padding: 0, margin: 0 }}
                >
                    <Navigation />
                </div>
                <h2
                    style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    Teleflex Pizza Order App
                </h2>
                <ScrollPanel
                    style={{
                        height: "85%",
                        width: "95%",
                        margin: "auto"
                    }}
                >
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
                </ScrollPanel>
            </div>
        </div>
    </Router>
);

export default App;
