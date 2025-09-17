import { v4 as uuidv4 } from 'uuid';
import { Seat, Row, SeatMap } from '@/types';

export const createNewRows = (rowCount: number, seatsPerRow: number): Row[] => {
    const newRows: Row[] = [];

    for (let i = 0; i < rowCount; i++) {
        const seats: Seat[] = [];
        for (let j = 0; j < seatsPerRow; j++) {
            seats.push({
                id: uuidv4(),
                label: `A${j + 1}`,
                isSelected: false,
            });
        }

        newRows.push({
            id: uuidv4(),
            label: `Fila${i + 1}`,
            seats,
            isSelected: false,
        })
    }
    return newRows;
}

export const deleteSelectedRows = (map: SeatMap): SeatMap => {
    const updatedRows = map.rows.filter((row) => !row.isSelected);

    return { ...map, rows: updatedRows };
};

export const toggleRowSelection = (map: SeatMap, rowId: string): SeatMap => {
    const updatedRows = map.rows.map((row) =>
        row.id === rowId ? { ...row, isSelected: !row.isSelected } : row
    );
    return { ...map, rows: updatedRows };
};

export const toggleSeatSelection = (
    map: SeatMap,
    rowId: string,
    seatId: string
): SeatMap => {
    const updatedRows = map.rows.map((row) => {
        if (row.id === rowId) {
            const updatedSeats = row.seats.map((seat) =>
                seat.id === seatId ? { ...seat, isSelected: !seat.isSelected } : seat
            );
            return { ...row, seats: updatedSeats };
        }

        return row;
    });
    return { ...map, rows: updatedRows };
};

export const deleteSeat = (map: SeatMap, rowId: string, seatId: string): SeatMap => {
    const updatedRows = map.rows.map((row)=>{
        if(row.id === rowId){
            const updatedSeats = row.seats.filter((seat)=> seat.id !== seatId);

            return {...row, seats: updatedSeats};
        }
        return row;
    });

    return {...map, rows: updatedRows};
}


export const applyBatchLabelingToRows = (
    map: SeatMap,
    baseLabel: string,
    start: number
): SeatMap =>{
    let counter = start;
    const updatedRows = map.rows.map((row)=>{
        if(row.isSelected){
            const newLabel = `${baseLabel} ${counter++}`;
            return {...row, label: newLabel};
        }
        return row
    });

    return{...map, rows: updatedRows};
};

export const applyBatchLabelingToSeats = (
    map: SeatMap,
    baseLabel: string,
    start: number
): SeatMap =>{
    let counter = start;
    const updatedRows = map.rows.map((row)=>{
        const updatedSeats = row.seats.map((seat)=>{
            if(seat.isSelected){
                const newLabel = `${baseLabel} ${counter++}`;
                return {...seat, label: newLabel};
            }
            return seat;
        });
        return {...row, seats: updatedSeats}
    });
    return {...map, rows: updatedRows};
}