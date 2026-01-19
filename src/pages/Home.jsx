import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Droplet, User, Stethoscope, ChevronRight, ShieldCheck, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src="/image.png" alt="Hospital" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: '800px' }}>
          <span style={{ 
            display: 'inline-flex', 
            padding: '0.6rem 1.4rem', 
            background: 'rgba(255,255,255,0.08)', 
            border: '1px solid rgba(255,255,255,0.15)', 
            borderRadius: '100px', 
            color: 'var(--secondary-light)', 
            fontWeight: 700, 
            fontSize: 'max(0.75rem, 0.85vw)', 
            marginBottom: '1.5rem',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Leading Healthcare Provider
          </span>
          <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 800 }}>
            Advanced Care, <br />
            <span style={{ color: 'var(--secondary-light)' }}>Compassionate</span> Healing
          </h1>
          <p style={{ opacity: 0.9, marginBottom: '3rem', maxWidth: '620px', lineHeight: 1.6 }}>
            Experience world-class medical facilities and dedicated specialists committed to your well-being.
          </p>
          <div className="flex flex-col md-flex-row gap-4 md-gap-6 items-center">
            <Link to="/appointment" className="btn-primary" style={{ fontSize: '1.1rem' }}>
              Book Now <ArrowUpRight size={22} />
            </Link>
            <Link to="/services" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', padding: '1.2rem 2.5rem', borderRadius: '100px', color: 'white', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '250px' }}>
              Our Services
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-8 md-gap-16 items-center" style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '2.5rem' }}>
            <div className="flex-1 min-w-[120px]">
              <div style={{ fontSize: 'max(2rem, 2.4vw)', fontWeight: 800 }}>25+</div>
              <div style={{ opacity: 0.7, fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Specialists</div>
            </div>
            <div className="hidden md-flex" style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.15)' }}></div>
            <div className="flex-1 min-w-[120px]">
              <div style={{ fontSize: 'max(2rem, 2.4vw)', fontWeight: 800 }}>10k+</div>
              <div style={{ opacity: 0.7, fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Patients Served</div>
            </div>
            <div className="hidden md-flex" style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.15)' }}></div>
            <div className="flex-1 min-w-[120px]">
              <div style={{ fontSize: 'max(2rem, 2.4vw)', fontWeight: 800 }}>24/7</div>
              <div style={{ opacity: 0.7, fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Emergency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const QuickActions = () => {
  const actions = [
    { title: 'Emergency Care', desc: 'Instant 24/7 Response', icon: <Droplet />, color: '#ef4444', link: '/contact' },
    { title: 'Find Doctor', desc: 'Expert Specialists', icon: <User />, color: '#3b82f6', link: '/doctors' },
    { title: 'Book Lab Test', desc: 'Advanced Diagnostics', icon: <Stethoscope />, color: '#06b6d4', link: '/lab-test' },
  ];
  return (
    <section className="quick-actions">
      <div className="container">
        <div className="grid md-grid-cols-3 gap-6 md-gap-8">
          {actions.map((action, i) => (
            <Link to={action.link} key={i}>
              <motion.div 
                whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                className="card flex items-center gap-6" 
                style={{ height: '100%' }}
              >
                <div style={{ width: '60px', height: '60px', backgroundColor: action.color, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, boxShadow: `0 10px 20px ${action.color}33` }}>
                  {React.cloneElement(action.icon, { size: 24 })}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--primary)' }}>{action.title}</h3>
                  <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '8px', lineHeight: 1.4 }}>{action.desc}</p>
                  <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }} className="hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <QuickActions />
      <section className="py-section">
        <div className="container text-center" style={{ marginBottom: '3rem' }}>
          <span style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '1rem', display: 'block' }}>Excellence in Care</span>
          <h2>Welcome to SK Hospital</h2>
          <p className="text-muted" style={{ maxWidth: '800px', margin: '1.5rem auto 0' }}>
            We are committed to providing you with the best possible care. Our team of highly skilled doctors and medical professionals is dedicated to ensuring your well-being.
          </p>
        </div>
        <div className="container grid lg-grid-cols-2 gap-12 lg-gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ borderRadius: '40px', mdBorderRadius: '60px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '6px solid white' }}>
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Hospital Technology" 
                  style={{ width: '100%', display: 'block' }} 
                />
              </div>
              <div style={{ 
                position: 'absolute', 
                top: '-1.5rem', 
                right: '0', 
                background: 'var(--secondary)', 
                color: 'white', 
                padding: '1rem 1.5rem', 
                borderRadius: '1.5rem', 
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10
              }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800 }}>15+</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Years Legacy</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ background: 'white', padding: '2.5rem', mdPadding: '4rem', borderRadius: '30px', mdBorderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--secondary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                    <div style={{ width: '25px', height: '2px', background: 'var(--secondary)' }}></div>
                    Our Philosophy
                </div>
                <h3>Holistic, healing and modern medicine.</h3>
                <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: '2.5rem', marginTop: '1.5rem' }}>
                    At SK Hospital, we believe in treating patients, not just diseases. We take a holistic approach to medicine, integrating high-end technology with compassionate, personalized nursing.
                </p>
                <div className="flex flex-col gap-4 md-gap-6" style={{ marginBottom: '2.5rem' }}>
                    <div className="flex gap-4 items-center">
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--secondary)', flexShrink: 0 }}></div>
                        <span style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>Corporate standards at common man prices.</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--secondary)', flexShrink: 0 }}></div>
                        <span style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>24/7 dedicated emergency response team.</span>
                    </div>
                </div>
                <Link to="/about-us" className="btn-primary" style={{ width: 'auto' }}>Learn More About Us</Link>
            </motion.div>
        </div>
      </section>
      
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="cta-banner flex flex-col items-center justify-between gap-12 md-flex-row">
            <div style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to prioritize your health?</h2>
              <p style={{ opacity: 0.7, fontSize: '1.1rem', marginBottom: '2rem' }}>Book an appointment online today and skip the queue. Expert care is just a click away.</p>
              <Link to="/appointment" className="btn-primary" style={{ padding: '1.2rem 3rem' }}>Book Appointment Now</Link>
            </div>
            <div className="animate-pulse-slow" style={{ opacity: 0.1, position: 'absolute', right: '5%', top: '10%' }}>
              <Calendar size={300} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
