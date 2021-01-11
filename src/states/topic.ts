import {atom, selector} from "recoil";

export const selectedTopicState = atom({
    key: 'selectedTopicState',
    default: {
        categoryId: null,
        categoryName: '',
        topicId: null,
        topicName: '',
    },
});

export const getSelectedTopicState = selector({
    key: 'getSelectedTopicState',
    get: ({get}) => {
        return get(selectedTopicState);
    }
});
