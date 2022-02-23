import React from "react";
import Link from "next/link";
import NextImage from "./image";

const RestaurantCard = ({ dishe }) => {
    if (dishe.attributes.picture != null) {
        return (
            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <NextImage image={dishe.attributes.picture} />
                </div>
                <div className="uk-card-body">
                    <p id="title" className="uk-text-large">
                        {dishe.attributes.name}
                    </p>
                </div>
            </div>
        );
    }
};

export default RestaurantCard;

