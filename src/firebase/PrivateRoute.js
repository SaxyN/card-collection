import { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "../firebase/Authenticator";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     console.log("boom")
    // if (user) {
    //     return (
    //         <Route
    //             {...rest}
    //             render={
    //                 <RouteComponent {...rest} />
    //             }
    //         />
    //     )
    // } else {
    //     return (
    //         <Route
    //             {...rest}
    //             render={
    //                 <Redirect to={"/login"} />
    //             }
    //         />
    //     )
    // }
    // })
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (<Redirect to={"/login"} />)
            }
        />
    )

}

export default PrivateRoute;