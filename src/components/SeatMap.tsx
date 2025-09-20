import { SeatMap} from "@/types";
import Footer from "./Footer";
import styles from '@/styles/SeatMap.module.css'
import RowComponent from "./Row";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

interface SeatMapProps {
    seatMap: SeatMap;
    onToggleRow: (rowId: string) => void;
    onToggleSeat: (rowId: string, seatId: string) => void;
    handleDragEnd: (event: DragEndEvent) => void;
}

const SeatMapComponent = ({ seatMap, onToggleRow, onToggleSeat, handleDragEnd}: SeatMapProps) => {
    return (
       <DndContext onDragEnd={handleDragEnd}>
         <div className={styles.seatMapWrapper}>
             {seatMap.rows.map((row) => (
                 <RowComponent
                     key={row.id}
                     row={row}
                     onToggleRow={onToggleRow}
                     onToggleSeat={onToggleSeat}
                 />
             ))}
             <Footer/>
         </div>
       </DndContext>
    );
};

export default SeatMapComponent;