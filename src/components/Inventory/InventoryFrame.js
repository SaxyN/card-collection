import * as React from 'react';
import InventoryItem from './InventoryItem';
import { makeStyles } from '@mui/styles';
import { Modal, Fade, Card, CardContent } from "@mui/material";
import { Box } from '@mui/system';
import InventoryUtils from './Utils/InventoryUtils';

const useStyles = makeStyles((theme) => ({
    frame: {
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        justifyContent: "center",
        height: "700px",
    },
    itemCard: {
        padding: "5px",
        paddingTop: "15px",
        margin: "15px 25px 15px 25px",
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
        paddingTop: "25px",
        paddingBottom: "50px",
        textAlign: "center",
        backgroundColor: "#757575",
        borderRadius: "5px",
        marginLeft: "auto",
        marginRight: "auto",
        height: "100%",
    },

    modalStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '15px',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: "15px",
        p: 4,
        textAlign: "center"
    },

    modalContent: {
        display: "grid",
        gridTemplateColumns: 'auto auto auto'
    }
}))

const InventoryFrame = ({ inventory, cardPool }) => {
    const classes = useStyles();
    const [openInfo, setOpenInfo] = React.useState(false);
    const [infoSet, setInfoSet] = React.useState([]);
    const closeInfo = () => setOpenInfo(false);

    const openCardInfo = (cardID) => {
        var tempArray = [];
        for (var i = 0; i < inventory.length; i++) {
            if (inventory[i].id === cardID) {
                tempArray.push(inventory[i]);
            }
        }
        tempArray.sort(function (a, b) {
            return b.type - a.type;
        })
        setInfoSet(tempArray);
        setOpenInfo(true);
    }


    return (
        <>
            <Modal
                open={openInfo}
                onClose={closeInfo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={openInfo}>
                    <Card className={classes.modalStyle}>
                        <CardContent className={classes.modalContent}>

                            {infoSet ?
                                Object.keys(infoSet).map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={classes.itemCard}>
                                                <InventoryItem key={index} card={infoSet[item]} sizeTag={2} />
                                            </div>
                                        </div>
                                    )
                                })
                                : <>No Info Here?</>}
                        </CardContent>
                    </Card>
                </Fade>
            </Modal>
            <Box className={classes.frameOuter}>
                <InventoryUtils />
                <Box className={classes.frame} elevation={10}>
                    {inventory ?
                        Object.keys(inventory).map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={classes.itemCard}>
                                        <InventoryItem key={index} card={inventory[item]} openCardInfo={openCardInfo} sizeTag={0} />
                                    </div>
                                </div>
                            )
                        })
                        : <>Nothing In Here! Go Open Packs!</>}
                </Box>
            </Box>
        </>
    )
}

export default InventoryFrame;