import { combineReducers } from 'redux';
import users from './users';
import albums from './albums';
import album from './album';


export default combineReducers({
    users, albums, album
})