import {fetchAPI} from "../lib/api";
import Layout from "../components/layout";
import Cookie from "js-cookie";
import useSWR from "swr";
import Router from "next/router";
import {useEffect, useState} from "react";

const User = ({ restaurants }) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:1337/api/users/me',
            {
                headers: {
                    "Authorization": "Bearer " + Cookie.get("token"),
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <Layout restaurants={restaurants.data}>
            <div
                className="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-padding uk-margin"
            >
                <h1>{data.username}</h1>
            </div>
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <div className="uk-margin">
                        <label className="uk-label uk-position-relative uk-position-center">
                            User:
                        </label>
                        <div className="uk-text-center">
                            {data.username}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-label uk-position-relative uk-position-center">
                            E-Mail:
                        </label>
                        <div className="uk-text-center">
                            {data.email}
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-label uk-position-relative uk-position-center">
                            Account Balance:
                        </label>
                        <div className="uk-text-center">
                            {data.balance}
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