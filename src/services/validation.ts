import {SeatMap} from '@/types';

export const validateSeatMap = (data: unknown): data is SeatMap => {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const hasRows = 'rows' in data && Array.isArray(data.rows);
  const hasNextY = 'nextYPosition' in data && typeof data.nextYPosition === 'number';
  const hasNextRowId = 'nextRowId' in data && typeof data.nextRowId === 'number';
  const hasNextSeatId = 'nextSeatId' in data && typeof data.nextSeatId === 'number';

  return hasRows && hasNextY && hasNextRowId && hasNextSeatId;
};