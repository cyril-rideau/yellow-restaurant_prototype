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
import user from "./user";
import Cookie from "js-cookie";

const Cart = ({restaurants}) => {
        const [data, setData] = useState({ identifier: "", password: "", balance:"", total_cart: "" });
        const [loading, setLoading] = useState(false);
        const router = useRouter();
        const appContext = useContext(AppContext);
        const bal = data.balance;
        const payment = data.total_cart;

    useEffect(() => {
        if (!appContext.isAuthenticated) {
            router.push("/login")
        }
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
    }, []);

    function onChange(event) {
        updateData({ ...data, [event.target.name]: event.target.value });
    }

    return (
        <Layout restaurants={restaurants.data}>
            <Container>
                <div>
                    <div
                        className="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-padding uk-margin"
                    >
                        <h1>Your order</h1>
                    </div>
                    <section>
                        <Form className="uk-form-stacked uk-position-center">
                            <fieldset disabled={loading}>
                                <FormGroup className="uk-margin">
                                    <Label
                                        className="uk-form-small uk-form-label uk-position-top-center uk-position-relative uk-label"
                                    >Dishes selected: </Label>
                                    <Input
                                        name="List of dishes selected"
                                        className="uk-form-width-large uk-form-small  uk-position-bottom-center uk-position-relative"
                                    />
                                </FormGroup>
                                <FormGroup className="uk-margin">
                                    <label className="uk-label uk-position-relative uk-position-center">
                                        Total:
                                    </label>
                                    <div className="uk-text-center">
                                        {payment}
                                    </div>
                                </FormGroup>
                                <FormGroup className="uk-margin">
                                        <label className="uk-label uk-position-relative uk-position-center">
                                            Current account Balance:
                                        </label>
                                        <div className="uk-text-center">
                                            {bal}
                                        </div>
                                </FormGroup>
                                <FormGroup>
                                    <Button className="uk-button uk-button-primary uk-width-1-1"
                                            onClick={() => {
                                                setLoading(true);;
                                                router.push("/summary_order")
                                                setLoading(false);;
                                            }}
                                    >
                                        {loading ? "Loading... " : "Confirm your order"}
                                    </Button>
                                </FormGroup>
                            </fieldset>
                        </Form>
                    </section>
                </div>
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const restaurantsRes = await fetchAPI("/restaurants");

    return {
        props: { restaurants: restaurantsRes },
        revalidate: 1,
    };
}

export default Cart;