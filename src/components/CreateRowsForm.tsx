import { useCreateRowsForm } from "@/hooks/useCreateRowsForm";

interface CreateRowsFormProps {
    onCreateRows: (rowCount: number, seatPerRow: number, section: string, color: string) => void;
}

const CreateRowsForm = ({ onCreateRows }: CreateRowsFormProps) => {
    const { rowCount, setRowCount, seatsPerRow, setSeatsPerRow, section, setSection, color, setColor, handleSubmit } = useCreateRowsForm();

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
            <input
                type="text"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                placeholder="Seccion (ej. Platea)"
            />
            <input type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Seleccionar Color"
            />
            <button type="submit">Crear</button>
        </form>
    );
};

export default CreateRowsForm;