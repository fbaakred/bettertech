import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./signup.css";
import { Button, Form } from "react-bootstrap";
import { getDatabase, ref, set } from "firebase/database";

/**
 * Component for adding new user to database
 * @returns {JSX.Element}
 * @constructor
 */

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (
        event,
        email,
        password
    ) => {
        event.preventDefault();

        try {
            const signUp = await auth
                .createUserWithEmailAndPassword(email, password);
            const uid = signUp.user.uid;

            const db = getDatabase();
            await set(ref(db, 'Users/' + uid), {
                email: email,
                displayName: displayName,
                height: 0,
            });

            window.location = "/profile";
        } catch (errorMessage) {
            console.log(errorMessage);
            setError("Error signing up with e-mail and password");
        }

        setEmail("");
        setPassword("");
        setDisplayName("");
    };

    return (
        <div className="formContainer">
            <Form
                className="formPosting"
                onSubmit={(event) => {
                    createUserWithEmailAndPasswordHandler(event, email, password);
                }}
            >
                <h3>Sign up</h3>
                <div>{error}</div>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder={"John Smith"}
                        name={"displayName"}
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder={"example@domain.com"}
                        name={"email"}
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passord</Form.Label>
                    <Form.Control
                        placeholder={"password123"}
                        name={"password"}
                        type={"password"}
                        minlength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type={"submit"}>Create user</Button>
                <div>
                    Already a user? <Link to={"/signin"}>Sign in here!</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;
