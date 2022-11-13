import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import "./signup.css";
import { Form } from "react-bootstrap";
import { setDoc, doc } from "firebase/firestore";

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
    let navigate = useNavigate();

    const createUserWithEmailAndPasswordHandler = async (
        event,
        email,
        password
    ) => {
        event.preventDefault();

        try {
            const signUp = await auth
                .createUserWithEmailAndPassword(email, password);
            console.log(signUp)
            const uid = signUp.user.uid;
            await setDoc(doc(db, "users", uid),{
                email: email,
                displayName: displayName,
            })
            navigate("/profile");
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
                        className = "inputField"
                        placeholder={"John Smith"}
                        name={"displayName"}
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        className = "inputField"
                        placeholder={"example@domain.com"}
                        name={"email"}
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className = "inputField"
                        placeholder={"password123"}
                        name={"password"}
                        type={"password"}
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <button type={"submit"} className="signUpButton">Create user</button>
                <div>
                    Already a user? <Link to={"/signin"}>Sign in here!</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;
