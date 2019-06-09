import * as React from "react";
import PizzaList from "./PizzaList";
import { formatter } from "../utils/currencyHelper";

const OrderItem = ({ order }) => {
    return (
        order && (
            <>
                <div
                    className="p-grid p-col-12"
                    style={{
                        paddingBottom: "2em"
                    }}
                >
                    <div className="p-col-2">
                        <label>{order.orderId}</label>
                    </div>
                    <div className="p-col-5">
                        <label>{order.name}</label>
                    </div>
                    <div className="p-col-5">
                        <label>{formatter.format(order.totalCost)}</label>
                    </div>
                </div>
                <div
                    className="p-col-12"
                    style={{
                        paddingBottom: "1em",
                        borderBottom: "1px solid black"
                    }}
                >
                    {order.pizzas && <PizzaList pizzas={order.pizzas} />}
                </div>
            </>
        )
    );
};

export default OrderItem;
