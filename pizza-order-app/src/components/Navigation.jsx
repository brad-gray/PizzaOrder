import * as React from "react";
import { TabMenu } from "primereact/tabmenu";
import { withRouter } from "react-router-dom";

const Navigation = props => {
    const [items, setItems] = React.useState(null);
    const [activeItem, setActiveItem] = React.useState();

    const initalItems = [
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
        console.log(props);
        setItems(initalItems);
        setActiveItem(
            initalItems.find(x => x.route === props.location.pathname)
        );
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TabMenu
            model={items}
            activeItem={activeItem}
            onTabChange={e => {
                setActiveItem(e.value);
                props.history.push(e.value.route);
            }}
        />
    );
};

export default withRouter(Navigation);
