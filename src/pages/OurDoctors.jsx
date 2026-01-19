import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { User, ShieldCheck } from 'lucide-react';
import { DOCTOR_SPECIALITIES } from '../constants/doctors.jsx';

const OurDoctors = () => {
  return (
    <div className="doctors-page">
      <PageHeader 
        title="Our Specialist Doctors" 
        description="Meet our team of highly skilled and dedicated medical professionals." 
      />
      
      <section className="py-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.2rem' }}>Experienced Medical Professionals</h2>
            <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Our team is committed to providing you with the best possible treatment. We have specialists across all major departments working together for your health.
            </p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-y-32 gap-x-8">
            {DOCTOR_SPECIALITIES.map((speciality, i) => {
              const doctorImg = i % 2 === 0 
                ? "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" // Male Doctor
                : "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800"; // Female Doctor (Reliable source)
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -15 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  style={{ position: 'relative', height: '420px', cursor: 'pointer' }}
                >
                  {/* Doctor Image Container */}
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '2.5rem', 
                    overflow: 'hidden', 
                    boxShadow: 'var(--shadow-xl)',
                    position: 'relative'
                  }}>
                    <img 
                      src={doctorImg} 
                      alt={speciality} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }} 
                    />
                    <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        background: 'linear-gradient(to top, rgba(0, 77, 77, 0.9) 0%, rgba(0, 77, 77, 0.4) 40%, transparent 100%)' 
                    }}></div>
                  </div>

                  {/* Floating Detail Card */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '-2.5rem', 
                    left: '1rem', 
                    right: '1rem', 
                    background: 'white', 
                    padding: '1.8rem 1.2rem', 
                    borderRadius: '1.5rem', 
                    boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                    textAlign: 'center',
                    border: '1px solid #f1f5f9',
                    zIndex: 5
                  }}>
                    <div style={{ 
                        position: 'absolute', 
                        top: '-12px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        background: 'var(--secondary)', 
                        color: 'white', 
                        padding: '4px 14px', 
                        borderRadius: '20px', 
                        fontSize: '0.7rem', 
                        fontWeight: 800, 
                        letterSpacing: '1px', 
                        textTransform: 'uppercase'
                    }}>
                        Available
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.4rem', fontWeight: 800 }}>Dr. {i % 2 === 0 ? 'Siddharth V.' : 'Ananya R.'}</h3>
                    <p style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.8rem' }}>{speciality}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem' }}>
                        <ShieldCheck size={14} /> 15+ Yrs Exp
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
            <div className="card" style={{ background: 'var(--primary)', color: 'white', padding: '3rem 1.5rem', mdPadding: '5rem', borderRadius: '30px', mdBorderRadius: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'white' }}>Need a specialist consultation?</h2>
                <p style={{ opacity: 0.8, maxWidth: '600px', marginBottom: '2.5rem' }}>
                    Book an appointment with our experts today. We are here to listen, diagnose, and heal.
                </p>
                <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem' }}>Book An Appointment</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default OurDoctors;
