import * as types from "./cards.action.js";

const cardsData = {
    inventory: null,
    pack: [],
}

export const cardReducer = (state = cardsData, action) => {
    switch (action.type) {
        case types.LOAD_INVENTORY_DATA:
            return {
                ...state,
                inventory: action.payload,
            }
        case types.LOAD_NEW_PACK:
            return {
                ...state,
                pack: action.payload,
            }
        default:
            return state;
    }
}

export default cardReducer;