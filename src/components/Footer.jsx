import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={{ background: 'var(--primary)', color: 'white', paddingTop: '6rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-12" style={{ marginBottom: '5rem' }}>
          
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart color="white" size={24} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>SK <span style={{ color: 'var(--secondary)' }}>Hospital</span></span>
            </div>
            <p style={{ opacity: 0.7, lineHeight: 1.8, maxWidth: '300px' }}>
              Providing exceptional healthcare services with a focus on patient comfort and advanced medical treatment since 2008.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--secondary-light)' }}>Quick Links</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'About Us', 'Services', 'Our Doctors', 'Scan & Lab'].map((item) => (
                <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} style={{ opacity: 0.7, transition: '0.3s' }} className="hover-link">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--secondary-light)' }}>Our Services</h4>
            <div className="flex flex-col gap-4">
              {['Cardiology', 'Paediatrics', 'Orthopedics', 'Urology', 'General Surgery'].map((item) => (
                <Link key={item} to="/services" style={{ opacity: 0.7 }}>{item}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--secondary-light)' }}>Get In Touch</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <MapPin size={22} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <span style={{ opacity: 0.7, fontSize: '0.95rem' }}>33/12, Nannilam Main Road, Sannanallur, Nannilam - 609504</span>
              </div>
              <div className="flex gap-4">
                <Phone size={22} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <span style={{ opacity: 0.7, fontSize: '0.95rem' }}>+91 8282822532<br />+91 8282822503</span>
              </div>
              <div className="flex gap-4">
                <Mail size={22} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <span style={{ opacity: 0.7, fontSize: '0.95rem' }}>info@skhospitalsn.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.5, fontSize: '0.85rem' }} className="md-flex-row justify-between items-center">
          <p>© 2026 SK Hospital. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
