import { Card, CardActions, TextField, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { Link, useHistory } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        width: "100%",
        maxWidth: "400px",
        // height: "428px",
        // maxHeight: "428px",
        textAlign: "center",
    },
    loginPaper: {
        width: "100%",
        padding: "25px",
        textAlign: "center",
    },
    loginPaperTitle: {
        marginBottom: "25px"
    },
    textField: {
        margin: "10px 10px 10px 10px"
    },
    submitButton: {
        margin: "10px"
    }
}))

const SignUp = () => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    const auth = getAuth();
    const history = useHistory();

    async function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    async function submitSignUp() {
        // console.log(email, password, passwordConfirm);
        if (password !== passwordConfirm) {
            console.log("Password Mismatch!");
        } else if (password && passwordConfirm && email) {
            console.log(email);
            console.log(password);
            console.log(passwordConfirm);
            console.log("Good to go");
            try {
                await signup(email, password);
                history.replace("/signup/account-details")
            } catch {
                console.log("Error Creating Account");
            }
        } else {
            console.log("Missing Parameters!");
        }
    }

    return (
        <div className={classes.mainDiv}>
            <Card className={classes.loginPaper} elevation={5}>
                <Typography className={classes.loginPaperTitle} variant="h2">Sign Up</Typography>
                <TextField margin="normal" variant="outlined" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                <TextField margin="normal" variant="outlined" label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <TextField margin="normal" variant="outlined" label="Confirm Password" type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                <CardActions style={{ textAlign: "center", justifyContent: "center" }}>
                    <Button className={classes.submitButton} variant="contained" onClick={() => submitSignUp()}>Sign Up</Button>
                </CardActions>
            </Card>
            <div style={{ padding: "10px", width: "100%", marginLeft: "15px", marginRight: "15px" }}>
                <Typography style={{ marginTop: "7px" }}>
                    Already Have An Account?
                </Typography>
                <Button style={{ margin: "10px" }} variant="contained" component={Link} to="/login">Log In</Button>
            </div >
        </div >
    )
}

export default SignUp;