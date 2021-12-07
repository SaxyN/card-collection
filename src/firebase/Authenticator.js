import React, { useEffect } from "react";
import app from './firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CircularProgress, Typography } from "@mui/material";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [pending, setPending] = React.useState(true);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setCurrentUser(user)
                setPending(false)
            }
        });
    });

    if (pending) {
        return (
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", marginTop: "100px" }}>
                <div style={{ display: "auto", textAlign: "center" }}>
                    <CircularProgress color="warning" />
                    <Typography variant="h6">Loading Please Wait...</Typography>
                </div>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}
