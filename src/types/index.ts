export interface Seat{
    id: string;
    label: string;
    isSelected: boolean;
}

export interface Row {
    id: string;
    label: string;
    section: string;
    color:string;
    seats: Seat[];
    isSelected: boolean;
    x: number;
    y: number;
}

export interface SeatMap {
    rows: Row[];
}