import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import restaurants from "../../components/restaurants";

const Article = ({ foodcategory, dishes, restaurant, restaurants }) => {
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
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <ReactMarkdown children={restaurant.attributes.description} />
                    <hr className="uk-divider-small" />
                    <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                        <div>
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
        filters: {
            slug: params.slug,
        },
        populate: ["dishes", "restaurant"],
    });
    const dishesRes = await fetchAPI("/dishes", {
        filters: {
            slug: params.slug,
        },
        populate: ["picture", "food-category"],
    });

    console.log("Restaurant")

    const restaurantsRes = await fetchAPI("/restaurants", {
        filters: {
            slug: params.slug,
        },
        populate: ["picture"],
    });

    console.log("End")

    return {
        props: { foodcategory: foodcategoryRes, dishes: dishesRes, restaurant: restaurantsRes.data[0], restaurants: restaurantsRes },
        revalidate: 1,
    };
}

export default Article;