import {fetchAPI} from "../lib/api";
import Layout from "../components/layout";
import Cookie from "js-cookie";
import useSWR from "swr";
import Router from "next/router";

const fetcher = async url => {
    const response = await fetch(url, { headers: {"Authorization": "Bearer " + Cookie.get("token")}});

    const data = await response.json();

    return data
}

const User = ({ restaurants }) => {

    const user = useSWR("http://localhost:1337/api/users/me", fetcher);

    if (!user) {
        Router.push("/");
    }

    return (
        <Layout restaurants={restaurants.data}>
            <div
                className="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-padding uk-margin"
            >
                <h1>{user.data.username}</h1>
            </div>
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <div className="uk-margin">
                        <label className="uk-label uk-position-relative uk-position-center">
                            User:
                        </label>
                        <div className="uk-text-center">
                            {user.data.username}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-label uk-position-relative uk-position-center">
                            E-Mail:
                        </label>
                        <div className="uk-text-center">
                            {user.data.email}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-label uk-position-relative uk-position-center">
                            Account Balance:
                        </label>
                        <div className="uk-text-center">
                            {user.data.balance}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticProps({ req, params }) {
    const restaurantsRes = await fetchAPI("/restaurants");

    return {
        props: { restaurants: restaurantsRes },
        revalidate: 1,
    };
}

export default User;