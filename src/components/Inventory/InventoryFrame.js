import React from 'react';
import InventoryItem from './InventoryItem';
import EmptyInventoryItem from './EmptyInventoryItem';
import { makeStyles } from '@mui/styles';
import { Card } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    frame: {
        // border: "solid red 1px",
        width: "80%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
        marginTop: "20px",
        padding: "20px",
    }
}))

const InventoryFrame = ({ inventory }) => {
    const classes = useStyles()

    return (
        <Card className={classes.frame} elevation={10}>
            {inventory ?
                Object.keys(inventory).map((item, index) => {
                    return (
                        <InventoryItem key={index} cardId={inventory[item].id} cardImage={inventory[item].img} cardType={inventory[item].rarity} />
                    )
                })
                :
                <>
                    Nothing Here
                </>
            }
        </Card>
    )
}

export default InventoryFrame;