import { Row, Seat } from "@/types";
import styles from '@/styles/Seat.module.css'

interface SeatProps {
    seat: Seat;
    onToggleSeat: (rowId: string, seatId: string) => void;
    row: Row;
}

const SeatComponent = ({ seat, row, onToggleSeat}: SeatProps) => {
    const seatClass = seat.isSelected ? `${styles.seat} ${styles.selected}` : `${styles.seat} ${styles.notSelected}`;
    const sectionDisplay = row.section || '-';
    const tooltipText = `Asiento: ${seat.label} | Fila: ${row.label} | Sección: ${sectionDisplay}`
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onToggleSeat(row.id, seat.id)
            }}
            className={seatClass}
            title={tooltipText}
            style={{ '--row-color': row.color } as React.CSSProperties}>
        </div>
    );
};

export default SeatComponent;