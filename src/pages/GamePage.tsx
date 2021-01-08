import React from 'react';
import {useRouteMatch} from "react-router";

const GamePage: React.FunctionComponent = () => {

    let match = useRouteMatch<{ name: string }>();
    let topic = match.params.name;

    return (
        <div>
            GamePage. topics is {topic}.
        </div>
    );
};

export default GamePage;
