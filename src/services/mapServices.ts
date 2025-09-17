import { v4 as uuidv4 } from 'uuid';
import { Seat, Row, SeatMap } from '@/types';

export const createNewRows = (rowCount: number, seatsPerRow: number, section: string, color: string, startingIndex: number): Row[] => {
    const newRows: Row[] = [];

    for (let i = 0; i < rowCount; i++) {
        const currentLabelIndex = startingIndex + i + 1;
        const seats: Seat[] = [];
        for (let j = 0; j < seatsPerRow; j++) {
            seats.push({
                id: uuidv4(),
                label: `${String.fromCharCode(65 + startingIndex + i)}${j + 1}`,
                isSelected: false,
            });
        }

        newRows.push({
            id: uuidv4(),
            label: `${currentLabelIndex}`,
            section,
            color,
            seats,
            isSelected: false,
        })
    }
    return newRows;
}

export const deleteSelectedRows = (map: SeatMap): SeatMap => {
    const updatedRows = map.rows.filter((row) => !row.isSelected);
    const reLabeledRows = updatedRows.map((row, index) => ({
        ...row,
        label: `${index + 1}`
    }))

    return { ...map, rows: reLabeledRows };
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
        const isTargetRow = row.id === rowId;
        const targetSeat = row.seats.find(s => s.id === seatId);
        const wasSelected = isTargetRow && targetSeat?.isSelected;

        const updatedSeats = row.seats.map((seat) => {
            if (seat.id === seatId && wasSelected) {
                return { ...seat, isSelected: false };
            }

            return {
                ...seat,
                isSelected: seat.id === seatId,
            };
        });
        return { ...row, seats: updatedSeats };
    });
    return { ...map, rows: updatedRows };
};

export const deleteSeat = (map: SeatMap, rowId: string, seatId: string): SeatMap => {
    const updatedRows = map.rows.map((row) => {
        if (row.id === rowId) {
            const remainingSeats = row.seats.filter((seat) => seat.id !== seatId);
            
            const reLabeledSeats = remainingSeats.map((seat, index)=>({
                ...seat,
                label: `${String.fromCharCode(65 + index)}${index + 1}`
            }))

            return { ...row, seats: reLabeledSeats };
        }
        return row;
    });

    return { ...map, rows: updatedRows };
}



