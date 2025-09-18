import { useBatchLabelingForm } from "@/hooks/useBatchLabelingForm";
import styles from '@/styles/BatchLabelingForm.module.css';
import buttonStyles from '@/styles/Buttons.module.css'

interface BatchLabelingFormProps {
    onSubmit: (baseLabel: string, start: number, color:string) => void;
    title: string;
    labelPlaceholder: string;
}

const BatchLabelingForm = ({ onSubmit, title, labelPlaceholder }: BatchLabelingFormProps) => {
    const { baseLabel, setBaseLabel, batchStart, setBatchStart,color, setColor, handleSubmit } = useBatchLabelingForm();

    return (
        <form onSubmit={(e) => handleSubmit(e, onSubmit)} className={styles.batchLabelingForm}>
            <h3>{title}</h3>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    value={baseLabel}
                    onChange={(e) => setBaseLabel(e.target.value)}
                    placeholder={labelPlaceholder}
                    className={styles.input}
                />
                <input type="number"
                    value={batchStart}
                    onChange={(e) => setBatchStart(Number(e.target.value))}
                    placeholder='Inicio (ej. 1)'
                    className={styles.input}
                />
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Seleccionar Color"
                    className={styles.colorInput}
                />
            </div>
            <button type="submit" className={`${buttonStyles['btn-base']} ${buttonStyles['btn-primary-grad']}`}>Aplicar</button>
        </form>
    );
};

export default BatchLabelingForm;