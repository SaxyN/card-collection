import CARD_BACK from "../../assets/card_back.png";
import CARD_TEMPLATE from "../../assets/card_template.png";
import PACK_DESIGN2 from "../../assets/pack_design2.png";
import PACK_DESIGN3 from "../../assets/pack_design3.png";

import { Fragment } from "react";
import { makeStyles } from "@mui/styles";
const styles = makeStyles((theme) => ({
    small: {
        width: "135.125px", height: "262.2px",
    },
    large: {
        width: "270.25px", height: "525px",
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
        default:
            return <Fragment />
    }
}

export default ImageHandler;