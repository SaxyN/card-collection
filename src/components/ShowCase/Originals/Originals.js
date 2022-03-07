import React from 'react';
import { Paper, Box, Typography, Divider } from '@mui/material';
import { makeStyles } from "@mui/styles";

// Cards For Showcasing
import NormalCard from '../../CardItem/NormalCard/NormalCard';
import HoloCard from '../../CardItem/HoloCard/HoloCard';
import ShatterCard from '../../CardItem/ShatterCard/ShatterCard';
import CardHandler from '../../CardHandler/CardHandler';

// Test Fronts
// import GREEN_FRONT from "../../CardItem/CardAssets/green_front.png";
// import BLUE_FRONT from "../../CardItem/CardAssets/blue_front.png";
// import RED_FRONT from "../../CardItem/CardAssets/red_front.png";

const styles = makeStyles((theme) => ({
    wrapper: {
        width: "70%",
        textAlign: "center",
        justifyContent: "center"
    },
    showcaseBack: {
        width: "100%",
        display: "normal",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "20px",
        padding: "20px"
    },
    innerShowcase: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
        paddingBottom: "50px"
    },
    cardName: {
        marginBottom: "25px",
        textAlign: "center",
    }
}))



const Originals = () => {
    const classes = styles();

    // const randomImage = () => {
    //     const random = Math.floor(Math.random() * 100);
    //     if (random <= 33) {
    //         return GREEN_FRONT;
    //     } else if (random > 33 && random <= 66) {
    //         return BLUE_FRONT;
    //     } else {
    //         return RED_FRONT;
    //     }
    // }

    return (
        <Box>
            <Paper className={classes.showcaseBack} elevation={5}>
                <Typography variant="h2">Original Set Effects</Typography>
                <Divider orientation='horizontal' style={{ margin: "15px" }} />
                <div className={classes.innerShowcase}>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Normal</Typography>
                        <CardHandler cardImage={""} cardType={0} />
                        {/* <NormalCard imageFace={""} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> */}
                    </div>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Hologrpahic</Typography>
                        <CardHandler cardImage={""} cardType={1} />
                        {/* <HoloCard /> */}
                    </div>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Shatter</Typography>
                        <CardHandler cardImage={""} cardType={2} />
                        {/* <ShatterCard /> */}
                    </div>
                </div>
            </Paper>
        </Box>
    )
}

export default Originals;