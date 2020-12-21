const BookReducer = (state = {}, action) => {
    switch(action.type){
        case "SELECT_BOOK":
            return {
                ...state,
                Book: action.payload
            }
        default:
            return state
    }
}

export default BookReducer;