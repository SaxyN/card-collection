import React from 'react';
import { makeStyles } from "@mui/styles";
// import { Button, Card, CardContent, CardActions, Divider, Typography } from "@mui/material";
// import { Link, useRouteMatch, Redirect } from 'react-router-dom';
// import card_back from "./card_back.png";
// import pack_design from '../../assets/pack_design.png';
// import pack_design2 from '../../assets/pack_design2.png';
// import pack_design3 from '../../assets/pack_design3.png';

// import TestCard from '../CardItem/TestCard/TestCard';
// import MainCard from '../CardItem/MainCard/MainCard';
// import HoloCard from '../CardItem/HoloCard/HoloCard';

import * as storeActions from "../../store/cards/cards.action";
import { generatePack } from '../../cardpull/cardPuller';
import { useDispatch, useSelector } from 'react-redux';
import Pack from "../Packs/Pack";

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
        margin: "15px",
        textAlign: "center"
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
        marginTop: "10px",
        marginBottom: "10px",
        "&:hover": {
            transform: "scale(1.05)",
        }
    },
    packDescription: {
        marginTop: "10px",
    }
}))

const PacksFrame = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { packs, cardPool } = useSelector((state) => ({
        packs: state.cards.packs,
        cardPool: state.cards.card_pools
    }))

    const handlePackOpen = (packData) => {
        let pack = generatePack(packData.type, packData.size, packData.set, cardPool)
        // console.log(pack);
        dispatch(storeActions.loadNewPack(pack));
    }

    return (
        <div className={classes.main}>
            {packs.map((item, index) => {
                // console.log(item.name);
                return (
                    <Pack key={index} packData={item} imageSize={"l"} handlePackOpen={handlePackOpen} />
                )
            })}
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
            {/* <Card className={classes.cardStyle}>
                <CardContent>
                    <img src={pack_design3} alt="logo" className={classes.pack} />
                    <Divider orientation='horizontal' />
                    <Typography className={classes.packDescription} variant="body1">Normal 6 Card Pack</Typography>
                </CardContent>
                <Divider orientation='horizontal' />
                <CardActions style={{ justifyContent: "center", padding: "15px" }}>
                    <Button className={classes.subButton} variant="contained" component={Link} to={`${match.url}/packgenerate`} onClick={() => handlePackOpen()}>Open Now</Button>
                </CardActions>
            </Card>
            <Card className={classes.cardStyle}>
                <CardContent>
                    <img src={pack_design2} alt="logo" className={classes.pack} />
                    <Divider orientation='horizontal' />
                    <Typography className={classes.packDescription} variant="body1">Epic Card Guarenteed</Typography>
                </CardContent>
                <Divider orientation='horizontal' />
                <CardActions style={{ justifyContent: "center", padding: "15px" }}>
                    <Button className={classes.subButton} variant="contained" component={Link} to={`${match.url}/packgenerate`}>Open Now</Button>
                </CardActions>
            </Card> */}
            {/* </div> */}
            {/* <div className={classes.subMain}>
                <img src={pack_design2} alt="logo" className={classes.pack} />
                <Button variant="contained">Open Now</Button>
            </div> */}
        </div>
    )
}

export default PacksFrame;