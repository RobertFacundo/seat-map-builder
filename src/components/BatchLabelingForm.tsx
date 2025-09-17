import { useBatchLabelingForm } from "@/hooks/useBatchLabelingForm";

interface BatchLabelingFormProps {
    onSubmit: (baseLabel: string, start: number) => void;
    title: string;
    labelPlaceholder: string;
}

const BatchLabelingForm = ({ onSubmit, title, labelPlaceholder }: BatchLabelingFormProps) => {
    const { baseLabel, setBaseLabel, batchStart, setBatchStart, handleSubmit } = useBatchLabelingForm();

    return (
        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <h3>{title}</h3>
            <input
                type="text"
                value={baseLabel}
                onChange={(e) => setBaseLabel(e.target.value)}
                placeholder={labelPlaceholder}
            />
            <input type="number" value={batchStart} onChange={(e) => setBatchStart(Number(e.target.value))}
                placeholder='Inicio (ej. 1)'
            />
            <button type="submit">Aplicar</button>
        </form>
    );
};

export default BatchLabelingForm;