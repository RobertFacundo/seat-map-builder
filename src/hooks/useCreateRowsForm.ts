import { useState } from "react";

export const useCreateRowsForm = () => {
    const [rowCount, setRowCount] = useState<number>(1);
    const [seatsPerRow, setSeatsPerRow] = useState<number>(10);
    const [section, setSection] = useState<string>('');
    const [color, setColor] = useState<string>('#4A90E2')

    const handleSubmit = (e: React.FormEvent, callback: (rc: number, spr: number, sec: string, col: string) => void) => {
        e.preventDefault();
        callback(rowCount, seatsPerRow, section, color);
    };
    return {
        rowCount,
        setRowCount,
        seatsPerRow,
        setSeatsPerRow,
        section,
        setSection,
        color,
        setColor,
        handleSubmit
    }
}