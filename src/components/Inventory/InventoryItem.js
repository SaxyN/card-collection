import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import { Badge } from "@mui/material";

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
    }
}));

const InventoryItem = ({ cardId, cardImage, cardType }) => {
    const classes = useStyles();
    console.log(cardId, cardImage, cardType)

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -97,
            top: 295,
            border: `2px solid black`,
            padding: '0 4px',
        }
    }))

    const StyledCounter = styled('div')({
        color: 'black',
        backgroundColor: 'white',
        border: "solid 2px black",
        textAlign: 'center',
        width: "20%",
        paddingTop: 8,
        borderRadius: 10,
        top: 300,
        left: 85,
        marginLeft: "42%",
        marginTop: "-20px",
        zIndex: 500,
    })

    return (
        <>
            <CardHandler cardImage={cardImage} cardType={cardType} />
        </>
    )
}

export default InventoryItem;