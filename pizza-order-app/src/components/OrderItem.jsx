import * as React from "react";
import PizzaList from "./PizzaList";
import { formatter } from "../utils/currencyHelper";
import moment from "moment";

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
                    <div className="p-col-6">
                        <label>{`Order Id: ${order.orderId}`}</label>
                    </div>
                    <div className="p-col-6">
                        <label>{`Name: ${order.name}`}</label>
                    </div>
                    <div className="p-col-6">
                        <label>{`Total Cost: ${formatter.format(
                            order.totalCost
                        )}`}</label>
                    </div>
                    <div className="p-col-6">
                        <label>
                            {`Order Time: ${moment(order.orderDate).format(
                                "MM/DD/YYYY h:mm A"
                            )}`}
                        </label>
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
