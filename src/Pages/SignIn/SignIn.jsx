import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./signin.css";
import { Form } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
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
                        className="inputField"
                        type={"email"}
                        placeholder={"example@domain.com"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="inputField"
                        type={"password"}
                        name={"password"}
                        placeholder={"password123"}
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <button type={"submit"} className="signInButton">Sign in</button>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
                <div>
                    Not a user yet?{" "}
                    <Link to={"/signup"}>Sign up here!</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignIn;