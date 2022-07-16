export interface IUserDataResponse {
  currentUser: IUserData;
}

export interface IUserData {
  name: string;
  wallets: {
    amount: number;
    currency: string;
  }[];
}