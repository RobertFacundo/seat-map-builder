import { useState } from "react";
import { SeatMap } from "@/types";
import {
    createNewRows,
    deleteSelectedRows,
    deleteSeat,
    toggleRowSelection,
    toggleSeatSelection,
} from '@/services/mapServices';

export const useSeatMap = () => {
    const [seatMap, setSeatMap] = useState<SeatMap>({ rows: [] });
    const [selectedSeat, setSelectedSeat] = useState<{ rowId: string, seatId: string } | null>(null)

    const handleCreateRows = (rowCount: number, seatsPerRow: number, section: string, color: string) => {
        const startingIndex = seatMap.rows.length;
        const newRows = createNewRows(rowCount, seatsPerRow, section, color, startingIndex);
        setSeatMap((prevMap) => ({
            ...prevMap,
            rows: [...prevMap.rows, ...newRows],
        }));
    };

    const handleDeleteSelected = () => {
        const confirmation = window.confirm('¿Estás seguro que quieres eliminar las filas seleccionadas?');
        if (confirmation) {
            setSeatMap(deleteSelectedRows(seatMap));
        }
    };

    const handleDeleteSeat = () => {
        if (selectedSeat) {
            const confirmation = window.confirm('¿Estás seguro que quieres eliminar este asiento');
            if (confirmation) {
                setSeatMap(deleteSeat(seatMap, selectedSeat.rowId, selectedSeat.seatId));
                setSelectedSeat(null)
            }
        } else {
            alert('Por favor, selecciona un asiento para eliminar')
        }
    };

    const handleToggleRow = (rowId: string) => {
        setSeatMap(toggleRowSelection(seatMap, rowId));
    };

    const handleToggleSeat = (rowId: string, seatId: string) => {
        const updatedMap = toggleSeatSelection(seatMap, rowId, seatId);
        setSeatMap(updatedMap);


        const row = updatedMap.rows.find(r => r.id === rowId);
        const seat = row?.seats.find(s => s.id === seatId);

        console.log(row,'row')

        if (seat?.isSelected) {
            setSelectedSeat({ rowId, seatId });
        } else {
            setSelectedSeat(null);
        }
    };

    return {
        seatMap,
        handleCreateRows,
        handleDeleteSelected,
        handleDeleteSeat,
        handleToggleRow,
        handleToggleSeat,
    }
}