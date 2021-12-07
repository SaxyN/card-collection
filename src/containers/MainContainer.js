import React from 'react';
import Header from "../components/Header/Header";

const MainContainer = () => {

    return (
        <div>
            <Header />
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                Main Container Here
            </div>
        </div >
    )

}

export default MainContainer;