export interface IBoxesDataResponse {
  boxes: {
    edges: {
      node: IBoxData
    }[];
  };
}

export interface IBoxData {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
}