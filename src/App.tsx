import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, BarChart3, Github, Linkedin, Mail } from 'lucide-react';
import { useCryptoData } from './hooks/useCryptoData';
import { CryptoCard } from './components/CryptoCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { AnimatedBackground } from './components/AnimatedBackground';
import { FloatingCryptoIcons } from './components/FloatingCryptoIcons';
import { MatrixRain } from './components/MatrixRain';
import { PageLoader } from './components/PageLoader';

function App() {
  const { cryptoData, loading, error, refetch } = useCryptoData();
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Show page loader for 3 seconds on initial load
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isPageLoading && <PageLoader />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isPageLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white relative overflow-hidden"
      >
        {/* Animated Background Layers */}
        <MatrixRain />
        <AnimatedBackground />
        <FloatingCryptoIcons />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20" />
          <div className="relative container mx-auto px-4 py-16 z-10">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center justify-center space-x-3 mb-6"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </motion.div>
                <motion.h1
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(16, 185, 129, 0.5)',
                      '0 0 40px rgba(16, 185, 129, 0.8)',
                      '0 0 20px rgba(16, 185, 129, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Crypto Tracker
                </motion.h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              >
                Track real-time cryptocurrency prices and market trends with beautiful visualizations
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-wrap justify-center gap-6 text-sm"
              >
                <motion.div
                  className="flex items-center space-x-2 text-emerald-400"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(16, 185, 129, 0)',
                      '0 0 20px rgba(16, 185, 129, 0.3)',
                      '0 0 0px rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <TrendingUp size={18} />
                  <span>Live Prices</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 text-cyan-400"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(6, 182, 212, 0)',
                      '0 0 20px rgba(6, 182, 212, 0.3)',
                      '0 0 0px rgba(6, 182, 212, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <BarChart3 size={18} />
                  <span>7-Day Charts</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 text-emerald-400"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(16, 185, 129, 0)',
                      '0 0 20px rgba(16, 185, 129, 0.3)',
                      '0 0 0px rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <Zap size={18} />
                  <span>Real-time Updates</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} onRetry={refetch} />}
          
          {!loading && !error && cryptoData.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-center mb-2">
                  Top Cryptocurrencies
                </h2>
                <p className="text-gray-400 text-center">
                  Market data updates every 30 seconds
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cryptoData.map((crypto, index) => (
                  <CryptoCard
                    key={crypto.id}
                    crypto={crypto}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="border-t border-gray-800 mt-16 relative z-10"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              {/* Social Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="flex justify-center space-x-6 mb-6"
              >
                <motion.a
                  href="https://github.com/Piyush64-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full border border-gray-700 hover:border-emerald-400 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(16, 185, 129, 0)',
                      '0 0 15px rgba(16, 185, 129, 0.2)',
                      '0 0 0px rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/piyush64bit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(6, 182, 212, 0)',
                      '0 0 15px rgba(6, 182, 212, 0.2)',
                      '0 0 0px rgba(6, 182, 212, 0)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </motion.a>

                <motion.a
                  href="mailto:piiyush.sonii@outlook.com"
                  className="group relative p-3 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(168, 85, 247, 0)',
                      '0 0 15px rgba(168, 85, 247, 0.2)',
                      '0 0 0px rgba(168, 85, 247, 0)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </motion.a>
              </motion.div>

              {/* Copyright Text */}
              <motion.p
                className="text-gray-400 text-sm font-mono relative inline-block"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(16, 185, 129, 0.3)',
                    '0 0 15px rgba(16, 185, 129, 0.6)',
                    '0 0 25px rgba(16, 185, 129, 0.4)',
                    '0 0 15px rgba(6, 182, 212, 0.6)',
                    '0 0 5px rgba(16, 185, 129, 0.3)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(16, 185, 129, 0.8)',
                }}
              >
                <motion.span
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ©
                </motion.span>
                {' '}
                <motion.span
                  animate={{
                    color: [
                      'rgba(156, 163, 175, 1)',
                      'rgba(16, 185, 129, 0.8)',
                      'rgba(6, 182, 212, 0.8)',
                      'rgba(16, 185, 129, 0.8)',
                      'rgba(156, 163, 175, 1)',
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  2025 Crafted by Piyush
                </motion.span>
                {' '}
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="inline-block"
                >
                  🖤
                </motion.span>
              </motion.p>

              {/* Animated underline */}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mt-2 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                transition={{ duration: 2, delay: 2 }}
              />

              {/* Floating particles around footer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, Math.sin(i) * 10, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </>
  );
}

export default App;