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
    handleDragEnd,
    handleRotateSelected,
    handleBatchLabeling,
    handleNewMap
  } = useSeatMap();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.controlsPanel}>
        <ControlsPanel
          onCreateRows={handleCreateRows}
          onBatchLabelingRows={handleBatchLabeling}
          onDeleteRows={handleDeleteSelected}
          onDeleteSeat={handleDeleteSeat}
          onRotateRows={handleRotateSelected}
          onNewMap={handleNewMap}
        />
      </div>
      <div className={styles.seatMapWrapper}>
        <h1>Seat Map Builder</h1>
        <SeatMapComponent
          seatMap={seatMap}
          onToggleRow={handleToggleRow}
          onToggleSeat={handleToggleSeat}
          handleDragEnd={handleDragEnd}
        />
      </div>
    </div>
  );
}
