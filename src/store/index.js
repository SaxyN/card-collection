import { combineReducers } from 'redux';
import { cardReducer } from "./cards/cards.reducer.js";

export default combineReducers({
    cards: cardReducer,
})