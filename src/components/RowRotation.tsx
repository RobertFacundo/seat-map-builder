import { useState } from "react";
import styles from '@/styles/ControlsPanel.module.css';

interface RowRotationProps {
    onRotateRows: (rotation: number) => void;
}

const RowRotation = ({ onRotateRows }: RowRotationProps) => {
    const [rotationValue, setRotationValue] = useState(0);

    const handleRotationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRotationValue(Number(e.target.value));
    };

    return (
        <div className={styles.rotateControl}>
            <label>Rotar Filas (en grados):</label>
            <input type="number" value={rotationValue} onChange={handleRotationChange} />
            <button onClick={() => onRotateRows(rotationValue)}>Rotar fila seleccionada</button>
        </div>
    );
};

export default RowRotation;