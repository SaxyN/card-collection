import React from "react";
import NormalCard from "../CardItem/NormalCard/NormalCard";
import HoloCard from "../CardItem/HoloCard/HoloCard";
import ShatterCard from "../CardItem/ShatterCard/ShatterCard";
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";
import FullArtCard from "../CardItem/FullArtCard/FullArtCard";
import FullArtCardSpecial from "../CardItem/FullArtCardSpecial/FullArtCardSpecial";
import GoldCard from "../CardItem/GoldCard/GoldCard";
import RainbowCard from "../CardItem/RainbowCard/RainbowCard";

const cardSizes = {
    "normal": { width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" },
    "medium": { width: "315px", height: "442.5px", borderRadius: "5% / 3.5%" },
    "large": { width: "420px", height: "590px", borderRadius: "5% / 3.5%" }
}

const CardHandler = ({ cardImage, cardType, sizeTag, specialTag }) => {

    function getStyle(tag) {
        if (tag === 0) return cardSizes.normal
        if (tag === 1) return cardSizes.medium
        if (tag === 2) return cardSizes.large
        else return cardSizes.normal
    }
    switch (cardType) {
        case 0:
            return <NormalCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        case 1:
            return <HoloCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        case 2:
            return <ShatterCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        case 3:
            return <LegendaryCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        case 4:
            return <FullArtCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        case 5:
            return <FullArtCardSpecial imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        case 6:
            return <GoldCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        case 7:
            return <RainbowCard imageFace={cardImage} imageStyle={getStyle(sizeTag)} sizeTag={sizeTag} specialTag={specialTag} />
        default:
            return <>Unknown Card Type</>
    }

}

export default CardHandler;