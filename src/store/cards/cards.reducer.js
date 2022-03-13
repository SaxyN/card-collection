import * as types from "./cards.action.js";

const cardsData = {
    inventory: [
        {
            "id": 1,
            "name": "Derek Fhreebs",
            "set": "1A",
            "set_num": 1,
            "img": "derek_f",
            "type": 2,
            "count": 6,
            "collection": [

            ]
        },
        {
            "id": 3,
            "name": "Ethan Forelli",
            "set": "1A",
            "set_num": 3,
            "img": "ethan_f",
            "type": 0,
            "count": 1,
        },
    ],
    pack: [],
    packs: [
        {
            "name": "1st Edition Pack",
            "description": "6 Card Pack",
            "image": "pack_design3",
            "size": 6,
            "type": "standard",
            "set": "1A"
        },
        {
            "name": "Staff Pack",
            "description": "Epic Card Guanteed",
            "image": "pack_design2",
            "size": 6,
            "type": "epic",
            "set": "1A"
        }
    ],
    card_pools: [
        // 0 = Normal 1 = Holo 2 = Shatter 3 = Legendary

        {
            "id": 1,
            "set": "1A",
            "img": "derek_f",
            "name": "Derek Fhreebs",
            "rarity": 2,
        },
        {
            "id": 2,
            "set": "1A",
            "img": "big_leo_big_meech",
            "name": "Big Leo & Big Meech",
            "rarity": 2,
        },
        {
            "id": 3,
            "set": "1A",
            "img": "ethan_f",
            "name": "Ethan Forelli",
            "rarity": 2,
        },
        {
            "id": 4,
            "set": "1A",
            "img": "harley_s",
            "name": "Harley S",
            "rarity": 2,
        },
        {
            "id": 5,
            "set": "1A",
            "img": "burley_b",
            "name": "Burley Bob",
            "rarity": 2,
        },
        {
            "id": 6,
            "set": "1A",
            "img": "danny_r",
            "name": "Danny Rodriguez",
            "rarity": 2,
        }
    ]
    // card_pool_data: [
    //     {

    //     }
    // ]
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
        case types.LOAD_PACKS:
            return {
                packs: action.payload,
            }
        default:
            return state;
    }
}

export default cardReducer;