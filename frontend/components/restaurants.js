import React from "react";
import RestaurantCard from "./restaurantcard";
import NextImage from "./image";

const Restaurants = ({ restaurants }) => {
    const leftRestaurantsCount = Math.ceil(restaurants.length / 5);
    const leftRestaurants = restaurants.slice(0, leftRestaurantsCount);
    const rightRestaurants = restaurants.slice(leftRestaurantsCount, restaurants.length);

    return (
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
    );
};

export default Restaurants;

