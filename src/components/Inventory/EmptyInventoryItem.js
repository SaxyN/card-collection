import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    emptyItemOuter: {
        margin: "10px",
        // border: "solid 1px black",
        width: "210px",
        height: "295px",
        boxShadow: "5px 5px 5px black",
        borderRadius: "7px",
        backgroundColor: "grey",
    },

    img: {
        width: "210px",
        height: "295px",
        borderRadius: "7px",
    },

    cardBlank: {
        backgroundColor: "grey",
        width: "210px",
        height: "295px",
        borderRadius: "7px",
    }
}));

const EmptyInventoryItem = () => {
    const classes = useStyles();

    return (
        // <Card className={classes.emptyItemOuter}>This is an empty Item</div>
        <Card className={classes.emptyItemOuter}></Card>
    )
}

export default EmptyInventoryItem;