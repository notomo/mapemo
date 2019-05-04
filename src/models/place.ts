export interface Position {
  readonly lat: number;
  readonly lng: number;
}

export interface Place {
  readonly id: string;
  readonly name: string;
  readonly position: Position;
}

export class ViewPlaceImpl implements ViewPlace {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly position: Position,
    public visible: boolean
  ) {}

  public equals(place: Place): boolean {
    return this.id === place.id;
  }
}

export interface ViewPlace {
  readonly id: string;
  readonly name: string;
  readonly position: Position;
  visible: boolean;
  equals(place: Place): boolean;
}
