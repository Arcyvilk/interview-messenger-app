// constants
export const SET_NICKNAME = 'SET_NICKNAME';
export const OPEN_CONNECTIONS = 'OPEN_CONNECTIONS';
export const ACTIVE_CONVERSATION = 'ACTIVE_CONVERSATION';
export const NEW_MESSAGE = 'NEW_MESSAGE';

// action creators
export function setNickname(nickname) {
    return {
        type: 'SET_NICKNAME',
        nickname
    };
}

export function openConnections(remoteId, connection) {
    return {
        type: 'OPEN_CONNECTIONS',
        remoteId,
        connection
    }
}

export function activeConversation(connection) {
    return {
        type: 'ACTIVE_CONVERSATION',
        connection
    };
}

export function newMessage(message, connection) {
    return {
        type: 'NEW_MESSAGE',
        message,
        connection
    }
}