import * as React from "react";
import PizzaList from "./PizzaList";

const OrderItem = ({ order }) => {
    return (
        order && (
            <>
                <div
                    className="p-grid p-col-12"
                    style={{ padding: "2em", borderBottom: "1px solid #d9d9d9" }}
                >
                    <div className="p-col-2">
                        <label>{order.orderId}</label>
                    </div>
                    <div className="p-col-5">
                        <label>{order.name}</label>
                    </div>
                    <div className="p-col-5">
                        <label>{order.totalCost}</label>
                    </div>
                    {order.pizzas && <PizzaList pizzas={order.pizzas} />}
                </div>
            </>
        )
    );
};

export default OrderItem;
