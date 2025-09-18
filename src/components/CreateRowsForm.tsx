import { useCreateRowsForm } from "@/hooks/useCreateRowsForm";
import styles from '@/styles/CreateRowsForm.module.css';
import buttonStyles from '@/styles/Buttons.module.css'

interface CreateRowsFormProps {
    onCreateRows: (rowCount: number, seatPerRow: number, section: string, color: string) => void;
}

const CreateRowsForm = ({ onCreateRows }: CreateRowsFormProps) => {
    const { rowCount, setRowCount, seatsPerRow, setSeatsPerRow, section, setSection, color, setColor, handleSubmit } = useCreateRowsForm();

    return (
        <form onSubmit={(e) => handleSubmit(e, onCreateRows)} className={styles.formContainer}>
            <h2 className={styles.title}>Crear Filas y Asientos</h2>
            <div className={styles.inputGroup}>
                <input
                    type="number"
                    value={rowCount}
                    onChange={(e) => setRowCount(Number(e.target.value))}
                    placeholder="Nro. de filas"
                    className={styles.input}
                />
                <input
                    type="number"
                    value={seatsPerRow}
                    onChange={(e) => setSeatsPerRow(Number(e.target.value))}
                    placeholder="Asientos por fila"
                    className={styles.input}
                />
                <input
                    type="text"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    placeholder="Platea"
                    className={styles.input}
                />
                <input type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Seleccionar Color"
                    className={styles.colorInput}
                />
            </div>
            <button type="submit" className={`${buttonStyles['btn-base']} ${buttonStyles['btn-primary-grad']}`}>Crear</button>
        </form>
    );
};

export default CreateRowsForm;