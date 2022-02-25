import React from "react";
import RestaurantCard from "./restaurantcard";
import NextImage from "./image";
import Dishecard from "./dishecard";

const Dishes = ({ foodcategory, dishes, restaurant }) => {
    //console.log("DISHES")

    const leftDishesCount = Math.ceil(dishes.length / 2);
    const leftDishes = dishes.slice(0, leftDishesCount);
    const rightDishes = dishes.slice(leftDishesCount, dishes.length);

    dishes = dishes.filter(dishe => dishe.attributes.food_category.data.attributes.slug == foodcategory.attributes.slug)

    return (
            <li className="uk-parent">
            <a> {foodcategory.attributes.name} </a>
            <ul className="uk-nav-sub uk-grid-large uk-text-center uk-grid-row-medium">
                <div className="uk-child-width-expand@s uk-text-center uk-grid uk-grid-gap-medium">
                    {dishes.map((dishe, i) => {
                        return (
                            <Dishecard
                                dishe={dishe}
                                key={`article__left__${dishe.attributes.slug}`}
                            />
                        );
                    })}
                </div>
            </ul>
            </li>
    );
};

export default Dishes;

/*                         {foodcategories.data.map((category, i) => {
                            return (
                                console.log(category.attributes.name),
                                <a> category.attributes.name</a>,
                                <ul className="uk-nav-sub">
                                    {leftDishes.map((dishe, i) => {
                                        return (
                                            <Dishecard
                                                dishe={dishe}
                                                key={`article__left__${dishe.attributes.slug}`}
                                            />
                                        );
                                    })}
                                </ul>

                            );
                        })}
                      */




/*                     <li className="uk-parent">
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
                    </div>*/