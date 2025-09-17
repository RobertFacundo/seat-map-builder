'use client';

import ControlsPanel from "@/components/ControlsPanel";
import SeatMapComponent from "@/components/SeatMap";
import { useSeatMap } from "@/hooks/useSeatMap";
import styles from './page.module.css'

export default function Home() {
  const {
    seatMap,
    handleCreateRows,
    handleDeleteSelected,
    handleDeleteSeat,
    handleToggleRow,
    handleToggleSeat,
  } = useSeatMap();

  return (
    <div className={styles.mainContainer}>
      <h1>Seat Map Builder</h1>
      <ControlsPanel
        onCreateRows={handleCreateRows}
        onDeleteRows={handleDeleteSelected}
        onDeleteSeat={handleDeleteSeat}
       />
      <div className={styles.seatMapWrapper}>
         <SeatMapComponent
          seatMap={seatMap}
          onToggleRow={handleToggleRow}
          onToggleSeat={handleToggleSeat}
         />
      </div>
    </div>
  );
}
