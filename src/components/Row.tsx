import { Row, Seat } from '@/types';
import SeatComponent from './Seat';
import styles from '@/styles/Row.module.css';

interface RowProps {
    row: Row;
    onToggleRow: (rowId: string) => void;
    onToggleSeat: (rowId: string, seatId: string) => void;
}

const RowComponent = ({ row, onToggleRow, onToggleSeat }: RowProps) => {
    const rowClass = row.isSelected ? `${styles.rowContainer} ${styles.selected}` : `${styles.rowContainer} ${styles.notSelected}`;

    return (
        <div onClick={() => onToggleRow(row.id)} className={rowClass}>
            <div className={styles.seatsContainer}>
                {row.seats.map((seat) => (
                    <SeatComponent
                        key={seat.id}
                        rowId={row.id}
                        rowLabel={row.label}
                        seat={seat}
                        onToggleSeat={onToggleSeat}
                        rowColor={row.color}
                        rowSection={row.section}
                    />
                ))}
            </div>
        </div>
    );
};

export default RowComponent;