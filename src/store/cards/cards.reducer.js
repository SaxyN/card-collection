import * as types from "./cards.action.js";

const cardsData = {
    inventory: null
}

export const cardReducer = (state = cardsData, action) => {
    switch (action.type) {
        case types.LOAD_INVENTORY_DATA:
            return {
                ...state,
                inventory: action.payload,
            }
        default:
            return state;
    }
}

export default cardReducer;