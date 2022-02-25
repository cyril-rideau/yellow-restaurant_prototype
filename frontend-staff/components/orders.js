import React from "react";
import OrderCard from "./order";
import RestaurantCard from "./restaurantcard";

const OrderList = ({ orders }) => {
    return (
    <div>
        <div className="uk-child-width-1-2@s" data-uk-grid="true">
            <div>
                {orders.map((order, i) => {
                    return (
                        <OrderCard
                            order={order}
                            key={`order__${order.attributes.uid}`}
                        />
                    );
                })}
            </div>
        </div>
    </div>)
};

export default OrderList;
