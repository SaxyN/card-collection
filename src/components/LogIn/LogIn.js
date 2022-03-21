import { Card, CardActions, TextField, Typography, Button } from '@mui/material';
import MuiAlert from "@mui/material/Alert";

import React from 'react';
import { makeStyles } from '@mui/styles';

import { Link, useHistory } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        width: "100%",
        maxWidth: "400px",
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
        margin: "10px 10px 10px 10px"
    }
}))

const LogIn = () => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const auth = getAuth();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    function signIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userData) => {
                console.log(userData);
                if (!userData.user.displayName) {
                    history.replace("/signup/account-details")
                } else {
                    history.replace("/")
                }
            })
            .catch((error) => {
                console.log(error);
                const errorMessage = error.message;
                console.log(errorMessage);
                setOpen(true);
            })
    }

    async function submitLogIn() {
        // console.log(email, password, passwordConfirm);
        if (email && password) {
            console.log("Logging In: " + email + " " + password);
            await signIn(email, password);
        } else {
            console.log("Missing Parameters!");
            setOpen(true);
        }
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert open={open} elevation={6} ref={ref} variant="filled" {...props} />;
    })

    return (
        <div className={classes.mainDiv}>
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}> */}
            {open ?
                <Alert onClose={() => setOpen(false)} severity="error" style={{ width: "100%" }}>Error Logging In!</Alert>
                : <></>
            }
            {/* </Snackbar> */}
            <Card className={classes.loginPaper} elevation={5}>
                <Typography className={classes.loginPaperTitle} variant="h2">Log In</Typography>
                <TextField margin="normal" variant="outlined" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                <TextField margin="normal" variant="outlined" label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <CardActions style={{ textAlign: "center", justifyContent: "center" }}>
                    <Button className={classes.submitButton} variant="contained" onClick={() => submitLogIn()}>Log In</Button>
                </CardActions>
            </Card>
            <div style={{ padding: "10px", width: "100%", marginLeft: "15px", marginRight: "15px" }}>
                <Typography style={{ marginTop: "7px" }}>
                    New Around Here?
                </Typography>
                <Button style={{ margin: "10px" }} variant="contained" component={Link} to="/signup">Sign Up</Button>
            </div >
        </div >
    )
}

export default LogIn;