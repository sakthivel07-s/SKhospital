import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { LAB_TESTS } from '../constants/services.jsx';

const LabTest = () => {
  return (
    <div className="lab-page">
      <PageHeader 
        title="Scan & Lab Tests" 
        description="Equipped with cutting-edge diagnostic technology for faster and more accurate results." 
      />
      
      <section className="py-section">
        <div className="container">
          <div style={{ marginBottom: '3rem', maxWidth: '800px' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.2rem' }}>Advanced Diagnostic Technology</h2>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
                With the advent of cutting-edge technologies, medical professionals are now equipped with advanced tools to diagnose and treat their patients better. At Scan and Lab Test, we strive to provide our customers with the latest and greatest in medical diagnostics technology.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6 md-gap-8">
            {LAB_TESTS.map((test, i) => (
              <motion.div 
                key={test.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="card"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ padding: '1rem', background: 'var(--bg-alt)', borderRadius: '14px', color: 'var(--secondary)', display: 'inline-flex', marginBottom: '1.2rem' }}>
                  {test.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: 'var(--primary)' }}>{test.name}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{test.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12 lg-gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', width: '80px', height: '80px', background: 'var(--secondary)', borderRadius: '1.5rem', opacity: 0.1, zIndex: 0 }}></div>
                    <img 
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                      alt="Lab Technology" 
                      style={{ 
                        width: '100%', 
                        borderRadius: '2rem', 
                        boxShadow: 'var(--shadow-xl)',
                        position: 'relative',
                        zIndex: 1
                      }} 
                    />
                    <div style={{ 
                        position: 'absolute', 
                        bottom: '1.5rem', 
                        right: '1rem', 
                        mdRight: '-2rem',
                        background: 'white', 
                        padding: '1.25rem', 
                        borderRadius: '1.5rem', 
                        boxShadow: 'var(--shadow-lg)',
                        maxWidth: '200px',
                        zIndex: 2
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1 }}>99%</div>
                        <div style={{ fontWeight: 700, color: 'var(--primary)', marginTop: '0.4rem', fontSize: '0.9rem' }}>Accuracy Rate</div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Verified clinical diagnostics with AI reporting.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ padding: '1rem 0' }}
            >
                <span style={{ color: 'var(--secondary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Quality Assurance</span>
                <h3 style={{ margin: '1rem 0 2rem', color: 'var(--primary)', fontWeight: 800, lineHeight: 1.1 }}>Precision diagnostics for better health decisions.</h3>
                <div className="flex flex-col gap-6">
                    {[
                        { title: 'Rapid Reporting', desc: 'Verified results delivered within 24 hours via secure portal.' },
                        { title: 'Certified Experts', desc: 'Tests conducted by fellowship-trained diagnostic specialists.' },
                        { title: 'Modern Infrastructure', desc: 'Equipped with the latest Laser and CT imaging technology.' },
                        { title: 'Integrated Care', desc: 'Direct sync with your treating physician for immediate action.' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 md-gap-6">
                            <div style={{ width: '40px', height: '40px', mdWidth: '48px', mdHeight: '48px', background: 'var(--bg-alt)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontWeight: 800, flexShrink: 0 }}>
                                {i + 1}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.3rem', fontWeight: 700 }}>{item.title}</h4>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.95rem' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabTest;
