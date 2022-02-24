import React from "react";
import Link from "next/link";
import NextImage from "./image";

const RestaurantCard = ({ restaurant }) => {
    return (
        <Link href={`/article/${restaurant.attributes.slug}`}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <NextImage image={restaurant.attributes.picture} />
                    </div>
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large">
                            {restaurant.attributes.name}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default RestaurantCard;