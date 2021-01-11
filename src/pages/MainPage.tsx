import React, {useCallback} from 'react';
import categories from '../data/categories.json';
import {useHistory} from "react-router";
import {useRecoilState} from "recoil";
import {selectedTopicState} from "../state";

const MainPage: React.FunctionComponent = () => {

    const [selectedTopic, setSelectedTopic] = useRecoilState(selectedTopicState);

    let history = useHistory();

    const onClickTopic = useCallback((category, topic) => () => {
        setSelectedTopic({
            categoryId: category.id,
            categoryName: category.name,
            topicId: topic.id,
            topicName: topic.name,
        })
        history.push(`/topics/${topic.id}/ready`)
    }, [setSelectedTopic, history]);

    return (
        <div className="bg-light">
            <nav className="navbar border-bottom">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Quizle</span>
                </div>
            </nav>
            <div className="container">
                {
                    categories.map((category) => {
                        return (
                            <div key={category.id} className="py-3">
                                <h6 className="fw-bold">{category.name}</h6>
                                <div className="row">
                                    {
                                        category.topics.map((topic) => {
                                            return (
                                                <div key={topic.id} className="col-6 mb-2">
                                                    <div className="bg-white p-3 rounded"
                                                         onClick={onClickTopic(category, topic)}>
                                                        {topic.name}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <footer className="border-top text-center p-3">
                artiveloper@gmail.com
            </footer>
        </div>
    );
};

export default MainPage;
