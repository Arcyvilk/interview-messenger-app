import { createStore } from 'redux';
import { SHOW_PAGE } from './modules';

const defaultState = {
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
        default:
            return state
    }
}

export default createStore(reducer);