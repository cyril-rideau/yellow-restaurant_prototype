import React from "react";
import RestaurantCard from "./restaurantcard";
import NextImage from "./image";
import { Row, Col, Divider } from 'antd';

const Restaurants = ({ restaurants }) => {
    const leftRestaurantsCount = Math.ceil(restaurants.length / 5);
    const leftRestaurants = restaurants.slice(0, leftRestaurantsCount);
    const rightRestaurants = restaurants.slice(leftRestaurantsCount, restaurants.length);

    return (
        <Row gutter={16}>
            <Divider orientation="center"> Restaurants </Divider>
            <Col span={12}>
                {leftRestaurants.map((restaurant, i) => {
                    return (
                        <RestaurantCard
                            restaurant={restaurant}
                            key={`article__left__${restaurant.attributes.slug}`}
                        />
                    );
                })}
            </Col>
            <Col span={12}>
                <div>
                    {rightRestaurants.map((restaurant, i) => {
                        return (
                            <RestaurantCard
                                restaurant={restaurant}
                                key={`article__left__${restaurant.attributes.slug}`}
                            />
                        );
                    })}
                </div>
            </Col>
        </Row>

    );
};

export default Restaurants;

/*
<div>
            <div className="uk-child-width-1-2@s" data-uk-grid="true">
                <div>
                    {leftRestaurants.map((restaurant, i) => {
                        return (
                            <RestaurantCard
                                restaurant={restaurant}
                                key={`article__left__${restaurant.attributes.slug}`}
                            />
                        );
                    })}
                </div>
                <div>
                        {rightRestaurants.map((restaurant, i) => {
                            return (
                                <RestaurantCard
                                    restaurant={restaurant}
                                    key={`article__left__${restaurant.attributes.slug}`}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
 */

