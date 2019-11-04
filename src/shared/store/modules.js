// constants
export const SHOW_PAGE = 'SHOW_PAGE';
export const SET_NICKNAME = 'SET_NICKNAME';

// action creators
export function showPage(page) {
    return {
        type: 'SHOW_PAGE',
        page
    };
}

export function setNickname(nickname) {
    return {
        type: 'SET_NICKNAME',
        nickname
    };
}