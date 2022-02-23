/* /pages/login.js */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { login } from "../lib/auth";
import AppContext from "../context/AppContext";

function Login(props) {
    const [data, updateData] = useState({ identifier: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    const appContext = useContext(AppContext);

    useEffect(() => {
        if (appContext.isAuthenticated) {
            router.push("/"); // redirect if you're already logged in
        }
    }, []);

    function onChange(event) {
        updateData({ ...data, [event.target.name]: event.target.value });
    }

    return (
        <Container>
            <div>
                <section>
                    {Object.entries(error).length !== 0 &&
                        error.constructor === Object &&
                        error.message.map((error) => {
                            return (
                                <div
                                    key={error.messages[0].id}
                                    style={{ marginBottom: 10 }}
                                >
                                    <small style={{ color: "red" }}>
                                        {error.messages[0].message}
                                    </small>
                                </div>
                            );
                        })}
                    <Form className="uk-form-stacked uk-position-center">
                        <fieldset disabled={loading}>
                            <FormGroup className="uk-margin">
                                <Label
                                    className="uk-form-small uk-form-label uk-position-top-center uk-position-relative uk-label"
                                >Email:</Label>
                                <Input
                                    onChange={(event) => onChange(event)}
                                    name="identifier"
                                    className="uk-form-width-large uk-form-small uk-input uk-position-bottom-center uk-position-relative"
                                />
                            </FormGroup>
                            <FormGroup className="uk-margin">
                                <Label
                                    className="uk-form-small uk-form-label uk-position-top-center uk-position-relative uk-label"
                                >Password:</Label>
                                <Input
                                    onChange={(event) => onChange(event)}
                                    type="password"
                                    name="password"
                                    className="uk-form-width-large uk-form-small uk-input uk-position-bottom-center uk-position-relative"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Button className="uk-button uk-button-primary uk-width-1-1"
                                    onClick={() => {
                                        setLoading(true);
                                        login(data.identifier, data.password)
                                            .then((res) => {
                                                setLoading(false);
                                                // set authed User in global context to update header/app state
                                                appContext.setUser(res.data.user);
                                            })
                                            .catch((error) => {
                                                setError(error.response.data);
                                                setLoading(false);
                                            });
                                    }}
                                >
                                    {loading ? "Loading... " : "Submit"}
                                </Button>
                            </FormGroup>
                        </fieldset>
                    </Form>
                </section>
            </div>
        </Container>
    );
}

export default Login;