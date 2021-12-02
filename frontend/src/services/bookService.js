import { SERVER_MAIN_URL } from "../constants";

export const deleteOneBook = (bookId) => {
    fetch(`${SERVER_MAIN_URL}/ebooks/${bookId}/delete`, {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: bookId
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
};