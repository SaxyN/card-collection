import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImageHandler from "../../ImageHandler/ImageHandler";

const styles = makeStyles((theme) => ({
    missingWrapper: {
        color: "black",
        // backgroundColor: "cyan",
        opacity: 0.4,
        margin: "0 15px 0 15px"
    }
}))
/**
 * 
 * This should only need an image and sizing??? maybe. The wrapper should make it greyed out and non hoverable 
 */
const MissingCard = ({ card }) => {
    const classes = styles();
    return (
        <Box className={classes.missingWrapper}>
            <ImageHandler
                name={card.img}
                imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }}
            />
        </Box>
    )

}

export default MissingCard;