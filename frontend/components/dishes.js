import React from "react";
import RestaurantCard from "./restaurantcard";
import NextImage from "./image";
import Dishecard from "./dishecard";

const Restaurants = ({ dishes, restaurant }) => {
    //console.log(dishes[0])
    const foodrestaurant = dishes[0].attributes.restaurants
    //console.log(foodrestaurant)
    //console.log("PRINT")
    //console.log(foodrestaurant.data[0].attributes.slug)
    //console.log(restaurant.attributes.slug)

    dishes = dishes.filter(dishe => dishe.attributes.restaurants.data[0].attributes.slug === restaurant.attributes.slug)
    //console.log(dishes[11])

    const leftDishesCount = Math.ceil(dishes.length / 2);
    const leftDishes = dishes.slice(0, leftDishesCount);
    const rightDishes = dishes.slice(leftDishesCount, dishes.length);

    return (
        <div>
            <div data-uk-grid>
                <div class="uk-width-small-1-2 uk-width-medium-1-4">...</div>
                <div class="uk-width-small-1-2 uk-width-medium-1-4">...</div>
            </div>

            <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-4" data-uk-grid>
                <div>...</div>
                <div>...</div>
            </div>
            <div className="uk-child-width-1-2@s" data-uk-grid="true">
                <ul className="uk-nav-primary uk-nav-parent-icon" uk-nav>
                    <li className="uk-active"><a href="#">Menu</a></li>
                    <li className="uk-parent">
                        <a href="#">Dishes</a>
                        <ul className="uk-nav-sub">
                            <li><a href="#">Sub item</a></li>
                            <li><a href="#">Sub item</a></li>
                        </ul>
                    </li>
                    <li className="uk-parent">
                        <a href="#">Dishes</a>
                        <ul className="uk-nav-sub">
                            <li><a href="#">Sub item</a></li>
                            <li><a href="#">Sub item</a></li>
                        </ul>
                    </li>
                    <div>
                        {leftDishes.map((dishe, i) => {
                                return (
                                <Dishecard
                                    dishe={dishe}
                                    key={`article__left__${dishe.attributes.slug}`}
                                />
                            );
                        })}
                    </div>
                    <div>
                        {rightDishes.map((dishe, i) => {
                            return (
                                <Dishecard
                                    dishe={dishe}
                                    key={`article__left__${dishe.attributes.slug}`}
                                />
                            );
                        })}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Restaurants;