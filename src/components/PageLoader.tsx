import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, BarChart3, Bitcoin } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent"
            style={{
              left: `${i * 5}%`,
              height: '100vh',
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central loading animation */}
      <div className="relative z-10 text-center">
        {/* Main logo with glow */}
        <motion.div
          className="flex items-center justify-center space-x-4 mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-16 h-16 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
          </motion.div>
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                '0 0 20px rgba(16, 185, 129, 0.5)',
                '0 0 40px rgba(16, 185, 129, 0.8)',
                '0 0 60px rgba(6, 182, 212, 0.6)',
                '0 0 40px rgba(16, 185, 129, 0.8)',
                '0 0 20px rgba(16, 185, 129, 0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Crypto Tracker
          </motion.h1>
        </motion.div>

        {/* Creator credit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <motion.p
            className="text-gray-400 text-sm font-mono"
            animate={{
              color: [
                'rgba(156, 163, 175, 1)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(156, 163, 175, 1)',
              ],
              textShadow: [
                '0 0 5px rgba(16, 185, 129, 0.3)',
                '0 0 10px rgba(16, 185, 129, 0.5)',
                '0 0 15px rgba(6, 182, 212, 0.5)',
                '0 0 10px rgba(16, 185, 129, 0.5)',
                '0 0 5px rgba(16, 185, 129, 0.3)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            by piyush64-bit
          </motion.p>
        </motion.div>

        {/* Loading spinner with crypto icons */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-gray-800 border-t-emerald-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-gray-700 border-b-cyan-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Floating crypto icons */}
          {[Bitcoin, TrendingUp, BarChart3, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-emerald-400/60"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <motion.div
                animate={{
                  x: [0, 40 * Math.cos((index * Math.PI) / 2), 0],
                  y: [0, 40 * Math.sin((index * Math.PI) / 2), 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <Icon size={24} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          className="text-emerald-400 text-xl font-medium mb-4"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Initializing Crypto Data...
        </motion.div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-emerald-400 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.div>
  );
};