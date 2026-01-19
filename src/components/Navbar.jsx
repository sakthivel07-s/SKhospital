import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Scan & Lab', href: '/lab-test' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const navColor = (scrolled || !isHome) ? 'var(--primary)' : 'white';

  return (
    <nav className={`nav-fixed ${scrolled || !isHome ? 'nav-scrolled' : ''}`} style={{ padding: scrolled ? '0.8rem 0' : '1.5rem 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" style={{ zIndex: 100 }}>
          <div style={{ background: 'var(--primary)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Heart size={20} color="white" />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: navColor }}>
            SK <span style={{ color: 'var(--secondary)' }}>Hospital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md-flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                style={{ 
                  color: navColor,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  opacity: location.pathname === link.href ? 1 : 0.8,
                  position: 'relative'
                }}
                className="nav-item"
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div layoutId="nav-underline" style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'var(--secondary)', borderRadius: '2px' }} />
                )}
              </Link>
            ))}
          </div>
          <Link to="/appointment" className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Book Appointment <Calendar size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ background: 'rgba(128,128,128,0.1)', padding: '10px', borderRadius: '12px', zIndex: 100 }}
          className="md-hidden"
        >
          {isOpen ? <X color={navColor} /> : <Menu color={navColor} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', padding: '2rem', borderBottom: '1px solid #eee', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', zIndex: 90 }}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} style={{ fontSize: '1.1rem', fontWeight: 600, color: location.pathname === link.href ? 'var(--secondary)' : 'var(--primary)' }}>
                  {link.name}
                </Link>
              ))}
              <Link to="/appointment" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
                Book Appointment <Calendar size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
