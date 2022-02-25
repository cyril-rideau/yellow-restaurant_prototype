/* /pages/login.js */
import React, {useEffect, useContext, useState} from "react";
import { useRouter } from "next/router";
import {
    Container,
} from "reactstrap";
import AppContext from "../../context/AppContext";
import Layout from "../../components/layout";
import {fetchAPI, fetchAPIAuth} from "../../lib/api";
import Cookie from "js-cookie";
import Order from "../../components/order";
import OrderList from "../../components/orders";
import qs from "qs";

const Orders = ({restaurants}) => {
    const appContext = useContext(AppContext);
    const router = useRouter();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (Cookie.get("token")) {
            setAuth(true)
        }
        if (!appContext.isAuthenticated) {
            router.push("/")
        }

        setToken(Cookie.get("token"));

        const params = qs.stringify({ populate: ["user", "dishes", "restaurant"] }, {
            encodeValuesOnly: true,
        })

        fetch("http://localhost:1337/api/orders?" + params, {
            headers: {
                "Authorization": "Bearer " + Cookie.get("token")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No orders</p>
    if (auth) {appContext.isAuthenticated = true}

    console.log(data);

    return (
        <Layout restaurants={restaurants.data}>
            <Container>
                <OrderList orders={data.data}>
                </OrderList>
            </Container>
        </Layout>
    );
}

export async function getStaticPaths() {
    const restaurantRes = await fetchAPI("/restaurants", { fields: ["Slug"] });

    return {
        paths: restaurantRes.data.map((restaurant) => ({
            params: {
                slug: restaurant.attributes.Slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const restaurantRes = await fetchAPI("/restaurants");

    return {
        props: { restaurants: restaurantRes },
        revalidate: 1,
    };
}

export default Orders;