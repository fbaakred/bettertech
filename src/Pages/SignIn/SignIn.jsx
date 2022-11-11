import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, /*db*/ } from "../../firebase";
import "./signin.css";
import { Form } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";

/**
 * Component for signing in to profile
 * @returns {JSX.Element}
 */

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate("/profile")
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

    /*const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider).catch((error) => {
            if (error.code === "auth/user-not-found") {
                setError("No user found with this e-mail address");
            } else {
                setError("Wrong username/password");
            }
        });
        try {
            console.log(result.user);
            const docRef = doc(db, 'users', result.user.uid);
            if (docRef.exists) {
                navigate("/profile");
              } else {
                await setDoc(docRef,{
                    email: result.user.email,
                    displayName: result.user.displayName,
                })
            }
            
        } catch (e) {
            console.log(e)
        }
    };*/

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                window.location = "";
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
            <div className="formPosting">
                <Form
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
                </Form>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
                <div>
                    Not a user yet?{" "}
                    <Link to={"/signup"}>Sign up here!</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;