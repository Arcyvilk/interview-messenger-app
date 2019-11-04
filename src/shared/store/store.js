import { createStore } from 'redux';
import { SHOW_PAGE, SET_NICKNAME, OPEN_CONVERSATION } from './modules';

const defaultState = {
    nickname: null,
    page: null,
    conversations: []
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case SHOW_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case SET_NICKNAME: {
            return {
                ...state,
                nickname: action.nickname
            }
        }
        case OPEN_CONVERSATION: {
            return {
                ...state,
                conversations: [ ...state.conversations, action.nickname ]
            }
        }
        default:
            return state
    }
}

export default createStore(reducer);