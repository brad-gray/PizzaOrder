import * as React from "react";
import { DataView } from "primereact/dataview";
import { Dropdown } from "primereact/dropdown";
import OrderItem from "./OrderItem";

const header = ({ onSortChange, sortKey }) => {
    const sortOptions = [
        { label: "Newest First", value: { field: "orderDate", sortOrder: -1 } },
        { label: "Oldest First", value: { field: "orderDate", sortOrder: 1 } },
        { label: "Name", value: { field: "name", sortOrder: 1 } },
        { label: "Order Id", value: { field: "orderId", sortOrder: 1 } }
    ];

    return (
        <div className="p-grid">
            <div className="p-col-2" style={{ textAlign: "left" }}>
                <Dropdown
                    options={sortOptions}
                    value={sortKey}
                    placeholder="Sort By"
                    onChange={onSortChange}
                />
            </div>
            <div style={{ fontSize: "1.5em" }} className="p-col-8">
                Order List
            </div>
        </div>
    );
};

const OrderList = () => {
    const [orders, setOrders] = React.useState(null);
    const [first, setFirst] = React.useState(0);
    const [sortKey, setSortKey] = React.useState(null);
    const [sortOrder, setSortOrder] = React.useState(1);

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
            <DataView
                value={orders}
                paginator={true}
                rows={10}
                first={first}
                onPage={e => setFirst(e.first)}
                itemTemplate={template}
                layout="grid"
                header={header({
                    onSortChange: e => {
                        setSortKey(e.value.field);
                        setSortOrder(e.value.sortOrder);
                    },
                    sortKey
                })}
                sortOrder={sortOrder}
                sortField={sortKey}
            />
        )
    );
};

export default OrderList;
