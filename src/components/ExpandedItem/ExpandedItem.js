import { Card, Button, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    expandedDiv: {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "20%",
        left: "40%"
    },
    expandedOuter: {
        width: "500px",
        height: "1500px",

    }
}))

const ExpandedItem = ({ open, cardType, cardCount }) => {
    const classes = useStyles();

    return (
        <Fade in={open} timeout={200}>
            <div className={classes.expandedDiv}>
                <Card className={classes.expandedOuter}>
                    {cardCount + " " + cardType}
                </Card>
            </div>
        </Fade>
    )
}

export default ExpandedItem;