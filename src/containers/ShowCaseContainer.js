import Header from "../components/Header/Header";
import Originals from "../components/ShowCase/Originals/Originals";
const ShowCaseContainer = () => {
    return (
        <div>
            <Header />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Originals />
            </div>
        </div>
    )

}

export default ShowCaseContainer;