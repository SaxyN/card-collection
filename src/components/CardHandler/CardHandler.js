import React, { useState } from "react";
import NormalCard from "../CardItem/NormalCard/NormalCard";
import HoloCard from "../CardItem/HoloCard/HoloCard";
import ShatterCard from "../CardItem/ShatterCard/ShatterCard";
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";

const cardSizes = {
    "normal": { width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" },
    "medium": { width: "315px", height: "442.5px", borderRadius: "5% / 3.5%"},
    "large": { width: "420px", height: "590px", borderRadius: "5% / 3.5%"}
}

const CardHandler = ({ cardImage, cardType, sizeTag }) => {
    // const [cardStyle, setCardStyle] = React.useState({});
    var cardStyle = null;
    console.log(sizeTag);
    switch (cardType) {
        case 0:
            return <NormalCard imageFace={cardImage}
                        imageStyle={
                            sizeTag === 0 ? cardSizes.normal :
                            sizeTag === 1 ? cardSizes.medium :
                            sizeTag === 2 ? cardSizes.large : cardSizes.normal
                        }
                        sizeTag={sizeTag}
                    />
        case 1:
            return <HoloCard imageFace={cardImage}
            imageStyle={
                sizeTag === 0 ? cardSizes.normal :
                sizeTag === 1 ? cardSizes.medium :
                sizeTag === 2 ? cardSizes.large : cardSizes.normal
            }
            sizeTag={sizeTag} />
        case 2:
            return <ShatterCard imageFace={cardImage} 
            imageStyle={
                sizeTag === 0 ? cardSizes.normal :
                sizeTag === 1 ? cardSizes.medium :
                sizeTag === 2 ? cardSizes.large : cardSizes.normal
            }
            sizeTag={sizeTag} />
        case 3:
            return <LegendaryCard imageFace={cardImage}
            imageStyle={
                sizeTag === 0 ? cardSizes.normal :
                sizeTag === 1 ? cardSizes.medium :
                sizeTag === 2 ? cardSizes.large : cardSizes.normal
            }
            sizeTag={sizeTag}
            />
        default:
            return <>Unknown Card Type</>
    }

}

export default CardHandler;