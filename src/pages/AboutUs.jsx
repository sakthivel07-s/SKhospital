import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="about-page">
      <PageHeader 
        title="About SK Hospital" 
        description="Your one-stop solution for all your medical needs with a commitment to excellence." 
      />
      
      <section style={{ padding: '8rem 0' }}>
        <div className="container grid md-grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>A Service With Passion</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Welcome to SK Hospital. We understand that your health is your most precious asset and we are committed to providing you with the best possible care. Our team of highly skilled doctors and medical professionals is dedicated to ensuring that you receive the best possible treatment and care.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our team of general medicine doctors is highly experienced and capable of treating a wide range of conditions. From common ailments such as the flu and allergies to more serious conditions such as heart disease and diabetes, our doctors are here to help.
            </p>
          </motion.div>
          <div style={{ position: 'relative' }}>
            <img src="/tech.png" alt="Hospital" style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow-xl)' }} />
            <div style={{ position: 'absolute', top: '-30px', right: '-30px', background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)' }}>15+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="grid md-grid-cols-3 gap-8">
            <div className="card" style={{ background: 'white' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-alt)', borderRadius: '20px', width: 'fit-content', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                <Heart size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Personalize Care</h3>
              <p className="text-muted">We take a holistic approach to medicine, taking into account your overall health and lifestyle to provide you with the best possible care.</p>
            </div>
            <div className="card" style={{ background: 'white' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-alt)', borderRadius: '20px', width: 'fit-content', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                <Target size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Understanding Common Man</h3>
              <p className="text-muted">SK Multispeciality Hospitals is a corporate hospital dedicated to providing high-quality care affordable for the common man.</p>
            </div>
            <div className="card" style={{ background: 'white' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-alt)', borderRadius: '20px', width: 'fit-content', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>High-End Operation Theatre</h3>
              <p className="text-muted">Keeping the infections low with high-end laminar operation theatres with highly well-trained staff.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '2rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                At SK Hospital, we are committed to providing quality healthcare services. Our team of experienced professionals works tirelessly to ensure safety and comfort. We believe every patient deserves the highest level of care, and we strive to make that a reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
