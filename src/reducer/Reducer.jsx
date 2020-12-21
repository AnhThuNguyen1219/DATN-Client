import UserReducer from './UserReducer'
import BookReducer from './BookReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers(
    {
        UserReducer,
        BookReducer,
    }
);

export default allReducers;