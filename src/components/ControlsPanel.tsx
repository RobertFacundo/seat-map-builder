import CreateRowsForm from "./CreateRowsForm";
import BatchLabelingForm from "./BatchLabelingForm";
import styles from '@/styles/ControlsPanel.module.css'

interface ControlsPanelProps {
    onCreateRows: (rowCount: number, seatsPerRow: number, section: string, color: string) => void;
    onDeleteRows: () => void;
    onDeleteSeat: ()=> void;
}

const ControlsPanel = ({
    onCreateRows,
    onDeleteRows,
    onDeleteSeat,
}: ControlsPanelProps) => {
    return (
        <div className={styles.controlsContainer}>
            <h2>Controles</h2>
            <CreateRowsForm onCreateRows={onCreateRows} />
            <hr />
            <div className={styles.buttonGroup}>
                <button onClick={onDeleteRows} className={`${styles.button} ${styles.deleteButton}`}>Eliminar Filas seleccionadas</button>
                <button onClick={onDeleteSeat} className={`${styles.button} ${styles.deleteButton}`}>Eliminar asiento seleccionado</button>
            </div>
            <hr />
        </div>
    );
};

export default ControlsPanel