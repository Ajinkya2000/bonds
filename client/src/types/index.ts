export type BondDataType = {
  id: number;
  isin: string;
  cusip: string;
  issuer: string;
  maturityDate: Date;
  coupon: string | null;
  type: string | null;
  faceValue: number | null;
  status: string | null;
}