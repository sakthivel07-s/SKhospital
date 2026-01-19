import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants/services.jsx';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="services-page">
      <PageHeader 
        title="Our Services" 
        description="Comprehensive healthcare services provided by experts across multiple specialties." 
      />
      
      <section className="py-section">
        <div className="container">
          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6 md-gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card"
                onClick={() => setSelectedService(service)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                <div className="service-icon" style={{ borderRadius: '20px' }}>
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)' }}>{service.name}</h3>
                <p className="text-muted" style={{ lineHeight: 1.7, marginBottom: '1.5rem' }}>{service.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                style={{ position: 'absolute', inset: 0, background: 'rgba(0, 40, 40, 0.8)', backdropFilter: 'blur(8px)' }}
            />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                style={{ 
                    position: 'relative', 
                    background: 'white', 
                    width: '100%', 
                    maxWidth: '900px', 
                    borderRadius: '1.5rem', 
                    overflow: 'hidden', 
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '90vh'
                }}
            >
                {/* Modal Header */}
                <div style={{ 
                    padding: '2rem 1.5rem', 
                    mdPadding: '3rem',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', 
                    color: 'white',
                    position: 'relative' 
                }}>
                    <button 
                        onClick={() => setSelectedService(null)}
                        style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.1)', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <X size={18} />
                    </button>
                    <div className="flex items-center gap-4 md-gap-6">
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '18px', backdropFilter: 'blur(10px)' }}>
                            {React.cloneElement(selectedService.icon, { size: 32, color: 'white' })}
                        </div>
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: 'white', fontWeight: 800, marginBottom: '0.2rem' }}>{selectedService.name}</h2>
                            <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Expert Medical Care</p>
                        </div>
                    </div>
                </div>

                {/* Modal Content */}
                <div style={{ padding: '1.5rem', mdPadding: '3rem', overflowY: 'auto', background: '#f8fafc' }}>
                    <div className="flex flex-col gap-4 md-gap-6">
                        {selectedService.details.map((para, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                style={{ 
                                    display: 'flex', 
                                    gap: '15px', 
                                    background: 'white', 
                                    padding: '1.25rem', 
                                    borderRadius: '1.25rem',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                    border: '1px solid #f1f5f9'
                                }}
                            >
                                <div style={{ color: 'var(--secondary)', flexShrink: 0, paddingTop: '2px' }}>
                                    <CheckCircle2 size={20} />
                                </div>
                                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>
                                    {para}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Modal Footer */}
                <div style={{ padding: '1.5rem', mdPadding: '2rem 3rem', background: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.85rem' }}>Require more information?</p>
                    <div className="flex gap-3">
                        <button onClick={() => setSelectedService(null)} style={{ padding: '0.7rem 1.5rem', borderRadius: '100px', fontWeight: 700, background: '#f1f5f9', color: 'var(--text-main)', fontSize: '0.9rem' }}>Close</button>
                        <button className="btn-primary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.9rem' }}>Talk to Specialist</button>
                    </div>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-section" style={{ background: 'var(--primary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 70% 30%, rgba(0, 172, 193, 0.15) 0%, transparent 70%)' }}></div>
        <div className="container text-center relative z-10">
            <h2 style={{ marginBottom: '1.5rem', fontWeight: 800, color: 'white' }}>24/7 Emergency Care Available</h2>
            <p style={{ opacity: 0.8, maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                Our medical professionals and emergency response team are available round the clock to provide immediate care and stability for critical situations.
            </p>
            <div className="flex flex-col md-flex-row justify-center gap-4 md-gap-6">
                <button className="btn-primary" style={{ background: 'var(--secondary)', color: 'white' }}>Call 0431-2771111</button>
                <button style={{ border: '2px solid white', color: 'white', padding: '1rem 2.5rem', borderRadius: '100px', fontWeight: 700, background: 'transparent' }}>Emergency Contact</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
