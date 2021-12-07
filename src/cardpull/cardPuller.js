import LootData from "./chances.json";

function generateCard() {
    var v, i;
    var LootTable = LootData.chances;
    // var choice = 0;
    var randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    // var weight = 0;
    for (i = 0; i < LootTable.length; i++) {
        v = LootTable[i]
        // if (randomNumber > v.weight) continue;
        if (randomNumber === v.weight) {
            console.log(v.type);
            return v.type;
        } else if (randomNumber < v.weight && i > 0) {
            console.log(LootTable[i - 1].type);
            return LootTable[i - 1].type;
        } else if (randomNumber < v.weight && i > 0) {
            console.log(LootTable[i].type);
            return LootTable[i].type;
        } else {
            continue;
        }
    }
}

export default generateCard;