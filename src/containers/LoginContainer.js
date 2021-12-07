import React from 'react';
import Login from '../components/LogIn/LogIn';

const LoginContainer = ({ currentUser, authSignIn }) => {
    return (
        <div style={{
            justifyContent: "center",
            display: "flex",
            padding: "35px",
        }}>
            <Login />
        </div>
    )
}

export default LoginContainer;