import React from 'react';
import Header from '../components/Header/Header';
import InventoryFrame from '../components/Inventory/InventoryFrame';

import { useSelector } from "react-redux";

const InventoryContainer = () => {
    const { inventoryData } = useSelector((state) => ({
        inventoryData: state.cards.inventory,
    }))

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