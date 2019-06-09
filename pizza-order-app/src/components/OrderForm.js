import * as React from "react";
import { InputText } from "primereact/inputtext";
import SizeDropdown from "./SizeDropdown";

const handleSubmit = event => {
    alert("form was submitted");
};

const OrderForm = () => {
    const [name, setName] = React.useState("");
    const [size, setSize] = React.useState({});

    return (
        <form onSubmit={handleSubmit}>
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
            <SizeDropdown onSizeChange={e => setSize(e.value)} value={size} />
        </form>
    );
};

export default OrderForm;
