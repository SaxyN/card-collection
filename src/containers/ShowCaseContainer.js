import Header from "../components/Header/Header";
import Originals from "../components/ShowCase/Originals/Originals";
import Sets from "../components/ShowCase/Sets/Sets";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
    showCaseMain: {
        width: "100%",
        display: "grid",
        textAlign: "center",
        justifyContent: "center",
    }
}))
const ShowCaseContainer = () => {
    const classes = styles();

    return (
        <div >
            <Header />
            <div className={classes.showCaseMain}>
                <Originals />
                <Sets />
            </div>
        </div>
    )

}

export default ShowCaseContainer;