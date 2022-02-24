import React, {useContext, useEffect} from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Restaurants from "../components/restaurants";
import Cookie from "js-cookie";
import AppContext from "../context/AppContext";
import {useRouter} from "next/router";

const Home = ({ restaurants, homepage }) => {
    const appContext = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (!appContext.isAuthenticated) {
            router.push("/")
        }
    }, [])

    return (
        <Layout restaurants={restaurants}>
            <Seo seo={homepage.attributes.seo} />
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>{homepage.attributes.hero.title}</h1>
                    <Restaurants restaurants={restaurants} />
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    // Run API calls in parallel
    const [restaurantsRes, homepageRes] = await Promise.all([
        fetchAPI("/restaurants", { populate: ["picture"] }),
        fetchAPI("/homepage", {
            populate: {
                hero: "*",
                seo: { populate: "*" },
            },
        }),
    ]);

    return {
        props: {
            restaurants: restaurantsRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    };
}

export default Home;