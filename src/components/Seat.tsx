import { Seat } from "@/types";
import styles from '@/styles/Seat.module.css'

interface SeatProps {
    seat: Seat;
    rowId: string;
    onToggleSeat: (rowId: string, seatId: string) => void;
    rowColor: string;
    rowSection: string;
    rowLabel: string
}

const SeatComponent = ({ seat, rowId, onToggleSeat, rowColor, rowSection, rowLabel }: SeatProps) => {
    const seatClass = seat.isSelected ? `${styles.seat} ${styles.selected}` : `${styles.seat} ${styles.notSelected}`;
    const sectionDisplay = rowSection || '-';
    const tooltipText = `Asiento: ${seat.label} | Fila: ${rowLabel} | Sección: ${sectionDisplay}`
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onToggleSeat(rowId, seat.id)
            }}
            className={seatClass}
            title={tooltipText}
            style={{ '--row-color': rowColor } as React.CSSProperties}>
        </div>
    );
};

export default SeatComponent;