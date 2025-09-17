import { SeatMap, Row, Seat } from "@/types";
import RowComponent from "./Row";

interface SeatMapProps {
    seatMap: SeatMap;
    onToggleRow: (rowId: string) => void;
    onToggleSeat: (rowId: string, seatId: string) => void;
}

const SeatMapComponent = ({ seatMap, onToggleRow, onToggleSeat }: SeatMapProps) => {
    return (
        <div>
            {seatMap.rows.map((row) => (
                <RowComponent
                    key={row.id}
                    row={row}
                    onToggleRow={onToggleRow}
                    onToggleSeat={onToggleSeat}
                />
            ))}
        </div>
    );
};

export default SeatMapComponent;