
export function addArticle(payload) {
    return { type: 'ADD_ARTICLE', payload };
}
export function addScore(scoreToAdd) {
    return { type: 'addScore', scoreToAdd };
}
export function setBoard({newBoard}) {
    return { type: 'setBoard', newBoard };
}
export function setUserName(payload) {
    return { type: 'setUserName', payload };
}

export function getData() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "DATA_LOADED", payload: json });
            });
    };
}