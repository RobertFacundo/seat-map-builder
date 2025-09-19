import { useState } from "react";
import { SeatMap } from "@/types";
import { DragEndEvent } from "@dnd-kit/core";
import { validateSeatMap } from "@/services/validation";
import {
    createNewRows,
    deleteSelectedRows,
    deleteSeat,
    toggleRowSelection,
    toggleSeatSelection,
    rotateSelectedRows,
    batchLabelSelectedRows
} from '@/services/mapServices';

export const initialState: SeatMap ={
    rows:[],
    nextYPosition: 50,
    nextRowId: 1,
    nextSeatId:1,
}


export const useSeatMap = () => {
    const [seatMap, setSeatMap] = useState<SeatMap>(initialState);
    const [selectedSeat, setSelectedSeat] = useState<{ rowId: string, seatId: string } | null>(null);

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
            seatMap.nextYPosition
        );

        const ROW_HEIGHT = 50;
        const MARGIN = 20;
        const newYPosition = seatMap.nextYPosition + (rowCount * ROW_HEIGHT) + MARGIN

        setSeatMap((prevMap) => ({
            ...prevMap,
            rows: [...prevMap.rows, ...newRows],
            nextYPosition: newYPosition,
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

        console.log(row, 'row')

        if (seat?.isSelected) {
            setSelectedSeat({ rowId, seatId });
        } else {
            setSelectedSeat(null);
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, delta } = event;
        const rowId = active.id as string;
        const dx = delta.x;
        const dy = delta.y;

        const updatedRows = seatMap.rows.map(row => {
            if (row.id === rowId) {
                return {
                    ...row,
                    x: row.x + dx,
                    y: row.y + dy,
                };
            }

            return row;
        });

        setSeatMap({ ...seatMap, rows: updatedRows });
    }


    const handleRotateSelected = (newRotation: number) => {
        setSeatMap(rotateSelectedRows(seatMap, newRotation))
    };

    const handleBatchLabeling = (baseLabel: string, start: number, newColor: string) => {
        setSeatMap(batchLabelSelectedRows(seatMap, baseLabel, start, newColor))
    };

    const handleNewMap = () => {
        setSeatMap(initialState);
    };

    const handleExport = () => {
        const mapData = JSON.stringify(seatMap, null, 2);

        const filename = window.prompt('Ingrese un nombre para el mapa:', 'mi_mapa');
        if (!filename) {
            return;
        }

        const blob = new Blob([mapData], { type: 'application/json' });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}.json`;

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleImport = (file:File)=>{
        const reader = new FileReader();

        reader.onload = (event)=>{
            try{
                const importedMap = JSON.parse(event.target?.result as string);

                console.log(importedMap, 'log del mapa imp  ortado')

                if(validateSeatMap(importedMap)){
                    setSeatMap(importedMap);
                }else{
                    alert('Error: El archivo JSON no es un mapa de asientos válido');
                }
            }catch(error){
                alert('Error al leer el archivo. Asegúrate de que es un JSON válido.');
            }
        };

        reader.readAsText(file);
    }


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
        handleNewMap,
        handleExport,
        handleImport
    }
}