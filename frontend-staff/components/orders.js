import React from "react";
import OrderCard from "./order";
import RestaurantCard from "./restaurantcard";

const OrderList = ({ orders, slug }) => {
    return (
    <div>
        <div data-uk-grid="true">
            <div>
                {orders.map((order, i) => {
                    if (slug != order.attributes.restaurant.data.attributes.Slug)
                    {
                        return null;
                    }
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
