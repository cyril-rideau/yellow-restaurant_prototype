import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { Card } from 'antd';

const { Meta } = Card;

const RestaurantCard = ({ restaurant }) => {
    return (
        <Link href={`/restaurant/${restaurant.attributes.slug}`}>
            <Card
                style={{textAlign: 'center'}}
                hoverable
                cover={<NextImage image={restaurant.attributes.picture} />}
            >
                <div className="center">
                    <Meta
                            title={restaurant.attributes.name}
                    />
                </div>
            </Card>
        </Link>
    );
};

export default RestaurantCard;

/*
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


*/