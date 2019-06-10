import * as React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SizeDropdown from "./SizeDropdown";
import ToppingCheckboxes from "./ToppingCheckboxes";
import { Message } from "primereact/message";
import { formatter, sumPriceList } from "../utils/currencyHelper";
import PizzaList from "./PizzaList";
import { submitOrder } from "../utils/orderSubmitter";
import { withRouter } from "react-router-dom";

const OrderForm = props => {
    const [name, setName] = React.useState("");
    const [size, setSize] = React.useState({});
    const [price, setPrice] = React.useState(0);
    const [pizzaPrice, setPizzaPrice] = React.useState(0);
    const [orderPizzas, setOrderPizzas] = React.useState([]);
    const [toppings, setToppings] = React.useState([]);
    const [sizeError, setSizeError] = React.useState("");
    const [formError, setFormError] = React.useState("");
    const [currentPizzaNum, setCurrentPizzaNum] = React.useState(0);

    const mapStateToPizza = () => {
        const pizza = {
            number: currentPizzaNum,
            size: size.name,
            price,
            toppings: toppings.filter(t => t.selected)
        };
        setCurrentPizzaNum(currentPizzaNum + 1);
        return pizza;
    };

    const validateAddPizza = event => {
        event.preventDefault();

        setFormError("");

        if (!size.name) {
            setSizeError("Size is required");
            return;
        }

        setOrderPizzas([...orderPizzas, mapStateToPizza(event)]);
    };

    React.useEffect(() => {
        const selectedToppings = toppings.filter(t => t.selected);
        setPrice(sumPriceList(selectedToppings) + pizzaPrice);
    }, [toppings, pizzaPrice]);

    return (
        <form onSubmit={validateAddPizza}>
            {formError && <Message severity="error" text={formError} />}
            <div style={{ paddingBottom: "1.5em" }}>
                <label>
                    {`Total Price: ${formatter.format(
                        sumPriceList(orderPizzas)
                    )}`}
                </label>
            </div>
            <PizzaList
                editable={true}
                pizzas={orderPizzas}
                onDeleteClick={p =>
                    setOrderPizzas(
                        orderPizzas.filter(x => x.number !== p.number)
                    )
                }
            />
            <div style={{ paddingBottom: "2em" }}>
                <label>Current Price: {formatter.format(price)}</label>
            </div>
            <div style={{ paddingBottom: "1em" }}>
                <span className="p-float-label">
                    <InputText
                        id="float-name"
                        type="text"
                        size="30"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="float-name">Full Name</label>
                </span>
            </div>
            <div style={{ paddingBottom: "1em" }}>
                <SizeDropdown
                    onSizeChange={e => {
                        setSize(e.value);
                        setPizzaPrice(e.value.price);
                        setSizeError("");
                    }}
                    value={size}
                />
                {sizeError && <Message severity="error" text={sizeError} />}
            </div>
            <ToppingCheckboxes onToppingChange={setToppings} />
            <div className="p-grid">
                <div className="p-col-3" />
                <div className="p-col-3">
                    <Button label="Add Pizza" icon="pi pi-plus" type="submit" />
                </div>
                <div className="p-col-3">
                    <Button
                        label="Submit Order"
                        icon="pi pi-dollar"
                        type="button"
                        onClick={() => {
                            setFormError("");
                            submitOrder(name, orderPizzas, price)
                                .then(() => props.history.push("/"))
                                .catch(error => setFormError(error.message));
                        }}
                    />
                </div>
            </div>
        </form>
    );
};

export default withRouter(OrderForm);
