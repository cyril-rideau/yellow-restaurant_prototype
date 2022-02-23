import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import restaurants from "../../components/restaurants";
import Dishes from "../../components/dishes";
import Restaurants from "/components/restaurants";
import MenuCategory from "../../components/menu";

const Menu = ({ foodcategories, dishes, restaurant, restaurants }) => {
    console.log("ARTICLE")
    console.log(restaurants)
    const imageUrl = getStrapiMedia(restaurant.attributes.picture);

    const seo = {
        metaTitle: restaurant.attributes.name,
        metaDescription: restaurant.attributes.description,
        shareImage: restaurant.attributes.picture,
        article: true,
    };

    return (
        <Layout restaurants={restaurants.data}>
            <Seo seo={seo} />
            <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
            >
                <h1>{restaurant.attributes.name}</h1>
            </div>

            <div className="uk-section uk-width-1-1">
                <div className="uk-container uk-container-large">
                    <ReactMarkdown children={restaurant.attributes.description} />
                    <hr className="uk-divider-small"/>
                    <div>
                        <div>
                            <MenuCategory foodcategories={foodcategories} dishes={dishes} restaurant={restaurant}/>
                        </div>
                    </div>
                    <div className="uk-width-expand">
                        <p className="uk-margin-remove-bottom">
                        </p>
                        <p className="uk-text-meta uk-margin-remove-top">
                            <Moment format="MMM Do YYYY">
                                {restaurant.attributes.published_at}
                            </Moment>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const restaurantsRes = await fetchAPI("/restaurants", { fields: ["slug"] });

    return {
        paths: restaurantsRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const foodcategoryRes = await fetchAPI("/food-categories", {
        filters: {},
        populate: ["dishes", "restaurant"],
    });
    const dishesRes = await fetchAPI("/dishes", {
        filters: {},
        populate: ["picture", "food_category", "restaurants"],
    });
    const restaurantsRes = await fetchAPI("/restaurants", {
        filters: {
            slug: params.slug,
        },
        populate: ["picture", "food_categories"],
    });

    console.log(foodcategoryRes)
    console.log("Restaurant")
    console.log(restaurantsRes)

    console.log("Dishes")
    console.log(dishesRes)
    console.log("END")

    return {
        props: { foodcategories: foodcategoryRes, dishes: dishesRes.data, restaurant: restaurantsRes.data[0], restaurants: restaurantsRes },
        revalidate: 1,
    };
}

export default Menu;

