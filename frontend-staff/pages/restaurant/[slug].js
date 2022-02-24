/* /pages/login.js */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { login } from "../lib/auth";
import AppContext from "../context/AppContext";
import Layout from "../components/layout";
import {fetchAPI} from "../lib/api";

const Orders = ({restaurants}) => {
    const appContext = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (!appContext.isAuthenticated) {
            router.push("/")
        }
    }, [])

    return (
        <Layout restaurants={restaurants.data}>
            <Container>
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const restaurantsRes = await fetchAPI("/restaurants/");

    return {
        props: { restaurants: restaurantsRes },
        revalidate: 1,
    };
}

export default Orders;