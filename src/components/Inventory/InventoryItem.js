import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import { Badge, Typography } from "@mui/material";

import CardHandler from '../CardHandler/CardHandler';

const useStyles = makeStyles((theme) => ({
    itemOuter: {
        postiion: "relative",
        marginBottom: "25px",
        width: "208px",
        height: "293px",
        borderRadius: "7px",
        transition: "transform .5s ease",
        zIndex: 200,

    },

    img: {
        width: "210px",
        height: "295px",
        borderRadius: "7px",
        zIndex: "100",
        position: "absolute",
        top: 10,
    },

    img2: {
        width: "210px",
        height: "295px",
        borderRadius: "7px",
        boxShadow: "2px 5px 5px black",
        transition: "transform 0.25s ease",
        zIndex: "200",
        "&:animate": {

        }
    },

    img3: {
        position: "relative",
        width: "210px",
        height: "295px",
        borderRadius: "7px",
        boxShadow: "5px 5px 5px black",
        transition: "transform 0.25s ease",
    },

    countBadge: {
        position: "absolute",
        zIndex: "100",
        top: 0,
    },

    cardBlank: {
        backgroundColor: "grey",
        width: "210px",
        height: "295px",
        borderRadius: "7px",
    },

    generalCard: {
        margin: "0 15px 0 15px",
    },

    card_name: {
        // position: "absolute",
        // textAlign: "center",
        // top: -25,
    }
}));

const InventoryItem = ({ card }) => {
    const classes = useStyles();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            border: `2px solid black`,
            padding: '0 4px',
            right: 0,
            top: -12
        }
    }))

    const StyledCounter = styled('div')({
        color: 'black',
        backgroundColor: 'white',
        border: "solid 2px black",
        textAlign: 'center',
        width: "1%",
        position: "absolute",
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        top: "50%",
        left: "10%",
        marginLeft: "",
        marginTop: "",
        zIndex: 500,
    })

    return (
        <div style={{ justifyContent: "center" }}>
            <StyledBadge style={{ color: "black" }} badgeContent={card.count} color="default" max={50}>
                {/* <Typography className={classes.card_name} variant="body1">{card.name}</Typography> */}
                <CardHandler cardImage={card.img} cardType={card.type} />
            </StyledBadge>
        </div>
    )
}

export default InventoryItem;