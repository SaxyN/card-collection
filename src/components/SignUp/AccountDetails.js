import { Card, CardActions, TextField, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { Link, useHistory } from "react-router-dom";

import { getAuth, updateProfile } from "firebase/auth";

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

const AccountDetails = () => {
    const classes = useStyles();
    const [displayName, setDisplayName] = React.useState("");
    const [profileURL, setProfileURL] = React.useState("");
    const auth = getAuth();
    const history = useHistory();

    const submiteProfileUpdate = () => {
        console.log(displayName, profileURL);
        updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: profileURL
        }).then(() => {
            console.log("Account Data Setup Successful");
            history.push("/");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div style={{
            justifyContent: "center",
            display: "flex",
            padding: "35px",
        }}>
            <div className={classes.mainDiv}>
                <Card className={classes.loginPaper} elevation={5}>
                    <Typography variant="h4">Setting Up Your Account</Typography>
                    <TextField margin="normal" variant="outlined" label="Display Name" type="required" onChange={(e) => setDisplayName(e.target.value)} />
                    <TextField margin="normal" variant="outlined" label="Profile URL" type="required" onChange={(e) => setProfileURL(e.target.value)} />
                    <CardActions style={{ textAlign: "center", justifyContent: "center" }}>
                        <Button className={classes.submitButton} variant="contained" onClick={() => submiteProfileUpdate()}>
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default AccountDetails;