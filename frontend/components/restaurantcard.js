import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { Card } from 'antd';
import Moment from "react-moment";


const { Meta } = Card;

const RestaurantCard = ({ restaurant }) => {
    return (
        <Link href={`/restaurant/${restaurant.attributes.slug}`}>
            <Card
                style={{textAlign: 'center'}}
                hoverable
                cover={<NextImage image={restaurant.attributes.picture} />}
            >
                <p id="openning">
                    <Moment format="HH:mm">{restaurant.attributes.Openning}</Moment> <a>-</a> <Moment format="HH:mm">{restaurant.attributes.Closing}</Moment>


                </p>

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