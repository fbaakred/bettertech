import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./signin.css";
import { Button, Form } from "react-bootstrap";

/**
 * Component for signing in to profile
 * @returns {JSX.Element}
 */

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                window.location = "/profile";
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setError("No user found with this e-mail address");
                } else {
                    setError("Wrong username/password");
                }
            });
    };

    return (
        <div className="formContainer">
            <Form
                className="formPosting"
                onSubmit={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                }}
            >
                <h3>Sign in</h3>
                <div>{error}</div>
                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type={"email"}
                        placeholder={"example@domain.com"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={"password"}
                        name={"password"}
                        placeholder={"password123"}
                        minlength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type={"submit"}>Sign in</Button>
                <div>
                    Not a user yet?{" "}
                    <Link to={"/signup"}>Sign up here!</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignIn;