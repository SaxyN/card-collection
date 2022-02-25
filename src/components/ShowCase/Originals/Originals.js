import React from 'react';
import { Paper, Box, Typography, Divider } from '@mui/material';
import { makeStyles } from "@mui/styles";

// Cards For Showcasing
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
        padding: "20px"
    },
    innerShowcase: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
    }
}))

const Originals = () => {
    const classes = styles();
    return (
        <Box>
            <Paper className={classes.showcaseBack} elevation={5}>
                <Typography variant="h2">Original Set</Typography>
                <Divider orientation='horizontal' style={{margin: "15px"}}/>
                <div className={classes.innerShowcase}>
                    <div style={{margin:"15px"}}>
                        <NormalCard />
                    </div>
                    <div style={{margin:"15px"}}>
                        <HoloCard />
                    </div>
                    <div style={{margin:"15px"}}>
                        <ShatterCard />
                    </div>
                </div>
            </Paper>
        </Box>
    )
}

export default Originals;