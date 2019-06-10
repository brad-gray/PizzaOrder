import * as React from "react";
import { TabMenu } from "primereact/tabmenu";
import { withRouter } from "react-router-dom";

const Navigation = ({ location, history }) => {
    const [items, setItems] = React.useState(null);
    const [activeItem, setActiveItem] = React.useState();

    const initialItems = [
        {
            label: "Order List",
            icon: "pi pi-list",
            route: "/"
        },
        {
            label: "Place Order",
            icon: "pi pi-shopping-cart",
            route: "/NewOrder/"
        }
    ];

    React.useEffect(() => {
        setItems(initialItems);
        setActiveItem(initialItems.find(i => i.route === location.pathname));
        console.log(
            "YOU SPIN ME RIGHT ROUND BABY RIGHT ROUND LIKE A RECORD BABY RIGHT ROUND ROUND ROUND"
        );
    }, [location]);

    return (
        <TabMenu
            model={items}
            activeItem={activeItem}
            onTabChange={e => {
                history.push(e.value.route);
                setActiveItem(e.value);
            }}
        />
    );
};

export default withRouter(Navigation);
