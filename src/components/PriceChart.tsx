import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { CryptoData, ChartData } from '../types/crypto';

interface PriceChartProps {
  data: CryptoData;
}

export const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  const chartData: ChartData[] = data.sparkline_in_7d.price.map((price, index) => ({
    time: `${index}`,
    price: price,
  }));

  const isPositive = data.price_change_percentage_24h > 0;
  const strokeColor = isPositive ? '#10b981' : '#ef4444';

  return (
    <div className="h-16 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <YAxis hide domain={['dataMin', 'dataMax']} />
          <Line
            type="monotone"
            dataKey="price"
            stroke={strokeColor}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};