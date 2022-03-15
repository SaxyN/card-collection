import React from 'react';
import { Paper, Box, Typography, Divider } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useSelector } from 'react-redux';

import NormalCard from '../../CardItem/NormalCard/NormalCard';
import HoloCard from '../../CardItem/HoloCard/HoloCard';
import ShatterCard from '../../CardItem/ShatterCard/ShatterCard';

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
        marginBottom: "20px",
        padding: "20px"
    },
    innerShowcase: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
        paddingBottom: "50px",
    },
    cardName: {
        marginBottom: "25px",
        textAlign: "center",
    }
}))

const Sets = () => {
    const classes = styles();
    const { allCard } = useSelector((state) => ({
        allCard: state.cards.card_pools
    }))

    return (
        <Box>
            <Paper className={classes.showcaseBack} elevation={5}>
                <Typography variant="h2">Set 1A</Typography>
                <Divider orientation='horizontal' style={{ margin: "15px" }} />
                <div className={classes.innerShowcase}>
                    {allCard ? Object.keys(allCard).map((item, index) => {
                        console.log(item);
                        return (
                            <div key={index} style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                                <Typography className={classes.cardName} variant="body1">{allCard[item].name}</Typography>
                                <NormalCard imageFace={allCard[item].img} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                            </div>
                        )
                    }) : <></>}
                </div>
                {/* <div className={classes.innerShowcase}>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Danny R</Typography>
                        <NormalCard imageFace={"danny_r"} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                    </div>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Harley S</Typography>
                        <NormalCard imageFace={"harley_s"} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                    </div>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Burley B</Typography>
                        <NormalCard imageFace={"burley_b"} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                    </div>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Big Leo & Big Meech</Typography>
                        <NormalCard imageFace={"big_leo_big_meech"} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                    </div>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Derek F</Typography>
                        <NormalCard imageFace={"derek_f"} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                    </div>
                    <div style={{ margin: "15px", width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}>
                        <Typography className={classes.cardName} variant="body1">Ethan F</Typography>
                        <NormalCard imageFace={"ethan_f"} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                    </div>
                </div> */}
            </Paper>
        </Box>
    )

}

export default Sets;