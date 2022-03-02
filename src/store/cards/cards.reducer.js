import * as types from "./cards.action.js";

const cardsData = {
    inventory: null,
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
            "set": "1B"
        }
    ],
    card_pools: {
        // 0 = Normal 1 = Holo 2 = Shatter 3 = Legendary

        // Need to generate multiple normal and holo and shatter cards completely so we can 
        // test pulling method fully for performance and functionality
        "1A": [
            {
                "id": "derek_f_0",
                "img": "derek_f",
                "rarity": 0,
                "type": "normal" 
            },
            {
                "id": "derek_f_1",
                "img": "derek_f",
                "rarity": 1,
                "type": "holo"
            },
            {
                "id": "derek_f_2",
                "img": "derek_f",
                "rarity": 2,
                "type": "shatter"
            },
            {
                "id": "derek_f_3",
                "img": "derek_f_leg",
                "rarity": 3,
                "type": "legendary"
            }
        ],
        "2A": [
            {
                "id": "derek_f_0",
                "img": "derek_f",
                "rarity": 0,
                "type": "normal" 
            },
            {
                "id": "derek_f_1",
                "img": "derek_f",
                "rarity": 1,
                "type": "holo"
            },
            {
                "id": "derek_f_2",
                "img": "derek_f",
                "rarity": 2,
                "type": "shatter"
            }
        ]
    }
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