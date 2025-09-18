import { Row, Seat } from '@/types';
import SeatComponent from './Seat';
import styles from '@/styles/Row.module.css';
import { useDraggable } from '@dnd-kit/core';

interface RowProps {
    row: Row;
    onToggleRow: (rowId: string) => void;
    onToggleSeat: (rowId: string, seatId: string) => void;
}

const RowComponent = ({ row, onToggleRow, onToggleSeat }: RowProps) => {
    const rowClass = row.isSelected ? `${styles.rowContainer} ${styles.selected}` : `${styles.rowContainer} ${styles.notSelected}`;
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: row.id
    })

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        left: `${row.x}px`,
        top: `${row.y}px`,
        position: 'absolute'
    };


    return (
        <div
            ref={setNodeRef}
            style={{ ...style, position: 'absolute', top: row.y, left: row.x }}
            onClick={() => onToggleRow(row.id)}
            className={rowClass}
        >
            <div
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                className={styles.dragAndDropHandle}
            >
                ⋮
            </div>
            <div className={styles.seatsContainer}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
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