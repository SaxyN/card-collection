import React from 'react';
import InventoryItem from './InventoryItem';
import EmptyInventoryItem from './EmptyInventoryItem';
import { makeStyles } from '@mui/styles';
import { Card, CardContent } from "@mui/material";
import MissingCard from './MissingCard/MissingCard';
import { Box } from '@mui/system';
import InventoryUtils from './Utils/InventoryUtils';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    frame: {

        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        justifyContent: "center",

    },
    itemCard: {
        padding: "5px",
        margin: "15px",
        border: "#BFBFBF",
        borderStyle: "none dotted solid dotted",
    },
    sortButtons: {
        position: "absolute",
        margin: "0 0 0 70%",
    },
    button: {

    },
    frameOuter: {
        overflow: "auto",
        width: "90%",
        // marginTop: "20px",
        paddingTop: "25px",
        paddingBottom: "50px",
        textAlign: "center",
        backgroundColor: "#757575",
        borderRadius: "5px",
        marginLeft: "auto",
        marginRight: "auto",
        height: "100%",
        // overflow: "auto",
    }
}))

const InventoryFrame = ({ inventory, cardPool }) => {
    const classes = useStyles();
    const { visibleCollection } = useSelector((state) => ({
        visibleCollection: state.cards.visibleCollection,
    }));
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

    return (
        <>
            <Box className={classes.frameOuter}>
                <InventoryUtils />
                <Box className={classes.frame} elevation={10}>
                    {/* {visibleCollection ?
                    Object.keys(visibleCollection).map((item, index) => {
                        return (
                            <div key={index}>
                            <div className={classes.itemCard}>
                            <InventoryItem cardId={visibleCollection[item].id} cardImage={visibleCollection[item].img} cardType={visibleCollection[item].type} cardCount={visibleCollection[item].count} />
                            </div>
                            </div>
                            )
                        })
                    : <>Nothing In Here! Go Open Packs!</>} */}
                    {inventory ?
                        Object.keys(inventory).map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={classes.itemCard}>
                                        <InventoryItem key={index} card={inventory[item]} />
                                    </div>
                                </div>
                            )
                        })
                        : <>Nothing In Here! Go Open Packs!</>}
                    {/* {inventory && cardPool ?
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
                                        } */}
                    {/* {cardPool ? Object.keys(cardPool).map((item, index) => {
                    // console.log(cardPool[item].name)
                    return (
                        <MissingCard key={index} card={cardPool[item]} />
                        )
                    })
                    :
                    <></>
                } */}
                </Box>
            </Box>
        </>
    )
}

export default InventoryFrame;