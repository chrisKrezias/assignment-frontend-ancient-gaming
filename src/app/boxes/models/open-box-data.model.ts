export interface IOpenBoxDataResponse {
  openBox: IBoxOpenings | null;
}

interface IBoxOpenings {
  boxOpenings: {
    itemVariant: IOpenBoxData;
  }[];
};

export interface IOpenBoxData {
  name: string;
  iconUrl: string;
  value: number;
}

export interface IOpenBoxInput {
  boxId: string;
  amount: number;
}