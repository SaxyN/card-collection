import dataBank from "../../testData/data.json";

export const LOAD_INVENTORY_DATA = "LOAD_INVENTORY_DATA";
export const LOAD_NEW_PACK = "LOAD_NEW_PACK";
export const LOAD_PACKS = "LOAD_PACKS";

export const loadInventoryData = (data) => {
    return (dispatch) => {
        // console.log(data);
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