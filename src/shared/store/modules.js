// constants
export const SHOW_PAGE = 'SHOW_PAGE';

// action creators
export function showPage(page) {
    return {
        type: 'SHOW_PAGE',
        page
    };
}