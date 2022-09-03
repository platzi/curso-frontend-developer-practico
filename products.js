export let container = document.querySelector('.cards-container');
export const API = 'https://api.escuelajs.co/api/v1';

export function fetchData(url) {
    return fetch(url);
}