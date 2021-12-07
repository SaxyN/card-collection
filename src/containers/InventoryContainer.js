import React from 'react';
import Header from '../components/Header/Header';
import InventoryFrame from '../components/Inventory/InventoryFrame';
import { db } from "../firebase/firebase";

import { doc, getDoc } from "firebase/firestore";

import { useSelector } from "react-redux";

import * as actions from "../store/cards/cards.action";
import { useDispatch } from 'react-redux';

const InventoryContainer = () => {
    const [searched, setSearched] = React.useState(false);
    const dispatch = useDispatch();
    const { inventoryData } = useSelector((state) => ({
        inventoryData: state.cards.inventory,
    }))
    // getInventory(); // Turned this off so we dont over use the database for testing

    async function getInventory() {
        if (inventoryData !== null & searched) {
            return
        } else {
            const docRef = doc(db, "users", "inventory");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Doc Data: ", docSnap.data());
                setSearched(true);
                dispatch(actions.loadInventoryData(docSnap.data()));
                return docSnap.data();
            } else {
                console.log("no such data")
            }
        }

    }

    return (
        <div>
            <Header />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <InventoryFrame inventory={inventoryData} />
            </div>
        </div>
    )
}

export default InventoryContainer