export const selectBook = (Book) => {
    return {
        type: 'SELECT_BOOK',
        payload: Book
    }
}