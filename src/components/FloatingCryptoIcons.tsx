import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Zap, TrendingUp, BarChart3, DollarSign, Activity } from 'lucide-react';

export const FloatingCryptoIcons: React.FC = () => {
  const icons = [
    { Icon: Bitcoin, delay: 0, x: '10%', y: '20%' },
    { Icon: Zap, delay: 2, x: '80%', y: '30%' },
    { Icon: TrendingUp, delay: 4, x: '15%', y: '70%' },
    { Icon: BarChart3, delay: 6, x: '85%', y: '60%' },
    { Icon: DollarSign, delay: 8, x: '50%', y: '15%' },
    { Icon: Activity, delay: 10, x: '70%', y: '80%' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-emerald-400/10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
};