import { createStore } from 'redux';
import { SET_NICKNAME, OPEN_CONNECTIONS, ACTIVE_CONVERSATION, NEW_MESSAGE } from './modules';

const saveMessage = (savedConnections, connection, message) => 
    savedConnections.map(con => {
        if (con.connection.id === connection.id)
            con.messages.push(message);
        return con;
    });

const defaultState = {
    nickname: null,
    connections: [],
    activeConversation: null
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_NICKNAME: {
            return {
                ...state,
                nickname: action.nickname
            }
        }
        case OPEN_CONNECTIONS: {
            return {
                ...state,
                connections: [ ...state.connections, {
                    remoteId: action.remoteId,
                    messages: [],
                    connection: action.connection
                } ]
            }
        }
        case ACTIVE_CONVERSATION: {
            return {
                ...state,
                activeConversation: action.connection
            }
        }
        case NEW_MESSAGE: {
            return {
                ...state,
                connections: [ ...saveMessage(state.connections, action.connection, action.message) ]
            }
        }
        default:
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);