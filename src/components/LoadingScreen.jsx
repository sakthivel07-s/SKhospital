import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isLoading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // ECG Configuration
    const speed = 4;
    let x = 0;
    const points = [];
    const amplitude = 50;
    const centerY = canvas.height / 2;

    const draw = () => {
      // Fade effect for the tail
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.strokeStyle = '#00acc1'; // var(--secondary)
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // ECG Pulse logic
      let y = centerY;
      const cyclePos = x % 300;

      if (cyclePos > 50 && cyclePos < 60) y -= 10;           // P wave
      else if (cyclePos >= 60 && cyclePos < 70) y += 5;
      else if (cyclePos >= 80 && cyclePos < 90) y += 15;     // Q wave
      else if (cyclePos >= 90 && cyclePos < 110) y -= 80;    // R wave (Peak)
      else if (cyclePos >= 110 && cyclePos < 130) y += 100;  // S wave
      else if (cyclePos >= 130 && cyclePos < 140) y -= 20;   // Return to baseline
      else if (cyclePos >= 180 && cyclePos < 220) y -= 25;   // T wave

      points.push({ x, y });
      if (points.length > 200) points.shift();

      ctx.beginPath();
      for (let i = 0; i < points.length - 1; i++) {
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[i+1].x, points[i+1].y);
      }
      ctx.stroke();

      // Glow at the tip
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00acc1';
      
      x += speed;
      if (x > canvas.width) {
        x = 0;
        points.length = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.3
            }}
          />
          
          <div style={{ position: 'relative', textAlign: 'center' }}>
             <motion.div
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                }}
                transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--primary)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  boxShadow: '0 20px 40px rgba(0, 172, 193, 0.2)'
                }}
             >
                <div style={{ color: 'white' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                </div>
             </motion.div>
             
             <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
                SK Hospital
             </h2>
             <p style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Initializing Life Support...
             </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
