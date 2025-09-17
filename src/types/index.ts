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
}

export interface SeatMap {
    rows: Row[];
}