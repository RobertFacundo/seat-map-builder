import CreateRowsForm from "./CreateRowsForm";
import RowActions from './RowActions'
import RowRotation from "./RowRotation";
import BatchLabelingForm from "./BatchLabelingForm";
import styles from '@/styles/ControlsPanel.module.css'
import buttonStyles from '@/styles/Buttons.module.css'

interface ControlsPanelProps {
    onCreateRows: (rowCount: number, seatsPerRow: number, section:string, color: string) => void;
    onDeleteRows: () => void;
    onDeleteSeat: () => void;
    onRotateRows: (rotation: number) => void;
    onBatchLabelingRows: (baseLabel: string, start: number, newColor: string) => void;
    onNewMap: () => void;
}

const ControlsPanel = ({
    onCreateRows,
    onDeleteRows,
    onDeleteSeat,
    onRotateRows,
    onBatchLabelingRows,
    onNewMap
}: ControlsPanelProps) => {

    return (
        <div className={styles.controlsContainer}>
            <CreateRowsForm onCreateRows={onCreateRows} />
            <hr/>
            <RowActions onDeleteRows={onDeleteRows} onDeleteSeat={onDeleteSeat} />
            <hr />
            <RowRotation onRotateRows={onRotateRows} />
            <BatchLabelingForm
                onSubmit={onBatchLabelingRows}
                title="Etiquetado rápido de filas"
                labelPlaceholder="Platea-VIP-Campo)"
            />
            <hr  className={styles.separator}/>
            <button onClick={onNewMap} className={`${buttonStyles['btn-base']} ${buttonStyles['btn-primary-grad']}`}>
                Nuevo Mapa
            </button>
        </div>
    );
};

export default ControlsPanel