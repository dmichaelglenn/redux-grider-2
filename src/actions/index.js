export function selectBook(book) {
    //selectBook is an actioncreator, returns an action - object w/ a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
