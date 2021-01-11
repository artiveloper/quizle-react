import React from 'react';
import {useRecoilValue} from "recoil";
import {getSelectedTopicState} from "../states/topic";

const GameReadyPage: React.FunctionComponent = () => {

    const selectedTopic = useRecoilValue(getSelectedTopicState);

    return (
        <div>
            <p>GamePage.</p>
            <p><b>{selectedTopic.categoryName}</b> 카테고리의 <b>{selectedTopic.topicName}</b>를 선택하셨습니다.</p>
        </div>
    );
};

export default GameReadyPage;
