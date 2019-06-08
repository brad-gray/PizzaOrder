import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import toppingPrices from "../utils/toppingPrices";

const PizzaList = ({ pizzas }) => {
    const [mappedPizzas, setMappedPizzas] = React.useState(null);
    const [toppings, setToppings] = React.useState([]);

    React.useEffect(() => {
        toppingPrices().then(result => setToppings(result));
    }, []);

    React.useEffect(() => {
        setMappedPizzas(
            pizzas.map(p => {
                return {
                    ...p,
                    price: toppings
                        .filter(t => p.toppings.find(pt => pt.name === t.name))
                        .map(t => t.price)
                        .reduce((p, c) => p + c, p.price),
                    toppings: p.toppings.map(t => t.name).join(", ")
                };
            })
        );
    }, [pizzas, toppings]);

    return (
        <DataTable value={mappedPizzas}>
            <Column field="size" header="Size" />
            <Column field="price" header="Price" />
            <Column field="toppings" header="Toppings" />
        </DataTable>
    );
};

export default PizzaList;
