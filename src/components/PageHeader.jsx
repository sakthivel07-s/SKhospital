import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description }) => {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', 
      padding: '12rem 0 8rem', 
      color: 'white', 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("/pattern.png")', opacity: 0.05, pointerEvents: 'none' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>{title}</h1>
          {description && (
            <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
