const UserReducer = (state = {}, action) => {
    switch(action.type){
        case "SELECT_USER":
            return {
                ...state,
                User: action.payload
            }
        default:
            return state
    }
}

export default UserReducer;