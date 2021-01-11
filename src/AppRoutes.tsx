import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/topics/:id/ready" render={() => <GamePage />}>
                </Route>
                <Route path="/result">
                    <ResultPage />
                </Route>
            </Switch>
        </Router>
    )
}
