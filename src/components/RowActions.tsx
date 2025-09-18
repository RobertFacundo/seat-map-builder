import styles from '@/styles/ControlsPanel.module.css';

interface RowActionsProps {
    onDeleteRows: () => void;
    onDeleteSeat: () => void;
}

const RowActions = ({ onDeleteRows, onDeleteSeat }: RowActionsProps) => {
    return (
        <div className={styles.buttonGroup}>
            <button onClick={onDeleteRows} className={`${styles.button} ${styles.deleteButton}`}>Eliminar Filas seleccionadas</button>
            <button onClick={onDeleteSeat} className={`${styles.button} ${styles.deleteButton}`}>Eliminar asiento seleccionado</button>
        </div>
    )
}

export default RowActions;
