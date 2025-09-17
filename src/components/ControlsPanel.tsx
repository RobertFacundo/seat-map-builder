import CreateRowsForm from "./CreateRowsForm";
import BatchLabelingForm from "./BatchLabelingForm";

interface ControlsPanelProps {
    onCreateRows: (rowCount: number, seatsPerRow: number, section: string, color: string) => void;
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
        </div>
    );
};

export default ControlsPanel