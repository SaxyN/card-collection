import "./Base.scss";
import { AuthProvider } from "./firebase/Authenticator";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux Stuff
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from './store/index';


// All Imported Containers / Components
import MainContainer from "./containers/MainContainer";
import PrivateRoute from "./firebase/PrivateRoute";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";
import AccountDetails from "./components/SignUp/AccountDetails";
import InventoryContainer from "./containers/InventoryContainer";
import PacksContianer from "./containers/PacksContainer";
import OpenPackContainer from "./containers/OpenPackContainer";
import ShowCaseContainer from "./containers/ShowCaseContainer";
import TestContainer from "./containers/TestContainer";

const middle = [thunk, logger];
const store = createStore(combineReducers, applyMiddleware(...middle));

function Base() {

    return (
        <AuthProvider>
            <Provider store={store}>
                <Router>
                    <PrivateRoute exact path={"/"} component={InventoryContainer} />
                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="/signup" component={SignUpContainer} />
                    <Route exact path="/signup/account-details" component={AccountDetails} />
                    <Route exact path="/inventory" component={InventoryContainer} />
                    <Route exact path="/showcase" component={ShowCaseContainer} />
                    <Route path="/packs" component={PacksContianer} />
                    <Route exact path="/openpack" component={OpenPackContainer} />
                    <Route exact path="/test" component={TestContainer} />
                </Router>
            </Provider>
        </AuthProvider>
    )
}

export default Base;