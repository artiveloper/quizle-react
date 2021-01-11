import React from 'react';
import {useRouteMatch} from "react-router";

const GamePage: React.FunctionComponent = () => {

    let match = useRouteMatch<{ id: string }>();
    let topic = match.params.id;

    return (
        <div>
            GamePage. topics is {topic}.
        </div>
    );
};

export default GamePage;
