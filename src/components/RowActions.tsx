import buttonStyles from '@/styles/Buttons.module.css';
import styles from '@/styles/RowActions.module.css'

interface RowActionsProps {
    onDeleteRows: () => void;
    onDeleteSeat: () => void;
}

const RowActions = ({ onDeleteRows, onDeleteSeat }: RowActionsProps) => {
    return (
        <div className={styles.buttonGroup}>
            <button
                onClick={onDeleteRows}
                className={`${buttonStyles['btn-base']} ${buttonStyles['btn-delete-grad']}`}
            >
                Eliminar Filas seleccionadas
            </button>
            <button
                onClick={onDeleteSeat}
                className={`${buttonStyles['btn-base']} ${buttonStyles['btn-delete-grad']}`}
            >
                Eliminar asiento seleccionado
            </button>
        </div>
    )
}

export default RowActions;
