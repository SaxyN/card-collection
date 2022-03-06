import NormalCard from "../CardItem/NormalCard/NormalCard";
import HoloCard from "../CardItem/HoloCard/HoloCard";
import ShatterCard from "../CardItem/ShatterCard/ShatterCard";
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";

const CardHandler = ({ cardImage, cardType }) => {

    switch (cardType) {
        case 0:
            return <NormalCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
        case 1:
            return <HoloCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
        case 2:
            return <ShatterCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
        case 3:
            return <LegendaryCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
        default:
            return <>Unknown Card Type</>
    }

}

export default CardHandler;