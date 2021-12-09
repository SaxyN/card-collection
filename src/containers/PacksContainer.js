import React from 'react';
import Header from "../components/Header/Header";
import PacksFrame from '../components/Packs/PacksFrame';
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";
import PackGenerator from '../components/Packs/PackGenerator';
// import { useSelector } from 'react-redux';
import PackOpener from '../components/Packs/PackOpener';

import OpenPackContainer from './OpenPackContainer';

const PacksContianer = () => {
    let match = useRouteMatch();

    return (
        <div>
            <Header />
            <Switch>
                <Route path={`/packs`} exact component={PacksFrame} />
                <Route path={`${match.path}/packgenerate`} component={PackOpener} />
            </Switch>

        </div>
    )

}

export default PacksContianer;