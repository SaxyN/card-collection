import CARD_BACK from "../../assets/card_back.png";
import CARD_TEMPLATE from "../../assets/card_template.png";
import PACK_DESIGN2 from "../../assets/pack_design2.png";
import PACK_DESIGN3 from "../../assets/pack_design3.png";
import FULL_VIKTOR_FROST from "../../assets/VIKTOR_FROST_HYPER.png";

import GREEN_FRONT from "../CardItem/CardAssets/green_front.png";
import BLUE_FRONT from "../CardItem/CardAssets/blue_front.png";

import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
const styles = makeStyles((theme) => ({
    small: {
        width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%"
    },
    large: {
        width: "100%", height: "100%",
    }
}))

const ImageHandler = ({ name, size }) => {
    const classes = styles();

    switch (name) {
        case "card_back":
            return <img src={CARD_BACK} alt="card" className={size === "l" ? classes.large : classes.small} />
        case "card_template":
            return <img src={CARD_TEMPLATE} alt="card" className={size === "l" ? classes.large : classes.small} />
        case "pack_design2":
            return <img src={PACK_DESIGN2} alt="pack" className={size === "l" ? classes.large : classes.small} />
        case "pack_design3":
            return <img src={PACK_DESIGN3} alt="pack" className={size === "l" ? classes.large : classes.small} />
        case "green_front":
            // return <img src={GREEN_FRONT} alt="pack" className={size === "l" ? classes.large : classes.small} />
            return GREEN_FRONT;
        case "blue_blue":
            return BLUE_FRONT;
        // return <img src={BLUE_FRONT} alt="pack" className={size === "l" ? classes.large : classes.small} />
        case "full_victor_frost":
            return <img src={FULL_VIKTOR_FROST} alt="pack" className={size === "l" ? classes.large : classes.small} />
        default:
            return <Fragment />
    }
}

export function ImageFetcher(imageName) {
    switch (imageName) {
        case "green_front":
            // return <img src={GREEN_FRONT} alt="pack" className={size === "l" ? classes.large : classes.small} />
            return GREEN_FRONT;
        case "blue_blue":
            return BLUE_FRONT;
        default:
            return null;
        // return <img src={BLUE_FRONT} alt="pack" className={size === "l" ? classes.large : classes.small} />
    }
}

export default ImageHandler;