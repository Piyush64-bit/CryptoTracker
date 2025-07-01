export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  market_cap_rank: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface ChartData {
  time: string;
  price: number;
}