export interface Position {
  lat: number;
  lng: number;
}

export interface Place {
  name: string;
  position: Position;
  visible: boolean;
}
