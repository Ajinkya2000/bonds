export type BondDataType = {
  id: number;
  isin?: string;
  cusip?: string;
  issuer: string;
  maturityDate: Date;
  coupon: string | null;
  type: string | null;
  faceValue: number | null;
  status: string | null;
}

export type TradeDataType = {
  id: number;
  bookid: number;
  bookName: string;
  counterpartyName: string;
  quantity: number;
  price: number;
  tradeDate: Date;
  settlementDate: Date;
  securityId: any;
}