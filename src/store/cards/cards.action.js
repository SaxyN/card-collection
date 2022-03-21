import dataBank from "../../testData/data.json";

export const LOAD_INVENTORY_DATA = "LOAD_INVENTORY_DATA";
export const LOAD_NEW_PACK = "LOAD_NEW_PACK";
export const LOAD_PACKS = "LOAD_PACKS";

export const UPDATE_VISIBLE_INVENTORY = "UPDATE_VISIBLE_INVENTORY";
export const UPDATE_INVENTORY_DATA = "UPDATE_INVENTORY_DATA";

export const SORT_INVENTORY_BY_NAME = "SORT_INVENTORY_BY_NAME";
export const SORT_INVENTORY_BY_ID = "SORT_INVENTORY_BY_ID";
export const SORT_INVENTORY_BY_TYPE = "SORT_INVENTORY_BY_TYPE";
export const SORT_INVENTORY_BY_COUNT = "SORT_INVENTORY_BY_COUNT";

export const SORT_INVENTORY_BY_SEARCH = "SORT_INVENTORY_BY_SEARCH";

export const UPDATE_INVENTORY = "UPDATE_INVENTORY";

export const loadInventoryData = (data) => {
    return (dispatch) => {
        dispatch({ type: LOAD_INVENTORY_DATA, payload: dataBank.inventory })
    }
}

export const loadNewPack = (data) => {
    return (dispatch) => {
        dispatch({ type: LOAD_NEW_PACK, payload: data })
    }
}

export const loadPacks = (data) => {
    return (dispatch) => {
        dispatch({ type: LOAD_PACKS, payload: dataBank.packs })
    }
}

export const updateInventory = (inventoryData) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_INVENTORY, payload: inventoryData })
    }
}

export const updateVisibleInventory = (inventoryData) => {
    var visibleCollection = [];
    var needToAdd = true;
    for (var i = 0; i < inventoryData.length; i++) {
        needToAdd = true;
        for (var j = 0; j < visibleCollection.length; j++) {
            if (inventoryData[i].id === visibleCollection[j].id && inventoryData[i].type !== visibleCollection[j].type) {
                visibleCollection[j].count = visibleCollection[j].count + inventoryData[i].count;
                if (inventoryData[i].type > visibleCollection[j].type) {
                    visibleCollection[j].type = inventoryData[i].type;
                }
                needToAdd = false;
            } else if (inventoryData[i].id === visibleCollection[j].id && inventoryData[i].type === visibleCollection[j].type) {
                // visibleCollection[j].count = visibleCollection[j].count + inventoryData[i].count;
                needToAdd = false;
            }
        }
        if (needToAdd) {
            visibleCollection.push(inventoryData[i]);
        } else {
            needToAdd = true;
        }
    }
    visibleCollection.sort(function (a, b) {
        return a.id - b.id;
    });
    return (dispatch) => {
        dispatch({ type: UPDATE_VISIBLE_INVENTORY, payload: visibleCollection })
    }
}

export const updateInventoryData = (pack, inventoryData) => {
    var needToAdd = true;
    if (inventoryData.length === 0) {
        inventoryData.push(pack[0]);
    }
    for (var i = 0; i < pack.length; i++) {
        for (var j = 0; j < inventoryData.length; j++) {
            if (pack[i].id === inventoryData[j].id && pack[i].type === inventoryData[j].type) {
                needToAdd = false
                inventoryData[j].count = inventoryData[j].count + 1;
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
            inventoryData.push(data);
        } else {
            needToAdd = true
        }
    }
    inventoryData.sort(function (a, b) {
        if (a.id === b.id) {
            return b.type - a.type;
        }
        return a.id - b.id;
    });
    return (dispatch) => {
        dispatch({ type: UPDATE_INVENTORY_DATA, payload: inventoryData });
    }
}

export const sortInventoryByCount = (inventoryData) => {
    inventoryData.sort(function (a, b) {
        return b.count - a.count;
    });
    return (dispatch) => {
        dispatch({ type: UPDATE_INVENTORY_DATA, payload: inventoryData });
    }
}

export const sortInventoryByType = (inventoryData) => {
    inventoryData.sort(function (a, b) {
        return b.type - a.type;
    });
    return (dispatch) => {
        dispatch({ type: UPDATE_INVENTORY_DATA, payload: inventoryData });
    }
}

export const sortInventoryByName = (inventoryData) => {
    inventoryData.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    return (dispatch) => {
        dispatch({ type: UPDATE_INVENTORY_DATA, payload: inventoryData });
    }
}

export const sortInventoryByID = (inventoryData) => {
    inventoryData.sort(function (a, b) {
        if (a.id === b.id) {
            return b.type - a.type;
        }
        return a.id - b.id;
    });
    return (dispatch) => {
        dispatch({ type: UPDATE_INVENTORY_DATA, payload: inventoryData });
    }
}

export const sortInventoryBySearch = (inventoryData, search) => {

}