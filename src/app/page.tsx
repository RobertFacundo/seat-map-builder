'use client';

import ControlsPanel from "@/components/ControlsPanel";
import SeatMap from "@/components/SeatMap";
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
        onHandleDeleteSeat={handleDeleteSeat}
        onBatchLabelingRows={handleBatchLabelingRows}
        onBatchLabelingSeats={handleBatchLabelingSeats}
       />
       <SeatMap
        seatMap={seatMap}
        onToggleRow={handleToggleRow}
        onToggleSeat={handleToggleSeat}
       />
    </div>
  );
}
