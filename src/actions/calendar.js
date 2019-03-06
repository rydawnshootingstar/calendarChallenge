import {CALENDAR} from './types';

export const updateCalendar =({day, slot, name, phone})=> (dispatch)=> {

    dispatch({
        type: CALENDAR.UPDATE,
        day, slot, name, phone
    });

}