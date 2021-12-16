import React from 'react';
import Header from "../components/Header/Header";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const style = makeStyles((theme) => ({
    welcomeCard: {
        padding: "10px",
        borderRadius: "25px",
        backgroundColor: "white",
        color: "black",
        margin: "25px"
    },
    styledButton: {
        padding: "10px",
        // borderRadius: "10px"
        backgroundColor: "grey"
    },
    buttonOuter: {
        padding: "10px",
        margin: "25px"
    }
}))

const MainContainer = () => {
    const classes = style();


    return (
        <div>
            <Header />
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div>
                    <div className={classes.welcomeCard}>
                        Welcome To The Pack Pulling Simulator
                    </div>
                    <div className={classes.buttonOuter}>
                        <Button className={classes.styledButton} variant="contained">Get Started!</Button>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default MainContainer;