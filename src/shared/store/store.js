import { createStore } from 'redux';
import { SHOW_PAGE, SET_NICKNAME } from './modules';

const defaultState = {
    nickname: null,
    page: 'login'
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
        default:
            return state
    }
}

export default createStore(reducer);