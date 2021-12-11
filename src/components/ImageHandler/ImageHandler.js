import CARD_BACK from "../../assets/card_back.png";
import CARD_TEMPLATE from "../../assets/card_template.png";

import { Fragment } from "react";

const ImageHandler = ({ name }) => {
    switch (name) {
        case "card_back":
            return <img src={CARD_BACK} alt="card" />
        case "card_template":
            return <img src={CARD_TEMPLATE} alt="card" />
        default:
            return <Fragment />
    }
}

export default ImageHandler;