import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const PizzaList = ({ pizzas }) => {
    const [mappedPizzas, setMappedPizzas] = React.useState(null);

    React.useEffect(() => {
        setMappedPizzas(
            pizzas.map(p => {
                return {
                    ...p,
                    toppings: p.toppings.map(t => t.name).join(", ")
                };
            })
        );
    }, [pizzas]);

    return (
        <DataTable value={mappedPizzas}>
            <Column field="size" header="Size" />
            <Column field="price" header="Price" />
            <Column field="toppings" header="Toppings" />
        </DataTable>
    );
};

export default PizzaList;
