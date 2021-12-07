import React from 'react';
import { makeStyles } from "@mui/styles";
import { Button, Card, CardContent, CardActions, Divider } from "@mui/material";
import card_back from "./card_back.png";
import pack_design from '../../assets/pack_design.png';
import pack_design2 from '../../assets/pack_design2.png';
import pack_design3 from '../../assets/pack_design3.png';

// import TestCard from '../CardItem/TestCard/TestCard';
import MainCard from '../CardItem/MainCard/MainCard';
import HoloCard from '../CardItem/HoloCard/HoloCard';

const useStyles = makeStyles((theme) => ({
    main: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    subMain: {
        display: ""
    },
    subButton: {
        marginLeft: "none",
        position: "relative",
    },
    cardStyle: {
        margin: "15px"
    },
    show: {
        display: "auto",
        position: "absolute",
        marginLeft: "45%",
        width: 600,
        height: 600,
        transition: "transform 1s ease"
    },
    packOuter: {
        // display: "flex",
        // justifyContent: "center",
    },
    pack: {
        transition: "transform ease .5s",
        width: "270.25px", height: "525px",
        borderRadius: "15px",
        "&:hover": {
            transform: "scale(1.05)",
        }
    }
}))

const PacksFrame = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            {/* <div className={classes.subMain}> */}
            {/* <Card className={classes.cardStyle}>
                <CardContent>
                    <img src={pack_design2} alt="logo" className={classes.pack} />
                </CardContent>
                <Divider orientation='horizontal' />
                <CardActions style={{ justifyContent: "center", padding: "30px" }}>
                    <Button className={classes.subButton} variant="contained">Open Now</Button>
                </CardActions>
            </Card> */}
            <Card className={classes.cardStyle}>
                <CardContent>
                    <img src={pack_design3} alt="logo" className={classes.pack} />
                </CardContent>
                <Divider orientation='horizontal' />
                <CardActions style={{ justifyContent: "center", padding: "30px" }}>
                    <Button className={classes.subButton} variant="contained">Open Now</Button>
                </CardActions>
            </Card>
            {/* </div> */}
            {/* <div className={classes.subMain}>
                <img src={pack_design2} alt="logo" className={classes.pack} />
                <Button variant="contained">Open Now</Button>
            </div> */}
        </div>
    )
}

export default PacksFrame;