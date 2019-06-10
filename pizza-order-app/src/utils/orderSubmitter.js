import { handleResponse, handleError } from "./apiUtils";

export const submitOrder = (name, orderPizzas, totalCost) => {
    const data = {
        name,
        totalCost,
        orderDate: new Date(),
        pizzas: orderPizzas.map(p => ({
            size: p.size,
            price: p.price,
            toppings: p.toppings.map(t => ({ name: t.name }))
        }))
    };

    return fetch("/api/order/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(handleResponse)
        .catch(handleError);
};
