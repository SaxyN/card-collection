import React from 'react';
import Header from '../components/Header/Header';
import InventoryFrame from '../components/Inventory/InventoryFrame';

import { useSelector } from "react-redux";

const InventoryContainer = () => {
    const { inventoryData, card_pool } = useSelector((state) => ({
        inventoryData: state.cards.inventory,
        card_pool: state.cards.card_pools
    }))

    return (
        <div>
            <Header />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <InventoryFrame inventory={inventoryData} cardPool={card_pool} />
            </div>
        </div>
    )
}

export default InventoryContainer