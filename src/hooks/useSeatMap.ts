import { useState} from "react";
import { SeatMap } from "@/types";
import { DragEndEvent } from "@dnd-kit/core";
import {
    createNewRows,
    deleteSelectedRows,
    deleteSeat,
    toggleRowSelection,
    toggleSeatSelection,
    rotateSelectedRows,
    batchLabelSelectedRows
} from '@/services/mapServices';

export const useSeatMap = () => {
    const [seatMap, setSeatMap] = useState<SeatMap>({ rows: [] });
    const [selectedSeat, setSelectedSeat] = useState<{ rowId: string, seatId: string } | null>(null);
    const [nextYPosition, setNextYPosition] = useState(50);

    const handleCreateRows = (
        rowCount: number, 
        seatsPerRow: number, 
        section: string, 
        color: string
    ) => {
        const startingIndex = seatMap.rows.length;
        const newRows = createNewRows(
            rowCount, 
            seatsPerRow, 
            section, 
            color, 
            startingIndex,
            nextYPosition
        );
        setSeatMap((prevMap) => ({
            ...prevMap,
            rows: [...prevMap.rows, ...newRows],
        }));    
        
        const ROW_HEIGHT = 50;
        const MARGIN = 20;
        setNextYPosition(nextYPosition + (rowCount * ROW_HEIGHT) + MARGIN);
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

    const handleDragEnd = (event: DragEndEvent)=>{
        const {active, delta} = event;
        const rowId = active.id as string;
        const dx = delta.x;
        const dy = delta.y;

        const updatedRows = seatMap.rows.map(row =>{
            if(row.id === rowId){
                return {
                    ...row,
                    x: row.x + dx,
                    y: row.y + dy,
                };
            }

            return row;
        });

        setSeatMap({...seatMap, rows: updatedRows});
    }


    const handleRotateSelected = (newRotation: number)=>{
        setSeatMap(rotateSelectedRows(seatMap, newRotation))
    };

    const handleBatchLabeling = (baseLabel: string, start: number)=>{
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setSeatMap(batchLabelSelectedRows(seatMap, baseLabel, start, randomColor))
    };

    const handleNewMap = ()=>{
        setSeatMap({rows: []});
    };


    return {
        seatMap,
        handleCreateRows,
        handleDeleteSelected,
        handleDeleteSeat,
        handleToggleRow,
        handleToggleSeat,
        handleDragEnd,
        handleRotateSelected,
        handleBatchLabeling,
        handleNewMap
    }
}