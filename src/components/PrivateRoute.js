import React from 'react';
import { Redirect, Route } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const authorized = useAuth();

    return (
        <Route
            {...rest}
            render={({location}) =>
                authorized ? (
                    children
                ) : (
                    <Redirect to={{
                        pathname: "/login",
                        state: {from: location.pathname}
                    }}/>
                )
            }
        />
    );
};

export default PrivateRoute;
