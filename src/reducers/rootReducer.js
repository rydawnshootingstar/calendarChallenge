import { combineReducers } from 'redux';
import calendarReducer from './calendar';


/*
    -using combineReducers allows us to quickly add more in the future
*/

export default combineReducers({
    calendar: calendarReducer
});