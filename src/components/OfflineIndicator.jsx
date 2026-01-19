import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Wifi } from 'lucide-react';

const OfflineIndicator = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowStatus(true);
      // Hide the "Back Online" message after 3 seconds
      setTimeout(() => setShowStatus(false), 3000);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowStatus(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {showStatus && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10000,
            background: isOffline ? '#ef4444' : '#10b981',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            fontWeight: 700,
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          {isOffline ? (
            <>
              <WifiOff size={20} />
              <span>You are currently offline</span>
            </>
          ) : (
            <>
              <Wifi size={20} />
              <span>Back Online</span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfflineIndicator;
