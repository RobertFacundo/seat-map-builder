import { useState } from "react";

export const useCreateRowsForm = ()=>{
    const [rowCount, setRowCount] = useState<number>(1);
    const [seatsPerRow, setSeatsPerRow] = useState<number>(10)

    const handleSubmit = (e: React.FormEvent, callback: (rc: number, spr: number)=> void)=>{
        e.preventDefault();
        callback(rowCount, seatsPerRow);
    };
    return {
        rowCount,
        setRowCount,
        seatsPerRow,
        setSeatsPerRow,
        handleSubmit
    }
}