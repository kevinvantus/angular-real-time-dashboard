export interface TradeResponse {
  data: TradeData[] | null;
  type: 'trade';
}

export interface TradeData {
  c: null;
  p: number;
  s: string;
  t: number;
  v: number;
}
