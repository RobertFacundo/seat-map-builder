'use client';

import ControlsPanel from "@/components/ControlsPanel";
import SeatMapComponent from "@/components/SeatMap";
import { useSeatMap } from "@/hooks/useSeatMap";

export default function Home() {
  const {
    seatMap,
    handleCreateRows,
    handleDeleteSelected,
    handleDeleteSeat,
    handleToggleRow,
    handleToggleSeat,
    handleBatchLabelingRows,
    handleBatchLabelingSeats
  } = useSeatMap();

  return (
    <div >
      <h1>Seat Map Builder</h1>
      <ControlsPanel
        onCreateRows={handleCreateRows}
        onDeleteRows={handleDeleteSelected}
        onDeleteSeat={handleDeleteSeat}
        onBatchLabelingRows={handleBatchLabelingRows}
        onBatchLabelingSeats={handleBatchLabelingSeats}
       />
       <SeatMapComponent
        seatMap={seatMap}
        onToggleRow={handleToggleRow}
        onToggleSeat={handleToggleSeat}
       />
    </div>
  );
}
