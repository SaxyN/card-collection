import React from 'react';
import { makeStyles } from "@mui/styles";
import * as storeActions from "../../store/cards/cards.action";
import { generatePack } from '../../cardpull/cardPuller';
import { useDispatch, useSelector } from 'react-redux';
import Pack from "../Packs/Pack";
import { useHistory, useRouteMatch } from 'react-router';

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
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const { packs, cardPool, inventory } = useSelector((state) => ({
        packs: state.cards.packs,
        cardPool: state.cards.card_pools,
        inventory: state.cards.inventory
    }))

    const handlePackOpen = (packData) => {
        let pack = generatePack(packData.type, packData.size, packData.set, cardPool)
        dispatch(storeActions.loadNewPack(pack));
        addToInventory(pack)
    }

    function addToInventory(pack) {
        var needToAdd = true;
        if (inventory.length === 0) {
            console.log("Flat Insert");
            inventory.push(pack[0]);
        }
        for (var i = 0; i < pack.length; i++) {
            for (var j = 0; j < inventory.length; j++) {
                console.log("comparing: ", pack[i], " and ", inventory[j]);
                if (pack[i].id === inventory[j].id && pack[i].type === inventory[j].type) {
                    needToAdd = false
                    inventory[j].count = inventory[j].count + 1;
                    console.log("Found: ", pack[i], " and ", inventory[j]);
                }
            }

            if (needToAdd) {
                const data = {
                    count: 1,
                    id: pack[i].id,
                    img: pack[i].img,
                    type: pack[i].type,
                    name: pack[i].name,
                    set: pack[i].set
                }
                inventory.push(data);
                console.log("Adding: ", data);
            } else {
                needToAdd = true
            }
        }
        dispatch(storeActions.updateInventoryData(inventory));
        setTimeout(() => {
            history.push(`${match.url}/packgenerate`);
        }, 500);
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