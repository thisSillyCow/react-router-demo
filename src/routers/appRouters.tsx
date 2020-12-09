import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import TabBar from "../pages/tabBar";
import Pan from "../pages/pan"
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={TabBar} >
            </Route>
            <Route exact path="/pan" component={Pan} />
        </Switch>
    </HashRouter>
);
export default BasicRoute;
