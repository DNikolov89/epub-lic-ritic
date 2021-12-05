import { SERVER_MAIN_URL } from "../constants";


export const getOne = (genre, bookId) => {
    return fetch(`${SERVER_MAIN_URL}/ebooks/${genre}/${bookId}`)
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const deleteOneBook = (bookId) => {

    fetch(`${SERVER_MAIN_URL}/ebooks/${bookId}/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "text/plain" },
        body: bookId
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
};

export const editBook = (bookData) => {

    return fetch(`${SERVER_MAIN_URL}/ebooks/${bookData._id}/edit`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookData)
    })
        .then(res => res.json())
};

export const vote = (bookId, userId, vote) => {

    return fetch(`${SERVER_MAIN_URL}/ebooks/${bookId}/vote`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ bookId, userId, vote })
    })
        .then(res => res.json())
};

export const getLastTreeBooks = () => {

    return fetch(`${SERVER_MAIN_URL}/ebooks/last-tree-books`)
        .then(res => res.json())
}