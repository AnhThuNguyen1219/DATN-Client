export const selectUser = (User) => {
    return {
        type: 'SELECT_USER',
        payload: User
    }
}