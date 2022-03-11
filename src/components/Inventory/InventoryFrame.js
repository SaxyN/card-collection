import React from 'react';
import InventoryItem from './InventoryItem';
import EmptyInventoryItem from './EmptyInventoryItem';
import { makeStyles } from '@mui/styles';
import { Card, IconButton } from "@mui/material";
import MissingCard from './MissingCard/MissingCard';

const useStyles = makeStyles((theme) => ({
    frame: {
        // border: "solid red 1px",
        width: "95%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto",
        justifyContent: "center",
        marginTop: "20px",
        padding: "20px",
        // backgroundColor: "lightgray"
    },
    sortButtons: {
        position: "absolute",
        margin: "0 0 0 70%",
    },
    button: {

    }
}))

const InventoryFrame = ({ inventory, cardPool }) => {
    const classes = useStyles()

    function searchPool(cardId) {
        var found = 0;
        var item = null;
        inventory.forEach(element => {
            console.log("looking", cardId, "against", element.id);
            if (cardId === element.id) {
                found = 1;
                item = element;
            }
        })

        if (found === 1) {
            return item;
        } else {
            return null;
        }
    }

    function getImageById() {

    }

    return (
        <>
            {/* <div className={classes.sortButtons}>
                <IconButton>Hi</IconButton>
            </div> */}
            <Card className={classes.frame} elevation={10}>
                {inventory && cardPool ?
                    Object.keys(cardPool).map((item, index) => {
                        // cardPool.forEach(element => {
                        //     console.log(typeof inventory[item].id, typeof element.id);
                        //     if (inventory[item].id === element.id) {
                        //         return (
                        //             <InventoryItem key={index} cardId={inventory[item].id} cardImage={inventory[item].img} cardType={inventory[item].type} />
                        //         )
                        //     } else {
                        //         <MissingCard key={index} card={element} />
                        //     }
                        // });
                        // console.log(searchPool(cardPool[item].id));
                        var card = searchPool(cardPool[item].id)
                        if (card) {
                            return (
                                <InventoryItem key={index} cardId={card.id} cardImage={card.img} cardType={card.type} cardCount={card.count} />
                            )
                        } else {
                            return (
                                <MissingCard key={index} card={cardPool[item]} />
                            )
                        }
                    })
                    :
                    <>
                        Nothing Here
                    </>
                }
                {/* {cardPool ? Object.keys(cardPool).map((item, index) => {
                    // console.log(cardPool[item].name)
                    return (
                        <MissingCard key={index} card={cardPool[item]} />
                    )
                })
                    :
                    <></>
                } */}
            </Card>
        </>
    )
}

export default InventoryFrame;