import * as React from "react";
import { Checkbox } from "primereact/checkbox";
import { Fieldset } from "primereact/fieldset";
import toppingPrices from "../utils/toppingPrices";

const ToppingCheckboxes = ({ onToppingChange }) => {
    const [toppings, setToppings] = React.useState([]);

    React.useEffect(() => {
        toppingPrices().then(result =>
            setToppings(
                result.map(x => ({
                    name: x.name,
                    code: x.name,
                    price: x.price,
                    selected: false
                }))
            )
        );
    }, []);

    const recalculateTotal = (toppingName, selected) => {
        const newToppings = toppings.map(top =>
            top.name === toppingName ? { ...top, selected } : top
        );
        setToppings(newToppings);
        return newToppings;
    };

    const fieldGroup = (name, items) => {
        return (
            <Fieldset legend={name}>
                {items.map(topping => (
                    <div key={topping.name}>
                        <Checkbox
                            inputId={topping.name}
                            value={topping.name}
                            onChange={e => {
                                onToppingChange(
                                    recalculateTotal(topping.name, e.checked)
                                );
                            }}
                            checked={topping.selected}
                        />
                        <label
                            htmlFor={topping.name}
                            className="p-checkbox-label"
                        >
                            {topping.name}
                        </label>
                    </div>
                ))}
            </Fieldset>
        );
    };

    return (
        <div className="p-grid">
            <div className="p-col-6">
                {fieldGroup(
                    "Complimentary Toppings - Free",
                    toppings.filter(top => top.price === 0)
                )}
            </div>
            <div className="p-col-6">
                {fieldGroup(
                    "Premium Toppings - $1 each",
                    toppings.filter(top => top.price > 0)
                )}
            </div>
        </div>
    );
};

export default ToppingCheckboxes;
