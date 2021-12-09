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
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function generatePack(packType, packSize) {
    let epic = false;
    if (packType === "pack_2") {
        epic = true;
    }
    let newPack = [];
    var LootTable = LootData.chances;
    var v, i, j;
    var randomNumber = 0;

    for (j = 0; j < packSize; j++) {
        if (epic) {
            newPack.push("shatter");
            epic = false;
            continue;
        }    
        randomNumber = Math.floor(Math.random() * 100);
        for (i = 0; i < LootTable.length; i++) {
            v = LootTable[i]
            
            if (randomNumber <= v.upper && randomNumber >= v.lower) {
                newPack.push(v.type);
            };
        }
    }
    console.log("%cNew Pack Generation", "color:green");
    console.log(newPack);
    newPack = shuffle(newPack);
    console.log(newPack);
}

export default generateCard;