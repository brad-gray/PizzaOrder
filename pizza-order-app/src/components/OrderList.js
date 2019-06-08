import * as React from "react";
import { DataView } from "primereact/dataview";
import OrderItem from "./OrderItem";

const OrderList = () => {
    const [orders, setOrders] = React.useState(null);
    const [first, setFirst] = React.useState(0);

    React.useEffect(() => {
        (async () => {
            const response = await fetch("/api/order");
            const data = await response.json();
            console.log(data);
            setOrders(data);
        })();
    }, []);

    const template = order => <OrderItem order={order} />;

    return (
        orders && (
            <>
                <DataView
                    value={orders}
                    paginator={true}
                    rows={10}
                    first={first}
                    onPage={e => setFirst(e.first)}
                    itemTemplate={template}
                    layout="grid"
                />
                {orders.map(x => (
                    <label key={x.orderId}>{x.name}</label>
                ))}
            </>
        )
    );
};

export default OrderList;
