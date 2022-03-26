import * as types from "./cards.action.js";

const cardsData = {
    visibleCollection: [

    ],
    inventory: [
        {
            "count": 65,
            "id": 5,
            "img": "burley_b",
            "type": 1,
            "name": "Burley Barret",
            "set": "1A",
            "specialTag": ""
        },
        {
            "count": 2,
            "id": 5,
            "img": "burley_b",
            "type": 2,
            "name": "Burley Barret",
            "set": "1A",
            "specialTag": ""
        },
        {
            "count": 1,
            "id": 2,
            "img": "big_leo_big_meech",
            "type": 0,
            "name": "Big Leo & Big Meech",
            "set": "1A",
            "specialTag": ""
        },
        {
            "count": 1,
            "id": 10,
            "img": "full_tony_s_32",
            "type": 4,
            "name": "Mob Boss Tony Soprano",
            "set": "1A",
            "specialTag": ""
        }
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
        // 0 = Normal
        // 1 = Holo
        // 2 = Shatter
        // 3 = Legendary
        // 4 = Full Art
        // 5 = Special Full Art
        // 6 = GOLD
        // 7 = RAINBOW

        {
            "id": 1,
            "set": "1A",
            "img": "derek_f",
            "name": "Derek Fhreebs",
            "rarity_lower": 0,
            "rarity_upper": 4
        },
        {
            "id": 2,
            "set": "1A",
            "img": "big_leo_big_meech",
            "name": "Big Leo & Big Meech",
            "rarity_lower": 0,
            "rarity_upper": 4
        },
        {
            "id": 3,
            "set": "1A",
            "img": "ethan_f",
            "name": "Ethan Forelli",
            "rarity_lower": 0,
            "rarity_upper": 4
        },
        {
            "id": 4,
            "set": "1A",
            "img": "harley_s",
            "name": "Harley S",
            "rarity_lower": 0,
            "rarity_upper": 3
        },
        {
            "id": 5,
            "set": "1A",
            "img": "burley_b",
            "name": "Burley Barret",
            "rarity_lower": 0,
            "rarity_upper": 3
        },
        {
            "id": 6,
            "set": "1A",
            "img": "danny_r",
            "name": "Danny Rodriguez",
            "rarity_lower": 0,
            "rarity_upper": 4
        },
        {
            "id": 7,
            "set": "1A",
            "img": "jeremy_s",
            "name": "Jeremy Schlongberg",
            "rarity_lower": 0,
            "rarity_upper": 4
        },
        {
            "id": 8,
            "set": "1A",
            "img": "demon_t",
            "name": "Demon Time Tony",
            "rarity_lower": 0,
            "rarity_upper": 4
        },
        {
            "id": 9,
            "set": "1A",
            "img": "isaiah_s",
            "name": "Isaiah Soprano",
            "rarity_lower": 0,
            "rarity_upper": 4
        },
        {
            "id": 10,
            "set": "1A",
            "img": "full_tony_s_32",
            "name": "Mob Boss Tony Soprano",
            "rarity_lower": 4,
            "rarity_upper": 5
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
        case types.UPDATE_VISIBLE_INVENTORY:
            return {
                ...state,
                visibleCollection: action.payload
            }
        case types.UPDATE_INVENTORY_DATA:
            return {
                ...state,
                inventory: action.payload
            }
        case types.UPDATE_INVENTORY:
            return {
                ...state,
                inventory: action.payload
            }
        default:
            return state;
    }
}

export default cardReducer;