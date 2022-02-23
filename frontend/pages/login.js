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
            <Row>
                <Col sm="12" md={{ size: 5, offset: 3 }}>
                    <div className="paper">
                        <div className="header">
                        </div>
                        <section className="wrapper">
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
                            <Form>
                                <fieldset disabled={loading}>
                                    <FormGroup className="mb-3">
                                        <Label>Email:</Label>
                                        <Input
                                            onChange={(event) => onChange(event)}
                                            name="identifier"
                                        />
                                    </FormGroup>
                                    <FormGroup className="">
                                        <Label>Password:</Label>
                                        <Input
                                            onChange={(event) => onChange(event)}
                                            type="password"
                                            name="password"
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Button style={{
                                            backgroundColor: "#008CBA",
                                            textAlign: "center",
                                            color: "white",
                                            border: "none",
                                            width: "100%",
                                            padding: "1% 1.5%",
                                        }}
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
                </Col>
            </Row>
        </Container>
    );
}

export default Login;