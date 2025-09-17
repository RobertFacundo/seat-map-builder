import { useState } from "react";
import { SeatMap } from "@/types";
import {
    createNewRows,
    deleteSelectedRows,
    deleteSelectedSeats,
    toggleRowSelection,
    toggleSeatSelection,
    applyBatchLabelingToRows,
    applyBatchLabelingToSeats,
} from '@/services/mapServices';

export const useSeatMap = ()=>{
    const [seatMap, setSeatMap] = useState<SeatMap>({rows: []});

    const handleCreateRows =(rowCount: number, seatsPerRow: number, section: string, color: string)=>{
        const startingIndex = seatMap.rows.length;
        const newRows = createNewRows(rowCount, seatsPerRow, section, color, startingIndex);
        setSeatMap((prevMap)=>({
            ...prevMap,
            rows:[...prevMap.rows, ...newRows],
        }));
    };

    const handleDeleteSelected = ()=>{
        const confirmation = window.confirm('¿Estás seguro que quieres eliminar las filas seleccionadas?');
        if(confirmation){
            setSeatMap(deleteSelectedRows(seatMap));
        }
    };

    const handleDeleteSeat = ()=>{
        setSeatMap(deleteSelectedSeats(seatMap))
    };

    const handleToggleRow = (rowId: string)=>{
        setSeatMap(toggleRowSelection(seatMap, rowId));
    };

    const handleToggleSeat = (rowId: string, seatId: string)=>{
        setSeatMap(toggleSeatSelection(seatMap, rowId, seatId));
    };

    const handleBatchLabelingRows = (baseLabel: string, start: number)=>{
        setSeatMap(applyBatchLabelingToRows(seatMap, baseLabel, start))
    }

    const handleBatchLabelingSeats = (baseLabel: string, start:number)=>{
        setSeatMap(applyBatchLabelingToSeats(seatMap, baseLabel, start));
    };

    return{
        seatMap,
        handleCreateRows,
        handleDeleteSelected,
        handleDeleteSeat,
        handleToggleRow,
        handleToggleSeat,
        handleBatchLabelingRows,
        handleBatchLabelingSeats
    }
}