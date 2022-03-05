import CARD_BACK from "../../assets/card_back.png";
// import CARD_TEMPLATE from "../../assets/card_template.png";
import PACK_DESIGN2 from "../../assets/pack_design2.png";
import PACK_DESIGN3 from "../../assets/pack_design3.png";
// import FULL_VIKTOR_FROST from "../../assets/VIKTOR_FROST_HYPER.png";

import GREEN_FRONT from "../CardItem/CardAssets/green_front.png";
import BLUE_FRONT from "../CardItem/CardAssets/blue_front.png";

// ==== SET 1A ====
// 1 DEREK_F
import DEREK_F from "../CardItem/CardAssets/derek_f.png";
// 2 BIG_L_M
import BIG_L_M from "../CardItem/CardAssets/big_leo_big_meech.png";
// 2 ETHAN_F
import ETHAN_F from "../CardItem/CardAssets/ethan_f.png";
// 4 HARLEY_S
import HARLEY_S from "../CardItem/CardAssets/harley_s.png";
// 4 BURLEY_B
import BURLEY_B from "../CardItem/CardAssets/burley_b.png";
// 6 DANNY_R
import DANNY_R from "../CardItem/CardAssets/danny_r.png";

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

const ImageHandler = ({ name, imageStyle, size }) => {
    const classes = styles();
    // console.log(imageStyle);

    switch (name) {
        case "card_back":
            return <img src={CARD_BACK} alt="card" className={size === "l" ? classes.large : classes.small} />
        // case "card_template":
        //     return <img src={CARD_TEMPLATE} alt="card" className={size === "l" ? classes.large : classes.small} />
        case "pack_design2":
            return <img src={PACK_DESIGN2} alt="pack" className={size === "l" ? classes.large : classes.small} />
        case "pack_design3":
            return <img src={PACK_DESIGN3} alt="pack" className={size === "l" ? classes.large : classes.small} />
        // case "green_front":
        //     // return <img src={GREEN_FRONT} alt="pack" className={size === "l" ? classes.large : classes.small} />
        //     return GREEN_FRONT;
        // case "blue_blue":
        //     return <img src={BLUE_FRONT} alt={name} />;
        // return <img src={BLUE_FRONT} alt="pack" className={size === "l" ? classes.large : classes.small} />
        // case "full_victor_frost":
        // return <img src={FULL_VIKTOR_FROST} alt="pack" className={size === "l" ? classes.large : classes.small} />

        // ==== SET 1A ====

        // 1 DEREK_F
        case "derek_f":
            return <img src={DEREK_F} alt={name} style={imageStyle} />;
        // 2 Big_L_M
        case "big_leo_big_meech":
            return <img src={BIG_L_M} alt={name} style={imageStyle} />;
        // 2 ETHAN_F
        case "ethan_f":
            return <img src={ETHAN_F} alt={name} style={imageStyle} />;
        // 4 HARLEY_S
        case "harley_s":
            return <img src={HARLEY_S} alt={name} style={imageStyle} />;
        // 4 BURLEY_B
        case "burley_b":
            return <img src={BURLEY_B} alt={name} style={imageStyle} />;
        // 6 DANNY_R
        case "danny_r":
            return <img src={DANNY_R} alt={name} style={imageStyle} />;
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