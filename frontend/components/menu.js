import React from "react";
import RestaurantCard from "./restaurantcard";
import NextImage from "./image";
import Dishecard from "./dishecard";
import Dishes from "./dishes";

const MenuCategory = ({ foodcategories, dishes, restaurant }) => {

    dishes = dishes.filter(dishe => dishe.attributes.restaurants.data[0].attributes.slug === restaurant.attributes.slug)

    return (
        <div>
            <div className="uk-width-1-1" data-uk-grid="true">
                <ul className="uk-nav-primary uk-nav-parent-icon" uk-nav="multiple: true">
                    <li className="uk-active"><a>Menu</a></li>

                        {foodcategories.data.map((category, i) => {
                            const r = dishes.find(
                                dishe => dishe.attributes.food_category.data.attributes.slug == category.attributes.slug)
                            console.log(r)
                            if (r != null) {
                                return (
                                    <Dishes
                                        foodcategory={category}
                                        dishes={dishes}
                                        restaurant={restaurant}
                                        key={`article__left__${category.attributes.slug}`}
                                    />
                                );
                            } else return null

                        })}
                </ul>
            </div>
        </div>
    );
};

export default MenuCategory;

/* <ul className="uk-nav-sub">
</ul>*/

// category.attributes.dishes.data.length > 0)