import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login/Login';


function AppRouter() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/">
                    <App/>
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                    <App/>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default AppRouter;
