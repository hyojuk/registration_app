import React, { useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../myfirebase";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const [user, loading] = useAuth();
    const [authError, setAuthError] = useState(null);
    const navigate = useNavigate();
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
            navigate("/");
        } catch (error) {
            setAuthError(error.message);
        }
    };

    const handleSignOut = async () => {
        auth
            .signOut()
            .then(() => navigate("/"));
    };

    if (user) { 
        return ( 
            <a href="/" onClick={ e => {
                e.preventDefault()
                handleSignOut()
            }}>Sign out</a>
        )
    }

    return (
        <a href="/" onClick={ e => {
            e.preventDefault()
            handleLogin()
        }}>Login as admin {authError && authError.message}</a>
        // <p>{authError}</p>
    )
}

export default Login;