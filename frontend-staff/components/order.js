import React, {useState} from "react";
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

const OrderCard = ({ order }) => {

    return (
        <a className="uk-link-reset">
            <div className="uk-card uk-card-muted">
                <div className="uk-card-body">
                    <p id="title" className="uk-text-large">
                        {order.id}|{order.attributes.totalPrice}|
                        {order.attributes.restaurant.data.attributes.name}|
                        {order.attributes.user.data.attributes.username}|
                        {order.attributes.done}
                    </p>
                </div>
                <ul>
                    {order.attributes.dishes.data.map((dish) => {
                        return (
                            <li>
                                <a>{dish.attributes.name}</a>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </a>
    );
};

export default OrderCard;