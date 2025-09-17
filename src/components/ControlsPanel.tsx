import CreateRowsForm from "./CreateRowsForm";
import BatchLabelingForm from "./BatchLabelingForm";

interface ControlsPanelProps {
    onCreateRows: (rowCount: number, seatsPerRow: number) => void;
    onDeleteRows: () => void;
    onDeleteSeat: ()=> void;
    onBatchLabelingRows: (baseLabel: string, start: number) => void;
    onBatchLabelingSeats: (baseLabel: string, start: number) => void;
}

const ControlsPanel = ({
    onCreateRows,
    onDeleteRows,
    onDeleteSeat,
    onBatchLabelingRows,
    onBatchLabelingSeats,
}: ControlsPanelProps) => {
    return (
        <div>
            <h2>Controles</h2>
            <CreateRowsForm onCreateRows={onCreateRows} />
            <hr />
            <button onClick={onDeleteRows}>Eliminar Filas seleccionadas</button>
            <button onClick={onDeleteSeat}>Eliminar asiento seleccionado</button>
            <hr />
            <BatchLabelingForm
                onSubmit={onBatchLabelingRows}
                title="Etiquetado de filas"
                labelPlaceholder="Etiqueta base (ej. Platea)"
            />
            <hr />

            <BatchLabelingForm
                onSubmit={onBatchLabelingSeats}
                title="Etiquetado de Asientos"
                labelPlaceholder="Etiqueta base (ej. A)"
            />
        </div>
    );
};

export default ControlsPanel