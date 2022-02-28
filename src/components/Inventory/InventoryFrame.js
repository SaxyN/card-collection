import React from 'react';
import InventoryItem from './InventoryItem';
import EmptyInventoryItem from './EmptyInventoryItem';
import { makeStyles } from '@mui/styles';
import { Card } from "@mui/material";

import HoloCard from '../CardItem/HoloCard/HoloCard';
import ShatterCard from '../CardItem/ShatterCard/ShatterCard';
import NormalCard from '../CardItem/NormalCard/NormalCard';
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";
import TestCard from "../CardItem/TestCard/TestCard";

import {ImageFetcher} from "../ImageHandler/ImageHandler";

// Test Fronts
import GREEN_FRONT from "../CardItem/CardAssets/green_front.png";
import BLUE_FRONT from "../CardItem/CardAssets/blue_front.png";
import RED_FRONT from "../CardItem/CardAssets/red_front.png";

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

    const randomImage = () => {
        const random = Math.floor(Math.random() * 100);
        if (random <= 33) {
            return GREEN_FRONT;
        } else if (random > 33 && random <= 66) {
            return BLUE_FRONT;
        } else {
            return RED_FRONT;
        }
    }

    return (
        <Card className={classes.frame} elevation={10}>
            {inventory ?
                Object.keys(inventory).map((item, index) => {
                    if (inventory[item].card_id !== "") {
                        if (inventory[item].count === 1) {
                            return (
                                <InventoryItem key={index} itemId={inventory[item].card_id} itemCount={inventory[item].count} itemType={inventory[item].type} />
                            )
                        } else {
                            return (
                                <div key={index} style={{ position: "relative", padding: "10px" }}>
                                    <InventoryItem itemId={inventory[item].card_id} itemCount={inventory[item].count} itemType={inventory[item].type} />
                                    {/* <InventoryItem key={index} itemId={inventory[item].card_id} itemCount={inventory[item].count} />
                                    <InventoryItem key={index} itemId={inventory[item].card_id} itemCount={inventory[item].count} /> */}
                                </div>
                            )
                        }
                    } else {
                        return (
                            <EmptyInventoryItem key={index} />
                        )
                    }
                })
                :   
                <>
                    <NormalCard image={randomImage()}/>
                    <HoloCard />
                    <ShatterCard />
                    <LegendaryCard />
                </>
            }
        </Card>
    )
}

export default InventoryFrame;