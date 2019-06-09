import * as React from "react";
import { Dropdown } from "primereact/dropdown";
import basePizzaPrices from "../utils/basePizzaPrices";

const SizeDropdown = ({ onSizeChange, value }) => {
    const [sizes, setSizes] = React.useState([]);

    React.useEffect(() => {
        basePizzaPrices().then(result =>
            setSizes(
                result.map(x => ({
                    name: x.size,
                    code: x.size,
                    price: x.price
                }))
            )
        );
    }, []);

    return (
        <Dropdown
            value={value}
            options={sizes}
            onChange={onSizeChange}
            placeholder="Select a Size"
            optionLabel="name"
        />
    );
};

export default SizeDropdown;
