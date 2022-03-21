import * as React from 'react';
import InventoryItem from './InventoryItem';
import { makeStyles } from '@mui/styles';
import { Modal, Fade } from "@mui/material";
import { Box } from '@mui/system';
import InventoryUtils from './Utils/InventoryUtils';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    frame: {

        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        justifyContent: "center",

    },
    itemCard: {
        padding: "5px",
        margin: "15px",
        // border: "#BFBFBF",
        // borderStyle: "none dotted solid dotted",
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
    },

    modalStyle: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
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
                    <div className={classes.modalStyle}>
                        {infoSet ?
                            Object.keys(infoSet).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={classes.itemCard}>
                                            <InventoryItem key={index} card={infoSet[item]} />
                                        </div>
                                    </div>
                                )
                            })
                            : <>No Info Here?</>}
                        {/* Hello */}
                    </div>
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
                                        <InventoryItem key={index} card={inventory[item]} openCardInfo={openCardInfo} />
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