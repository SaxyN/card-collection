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

    // Card Object
    function buildCollection() {
        var visibleCollection = [];
        var needToAdd = true;
        for (var i = 0; i < inventoryData.length; i++) {
            if (visibleCollection.length === 0) {
                visibleCollection.push(inventoryData[0])
            }
            needToAdd = true;
            for (var j = 0; j < visibleCollection.length; j++) {
                if (inventoryData[i].id === visibleCollection[j].id && inventoryData[i].type !== visibleCollection[j].type) {
                    visibleCollection[j].count = visibleCollection[j].count + inventoryData[i].count;
                    if (inventoryData[i].type > visibleCollection[j].type) {
                        visibleCollection[j].type = inventoryData[i].type;
                    }
                    needToAdd = false;
                } else if (inventoryData[i].id === visibleCollection[j].id && inventoryData[i].type === visibleCollection[j].type) {
                    needToAdd = false;
                }
            }
            if (needToAdd) {
                visibleCollection.push(inventoryData[i]);
            } else {
                needToAdd = true;
            }
        }
        console.log(inventoryData, visibleCollection);
        dispatch(cardActions.updateVisibleInventory(visibleCollection));
    }

    return (
        <div>
            <Header />
            <div style={{ width: "100%", alignItems: "center", marginTop: "20px" }}>
                <InventoryFrame inventory={inventoryData} cardPool={card_pool} updateINV={buildCollection} />
            </div>
        </div>
    )
}

export default InventoryContainer