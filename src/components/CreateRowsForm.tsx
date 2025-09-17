import { useCreateRowsForm } from "@/hooks/useCreateRowsForm";

interface CreateRowsFormProps {
    onCreateRows: (rowCount: number, seatPerRow: number) => void;
}

const CreateRowsForm = ({ onCreateRows }: CreateRowsFormProps) => {
    const { rowCount, setRowCount, seatsPerRow, setSeatsPerRow, handleSubmit } = useCreateRowsForm();

    return (
        <form onSubmit={(e) => handleSubmit(e, onCreateRows)}>
            <h3>Crear Filas y Asientos</h3>
            <input
                type="number"
                value={rowCount}
                onChange={(e) => setRowCount(Number(e.target.value))}
                placeholder="Nro. de filas"
            />
            <input
                type="number"
                value={seatsPerRow}
                onChange={(e) => setSeatsPerRow(Number(e.target.value))}
                placeholder="Asientos por fila"
            />
            <button type="submit">Crear</button>
        </form>
    );
};

export default CreateRowsForm;