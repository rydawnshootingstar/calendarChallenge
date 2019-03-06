import {CALENDAR} from '../actions/types';

/*
    -empty string values for each day-timeslot pair
    -these values correspond directly to those in Calendar.js - if you change them here, change them there
*/
const DEFAULT_CALENDAR = {
    Monday: {
        '9-10 AM': {name: '', phone: ''},
        '10-11 AM': {name: '', phone: ''},
        '11 AM-12 PM': {name: '', phone: ''},
        '12-1 PM': {name: '', phone: ''},
        '1-2 PM': {name: '', phone: ''},
        '2-3 PM': {name: '', phone: ''},
        '3-4 PM': {name: '', phone: ''},
        '4-5 PM': {name: '', phone: ''}
    },
    Tuesday: {
        '9-10 AM': {name: '', phone: ''},
        '10-11 AM': {name: '', phone: ''},
        '11 AM-12 PM': {name: '', phone: ''},
        '12-1 PM': {name: '', phone: ''},
        '1-2 PM': {name: '', phone: ''},
        '2-3 PM': {name: '', phone: ''},
        '3-4 PM': {name: '', phone: ''},
        '4-5 PM': {name: '', phone: ''}
    },
    Wednesday: {
        '9-10 AM': {name: '', phone: ''},
        '10-11 AM': {name: '', phone: ''},
        '11 AM-12 PM': {name: '', phone: ''},
        '12-1 PM': {name: '', phone: ''},
        '1-2 PM': {name: '', phone: ''},
        '2-3 PM': {name: '', phone: ''},
        '3-4 PM': {name: '', phone: ''},
        '4-5 PM': {name: '', phone: ''}
    },
    Thursday: {
        '9-10 AM': {name: '', phone: ''},
        '10-11 AM': {name: '', phone: ''},
        '11 AM-12 PM': {name: '', phone: ''},
        '12-1 PM': {name: '', phone: ''},
        '1-2 PM': {name: '', phone: ''},
        '2-3 PM': {name: '', phone: ''},
        '3-4 PM': {name: '', phone: ''},
        '4-5 PM': {name: '', phone: ''}
    },
    Friday: {
        '9-10 AM': {name: '', phone: ''},
        '10-11 AM': {name: '', phone: ''},
        '11 AM-12 PM': {name: '', phone: ''},
        '12-1 PM': {name: '', phone: ''},
        '1-2 PM': {name: '', phone: ''},
        '2-3 PM': {name: '', phone: ''},
        '3-4 PM': {name: '', phone: ''},
        '4-5 PM': {name: '', phone: ''}
    },
    Saturday: {
        '9-10 AM': {name: '', phone: ''},
        '10-11 AM': {name: '', phone: ''},
        '11 AM-12 PM': {name: '', phone: ''},
        '12-1 PM': {name: '', phone: ''},
        '1-2 PM': {name: '', phone: ''},
        '2-3 PM': {name: '', phone: ''},
        '3-4 PM': {name: '', phone: ''},
        '4-5 PM': {name: '', phone: ''}
    },
    Sunday: {
        '9-10 AM': {name: '', phone: ''},
        '10-11 AM': {name: '', phone: ''},
        '11 AM-12 PM': {name: '', phone: ''},
        '12-1 PM': {name: '', phone: ''},
        '1-2 PM': {name: '', phone: ''},
        '2-3 PM': {name: '', phone: ''},
        '3-4 PM': {name: '', phone: ''},
        '4-5 PM': {name: '', phone: ''}
    }
}


const calendarReducer = (state=DEFAULT_CALENDAR, action)=> {
    const {day, slot, name, phone} = action;
    switch(action.type){

        case CALENDAR.UPDATE: 
            return {
                ...state, 
                [day]: {...state[day], [slot]: {
                    ...state[slot], name, phone}}
            };

        default: return state;
    }
}

export default calendarReducer;