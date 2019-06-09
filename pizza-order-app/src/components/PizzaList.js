import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import toppingPrices from "../utils/toppingPrices";
import basePizzaPrices from "../utils/basePizzaPrices";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
});

const PizzaList = ({ pizzas }) => {
    const [mappedPizzas, setMappedPizzas] = React.useState(null);
    const [toppings, setToppings] = React.useState([]);
    const [basePrices, setBasePrices] = React.useState([]);

    React.useEffect(() => {
        toppingPrices().then(result => setToppings(result));
        basePizzaPrices().then(result => setBasePrices(result));
    }, []);

    React.useEffect(() => {
        setMappedPizzas(
            pizzas.map(p => {
                return {
                    ...p,
                    price: formatter.format(
                        toppings
                            .filter(t => p.toppings.find(pt => pt.name === t.name))
                            .map(t => t.price)
                            .reduce((p, c) => p + c, 0) +
                            basePrices
                                .filter(b => p.size === b.size)
                                .map(b => b.price)
                                .reduce((p, c) => p + c, 0)
                    ),
                    toppings: p.toppings.map(t => t.name).join(", ")
                };
            })
        );
    }, [pizzas, toppings, basePrices]);

    return (
        <DataTable value={mappedPizzas}>
            <Column field="size" header="Size" />
            <Column field="price" header="Price" />
            <Column field="toppings" header="Toppings" />
        </DataTable>
    );
};

export default PizzaList;
