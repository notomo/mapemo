export interface PositionData {
  readonly latitude: number;
  readonly longitude: number;
}

export interface Place {
  readonly id: string;
  readonly name: string;
  readonly position: PositionData;
}

export interface Position {
  readonly lat: number;
  readonly lng: number;
}

export class ViewPlaceImpl implements ViewPlace {
  public readonly position: Position;

  constructor(
    public readonly id: string,
    public readonly name: string,
    positionData: PositionData,
    public visible: boolean
  ) {
    this.position = {
      lat: positionData.latitude,
      lng: positionData.longitude,
    };
  }

  public equals(place: ViewPlace): boolean {
    return this.id === place.id;
  }
}

export interface ViewPlace {
  readonly id: string;
  readonly name: string;
  readonly position: Position;
  visible: boolean;
  equals(place: ViewPlace): boolean;
}
