import React from "react";
import Link from "next/link";
import NextImage from "./image";

const OrderCard = ({ order }) => {
    console.log(order);

    return (
        <Link href={`/order/${order.attributes.uid}`}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large">
                            {order.attributes.totalPrice}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default OrderCard;