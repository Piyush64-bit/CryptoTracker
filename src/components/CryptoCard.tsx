import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoData } from '../types/crypto';
import { PriceChart } from './PriceChart';

interface CryptoCardProps {
  crypto: CryptoData;
  index: number;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({ crypto, index }) => {
  const isPositive = crypto.price_change_percentage_24h > 0;
  const changeColor = isPositive ? 'text-emerald-400' : 'text-red-400';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 6 : 2,
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    }
    return `$${marketCap.toFixed(2)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)',
      }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1))',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <motion.img
                src={crypto.image}
                alt={crypto.name}
                className="w-10 h-10 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full text-xs text-black font-bold flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(16, 185, 129, 0.5)',
                    '0 0 10px rgba(16, 185, 129, 0.8)',
                    '0 0 0px rgba(16, 185, 129, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {crypto.market_cap_rank}
              </motion.div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{crypto.name}</h3>
              <p className="text-gray-400 text-sm uppercase">{crypto.symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <motion.p
              className="text-white font-bold text-xl"
              animate={{
                textShadow: [
                  '0 0 5px rgba(255, 255, 255, 0.3)',
                  '0 0 10px rgba(255, 255, 255, 0.5)',
                  '0 0 5px rgba(255, 255, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {formatPrice(crypto.current_price)}
            </motion.p>
            <motion.div
              className={`flex items-center space-x-1 ${changeColor}`}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <TrendIcon size={16} />
              <span className="text-sm font-medium">
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mb-4">
          <PriceChart data={crypto} />
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Market Cap</span>
          <span className="text-white font-medium">{formatMarketCap(crypto.market_cap)}</span>
        </div>
      </div>

      {/* Floating particles inside card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};