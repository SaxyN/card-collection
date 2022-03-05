import LootData from "./chances.json";

function generateCard(packType) {
    var v, i;
    var LootTable = LootData.chances;
    var randomNumber = Math.floor(Math.random() * 100);
    // console.log(randomNumber);
    for (i = 0; i < LootTable.length; i++) {
        v = LootTable[i]

        if (randomNumber <= v.upper && randomNumber >= v.lower) {
            // console.log(v.type);
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
        if (holo) {
            newPack.push({ type: "holo", id: "156_chupador", img: generateCardFromSet(packSet, cardPool) });
            holo = false;
            continue;
        }
        if (epic) {
            newPack.push({ type: "shatter", id: "156_chupador", img: generateCardFromSet(packSet, cardPool) });
            epic = false;
            continue;
        }
        if (legendary) {
            newPack.push({ type: "legendary", id: "156_chupador", img: generateCardFromSet(packSet, cardPool) });
            legendary = false;
            continue;
        }
        randomNumber = Math.floor(Math.random() * 1000);
        console.log(randomNumber)
        for (i = 0; i < LootTable.length; i++) {
            v = LootTable[i]

            if (randomNumber <= v.upper && randomNumber >= v.lower) {
                newPack.push({ type: v.type, id: "156_chupador", img: generateCardFromSet(packSet, cardPool) });
                break;
            };
        }
    }
    if (newPack.length !== packSize) {
        console.log("%cBAD PACK GENERATION", "color:red");
        newPack = generatePack(packType, packSize);
    } else {
        console.log("%cNew Pack Generation", "color:green");
        newPack = shuffle(newPack);
        console.log(newPack);
        return newPack;
    }

}

export function generateCardFromSet(packSet, cardPool) {
    for (var i = 0; i < cardPool.length; i++) {
        if (cardPool[i][0].set === packSet) {
            // console.log(cardPool[i])
            const randomCard = randomSelect(cardPool[i]);
            return randomCard.img;
        }
    }

    return -1;

}

function randomSelect(itemList) {
    const random = Math.floor(Math.random() * itemList.length);
    return itemList[random];
}

export default generateCard;