import LootData from "./chances.json";

function generateCard(packType) {
    var v, i;
    var LootTable = LootData.chances;
    var randomNumber = Math.floor(Math.random() * 100);
    for (i = 0; i < LootTable.length; i++) {
        v = LootTable[i]

        if (randomNumber <= v.upper && randomNumber >= v.lower) {
            return v.type
        };
        continue;
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

/**
 * Generates a pack of random cards 
 * @param {string} packType - determines guarenteed card pull ie Holo/Shatter/Legendary
 * @param {int} packSize - number of cards in the final pack
 * @param {string} packSet 
 * @param {array} cardPool 
 * @returns {array} - parsed in the pack component
 */
export function generatePack(packType, packSize, packSet, cardPool) {
    console.log("Open Pack Set: " + packSet);

    let holo, epic, legendary = false;
    if (packType === "holo") holo = true;
    if (packType === "epic") epic = true;
    if (packType === "legendary") legendary = true;

    let newPack = [];
    var LootTable = LootData.chances;
    var v, i, j;
    var randomNumber = 0;

    for (j = 0; j < packSize; j++) {
        var card = generateCardFromSet(packSet, cardPool)
        // Check for specialty cards first
        if (holo) {
            newPack.push({ type: 1, id: card.id, img: card.img });
            holo = false;
            continue;
        }
        if (epic) {
            newPack.push({ type: 2, id: card.id, img: card.img });
            epic = false;
            continue;
        }
        if (legendary) {
            newPack.push({ type: 3, id: card.id, img: card.img });
            legendary = false;
            continue;
        }
        // otherwise fetch a random normal card
        randomNumber = Math.floor(Math.random() * 1000);
        for (i = 0; i < LootTable.length; i++) {
            v = LootTable[i]
            if (randomNumber <= v.upper && randomNumber >= v.lower) {
                newPack.push({ type: v.type, id: card.id, img: card.img });
                break;
            };
        }
    }
    // alert if we somehow generate a bad length card pull
    if (newPack.length !== packSize) {
        console.log("%cBAD PACK GENERATION", "color:red");
        newPack = generatePack(packType, packSize);
    } else { // otherwise log successful card pack pull
        console.log("%cNEW PACK GENERATION", "color:green");
        newPack = shuffle(newPack);
        console.log(newPack);
        return newPack;
    }

}

/**
 * Pulls random card from specified set
 * @param {string} packSet - Set String ie. "1A"
 * @param {array} cardPool - Array of card objects
 * @returns {object} Card Object
 */
export function generateCardFromSet(packSet, cardPool) {
    for (var i = 0; i < cardPool.length; i++) {
        // if (cardPool[i][0].set === packSet) {
        const randomCard = randomSelect(cardPool);
        return randomCard;
        // }
    }

    return -1;

}

/**
 * Fetches random item from given list
 * @param {array} itemList 
 * @returns Random item from given list
 */
function randomSelect(itemList) {
    const random = Math.floor(Math.random() * itemList.length);
    return itemList[random];
}

export default generateCard;