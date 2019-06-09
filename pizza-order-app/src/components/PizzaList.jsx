import * as React from "react";
import toppingPrices from "../utils/toppingPrices";
import basePizzaPrices from "../utils/basePizzaPrices";
import { formatter } from "../utils/currencyHelper";
import { Button } from "primereact/button";

const PizzaList = ({ pizzas, editable, onDeleteClick }) => {
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
                            .filter(t =>
                                p.toppings.find(pt => pt.name === t.name)
                            )
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

    const className = editable ? "p-col-3" : "p-col-4";
    return (
        <div className="p-grid" style={{ paddingBottom: "2em" }}>
            {pizzas.length > 0 && (
                <>
                    <label style={{ fontWeight: "bold" }} className={className}>
                        Size
                    </label>
                    <label style={{ fontWeight: "bold" }} className={className}>
                        Price
                    </label>
                    <label style={{ fontWeight: "bold" }} className={className}>
                        Toppings
                    </label>
                </>
            )}
            {editable && <div className={className} />}
            <div className="p-col-12" />
            {mappedPizzas &&
                mappedPizzas.map((p, i) => {
                    return (
                        <React.Fragment key={p.number ? p.number : i}>
                            <div className={className}>{p.size}</div>
                            <div className={className}>{p.price}</div>
                            <div className={className}>{p.toppings}</div>
                            {editable && (
                                <div className={className}>
                                    <Button
                                        className="p-button-danger"
                                        label="Delete"
                                        type="button"
                                        onClick={() => onDeleteClick(p)}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
        </div>
    );
};

export default PizzaList;
