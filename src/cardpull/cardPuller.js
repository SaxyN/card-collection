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

function getNormalCard() {
    var normalCards = LootData.normal_cards
    const random = Math.floor(Math.random() * normalCards.length);
    return normalCards[random];
}

function getFullArtCard() {
    var fullArtCards = LootData.full_art_cards
    const random = Math.floor(Math.random() * fullArtCards.length);
    return fullArtCards[random];
}

function getGoldCard() {
    var goldCards = LootData.gold_cards
    const random = Math.floor(Math.random() * goldCards.length);
    return goldCards[random];
}

function getRainbowCard() {
    var rainbowCards = LootData.rainbow_cards
    const random = Math.floor(Math.random() * rainbowCards.length);
    return rainbowCards[random];
}

function getRandomType(randomNumber) {
    var LootTable = LootData.chances;

    for (var i = 0; i < LootTable.length; i++) {
        if (randomNumber >= LootTable[i].lower && randomNumber < LootTable[i].upper) {
            return LootTable[i].type;
        }
    }
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

    let holo, epic, legendary, gold = false;
    if (packType === "holo") holo = true;
    if (packType === "epic") epic = true;
    if (packType === "legendary") legendary = true;
    if (packType === "gold") gold = true;


    let newPack = [];
    var LootTable = LootData.chances;
    var v, i, j;
    var randomNumber = 0;
    var type = 0;
    var card = null;

    for (j = 0; j < packSize; j++) {
        if (holo) {
            card = getNormalCard();
            newPack.push({ type: 1, id: card.id, img: card.img, name: card.name, set: packSet });
            holo = false;
            continue;
        }
        if (epic) {
            card = getNormalCard();
            newPack.push({ type: 2, id: card.id, img: card.img, name: card.name, set: packSet });
            epic = false;
            continue;
        }
        if (legendary) {
            card = getNormalCard();
            newPack.push({ type: 3, id: card.id, img: card.img, name: card.name, set: packSet });
            legendary = false;
            continue;
        }
        if (gold) {
            card = getGoldCard();
            newPack.push({ type: 6, id: card.id, img: card.img, name: card.name, set: packSet });
            gold = false;
            continue;
        }
        randomNumber = Math.floor(Math.random() * 10000);
        type = getRandomType(randomNumber);

        switch (type) {
            case 0: // Normal
                card = getNormalCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
            case 1: // Holo
                card = getNormalCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
            case 2: // Epic
                card = getNormalCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
            case 3: // Legendary
                card = getNormalCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
            case 4: // Full Art
                card = getFullArtCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
            case 5: // Full Art Special
                card = getFullArtCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
            case 6: // Gold
                card = getGoldCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
            default: // Rainbow
                card = getRainbowCard()
                newPack.push({ type: type, id: card.id, img: card.img, name: card.name, set: packSet })
                continue
        }

    }

    if (newPack.length !== packSize) {
        console.log("%cBAD PACK GENERATION", "color:red");
        newPack = generatePack(packType, packSize);
    } else { // otherwise log successful card pack pull
        console.log("%cNEW PACK GENERATION", "color:green");
        newPack = shuffle(newPack);
        console.log(newPack);
        return newPack;
    }
    // for (j = 0; j < packSize; j++) {
    //     randomNumber = Math.floor(Math.random() * 10000)
    //     var card = generateCardFromSet(packSet, cardPool)
    //     // Check for specialty cards first
    //     if (holo && card.rarity_lower >= 1 && card.rarity_upper < 4) {
    //         newPack.push({ type: 1, id: card.id, img: card.img, name: card.name, set: packSet });
    //         holo = false;
    //         continue;
    //     }
    //     if (epic && card.rarity_lower >= 2 && card.rarity_upper < 4) {
    //         newPack.push({ type: 2, id: card.id, img: card.img, name: card.name, set: packSet });
    //         epic = false;
    //         continue;
    //     }
    //     if (legendary && card.rarity_lower >= 3 && card.rarity_upper < 4) {
    //         newPack.push({ type: 3, id: card.id, img: card.img, name: card.name, set: packSet });
    //         legendary = false;
    //         continue;
    //     }
    //     // otherwise fetch a random normal card
    //     randomNumber = Math.floor(Math.random() * 10000);
    //     for (i = 0; i < LootTable.length; i++) {
    //         v = LootTable[i]
    //         console.log("Trying to pair: ", v.type, "[ ", card.rarity_lower, ", ", card.rarity_upper, " ]");
    //         if ((randomNumber <= v.upper && randomNumber >= v.lower) && (v.type >= card.rarity_lower && v.type < card.rarity_upper)) {
    //             newPack.push({ type: v.type, id: card.id, img: card.img, name: card.name, set: packSet });
    //             break;
    //         } else {
    //             card = generateCardFromSet(packSet, cardPool);
    //         }
    //     }
    // }
    // // alert if we somehow generate a bad length card pull

}

/**
 * Pulls random card from specified set
 * @param {string} packSet - Set String ie. "1A"
 * @param {array} cardPool - Array of card objects
 * @returns {object} Card Object
 */
export function generateCardFromSet(packSet, cardPool) {
    const randomCard = randomSelect(cardPool);
    return randomCard;
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