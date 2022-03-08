import React from 'react';
import { makeStyles } from "@mui/styles";
import * as storeActions from "../../store/cards/cards.action";
import { generatePack } from '../../cardpull/cardPuller';
import { useDispatch, useSelector } from 'react-redux';
import Pack from "../Packs/Pack";

const useStyles = makeStyles((theme) => ({
    main: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    subMain: {
        display: ""
    },
    subButton: {
        marginLeft: "none",
        position: "relative",
    },
    cardStyle: {
        margin: "15px",
        textAlign: "center"
    },
    show: {
        display: "auto",
        position: "absolute",
        marginLeft: "45%",
        width: 600,
        height: 600,
        transition: "transform 1s ease"
    },
    pack: {
        transition: "transform ease .5s",
        width: "270.25px", height: "525px",
        borderRadius: "15px",
        marginTop: "10px",
        marginBottom: "10px",
        "&:hover": {
            transform: "scale(1.05)",
        }
    },
    packDescription: {
        marginTop: "10px",
    }
}))

const PacksFrame = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { packs, cardPool } = useSelector((state) => ({
        packs: state.cards.packs,
        cardPool: state.cards.card_pools
    }))

    const handlePackOpen = (packData) => {
        let pack = generatePack(packData.type, packData.size, packData.set, cardPool)
        dispatch(storeActions.loadNewPack(pack));
    }

    return (
        <div className={classes.main}>
            {packs.map((item, index) => {
                return (
                    <Pack key={index} packData={item} imageSize={"l"} handlePackOpen={handlePackOpen} />
                )
            })}
        </div>
    )
}

export default PacksFrame;