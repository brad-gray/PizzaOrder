import * as React from "react";
import { TabMenu } from "primereact/tabmenu";

const Navigation = () => {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        setItems([
            {
                label: "Order List",
                icon: "pi pi-list"
            },
            {
                label: "Place Order",
                icon: "pi pi-shopping-cart"
            }
        ]);
    }, []);

    return <TabMenu model={items} />;
};

export default Navigation;
