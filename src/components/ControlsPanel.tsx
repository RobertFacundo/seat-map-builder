import CreateRowsForm from "./CreateRowsForm";
import RowActions from './RowActions'
import RowRotation from "./RowRotation";
import BatchLabelingForm from "./BatchLabelingForm";
import styles from '@/styles/ControlsPanel.module.css'
import { useState } from "react";

interface ControlsPanelProps {
    onCreateRows: (rowCount: number, seatsPerRow: number, section: string, color: string) => void;
    onDeleteRows: () => void;
    onDeleteSeat: () => void;
    onRotateRows: (rotation: number) => void;
    onBatchLabelingRows: (baseLabel: string, start: number) => void;
}

const ControlsPanel = ({
    onCreateRows,
    onDeleteRows,
    onDeleteSeat,
    onRotateRows,
    onBatchLabelingRows
}: ControlsPanelProps) => {
    return (
        <div className={styles.controlsContainer}>
            <CreateRowsForm onCreateRows={onCreateRows} />
            <hr />
            <RowActions onDeleteRows={onDeleteRows} onDeleteSeat={onDeleteSeat} />
            <hr />
            <RowRotation onRotateRows={onRotateRows} />
            <hr />
            <BatchLabelingForm
                onSubmit={onBatchLabelingRows}
                title="Etiquetado rápido de filas"
                labelPlaceholder="Etiqueta Base (ej. Platea 1..N, A1..A10).)"
            />
        </div>
    );
};

export default ControlsPanel