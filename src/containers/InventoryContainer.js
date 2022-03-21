import React from 'react';
import Header from '../components/Header/Header';
import InventoryFrame from '../components/Inventory/InventoryFrame';

import * as cardActions from "../store/cards/cards.action";
import { useSelector, useDispatch } from "react-redux";

const InventoryContainer = () => {
    const dispatch = useDispatch();
    const { inventoryData, card_pool } = useSelector((state) => ({
        inventoryData: state.cards.inventory,
        card_pool: state.cards.card_pools,
    }))

    return (
        <div>
            <Header />
            <div style={{ width: "100%", alignItems: "center", marginTop: "20px" }}>
                <InventoryFrame inventory={inventoryData} cardPool={card_pool} />
            </div>
        </div>
    )
}

export default InventoryContainer