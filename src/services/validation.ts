import {SeatMap} from '@/types';

export const validateSeatMap = (data: any): data is SeatMap =>{
    return(
        data &&
        Array.isArray(data.rows) &&
        typeof data.nextYPosition === 'number' &&
        typeof data.nextRowId === 'number' &&
        typeof data.nextSeatId === 'number'
    );
};