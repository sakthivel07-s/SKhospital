import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { rtdb } from '../lib/firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.message) {
            alert("Please fill in Name and Message.");
            return;
        }

        setStatus('loading');
        
        try {
            const messagesRef = ref(rtdb, 'messages');
            await push(messagesRef, {
                ...formData,
                timestamp: serverTimestamp()
            });

            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
            setFormData({ name: '', email: '', subject: '', message: '' });
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Message Error:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
            alert("Failed to send message. Please try again.");
        }
    };

  return (
    <div className="contact-page">
      <PageHeader 
        title="Contact Us" 
        description="We are here to help. Reach out to us for any medical queries or appointments." 
      />
      
      <section className="py-section">
        <div className="container">
          <div className="grid lg-grid-cols-3 gap-12 lg-gap-20">
            
            {/* Contact Info */}
            <div className="lg-col-span-1">
              <div style={{ marginBottom: '3rem' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Get in Touch</span>
                <h2 style={{ marginTop: '0.5rem', color: 'var(--primary)' }}>How can we help?</h2>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div style={{ padding: '1rem', background: 'var(--bg-alt)', borderRadius: '14px', color: 'var(--secondary)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.4rem', fontWeight: 700 }}>Our Location</h3>
                    <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>33/12, Nannilam Main Road, Sannanallur, <br />Nannilam - 609504, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div style={{ padding: '1rem', background: 'var(--bg-alt)', borderRadius: '14px', color: 'var(--secondary)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.4rem', fontWeight: 700 }}>Call Us</h3>
                    <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>+91 8282822532<br />04366-228266</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div style={{ padding: '1rem', background: 'var(--bg-alt)', borderRadius: '14px', color: 'var(--secondary)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.4rem', fontWeight: 700 }}>Email Us</h3>
                    <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>Skhospitalsn@gmail.com<br />info@skhospitalsn.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div style={{ padding: '1rem', background: 'var(--bg-alt)', borderRadius: '14px', color: 'var(--secondary)', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.4rem', fontWeight: 700 }}>Working Hours</h3>
                    <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>Emergency - 24/7 Open<br />OPD - 09:00 AM to 09:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg-col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{ background: 'white', padding: '2.5rem', mdPadding: '4rem', borderRadius: '30px', mdBorderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}
              >
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem', fontWeight: 800 }}>Send us a message</h3>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid md-grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                      <label style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name" 
                        style={{ padding: '1.1rem 1.6rem', borderRadius: '14px', border: '1.5px solid #f1f5f9', background: 'var(--bg-alt)', outline: 'none', transition: 'all 0.3s ease' }} 
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com" 
                        style={{ padding: '1.1rem 1.6rem', borderRadius: '14px', border: '1.5px solid #f1f5f9', background: 'var(--bg-alt)', outline: 'none', transition: 'all 0.3s ease' }} 
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Purpose of contact" 
                        style={{ padding: '1.1rem 1.6rem', borderRadius: '14px', border: '1.5px solid #f1f5f9', background: 'var(--bg-alt)', outline: 'none', transition: 'all 0.3s ease' }} 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>Message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..." 
                        style={{ padding: '1.1rem 1.6rem', borderRadius: '14px', border: '1.5px solid #f1f5f9', background: 'var(--bg-alt)', height: '160px', outline: 'none', transition: 'all 0.3s ease' }}
                        required
                    ></textarea>
                  </div>
                  <button 
                    disabled={status === 'loading' || status === 'success'}
                    className="btn-primary" 
                    style={{ 
                        marginTop: '1rem', 
                        width: 'fit-content', 
                        opacity: status === 'loading' ? 0.7 : 1,
                        backgroundColor: status === 'success' ? '#22c55e' : ''
                    }} 
                    type="submit"
                  >
                    {status === 'loading' ? 'Sending...' : (status === 'success' ? 'Sent! ✨' : 'Send Message')} <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '500px', width: '100%', position: 'relative', background: '#f8fafc' }}>
        <iframe 
          src="https://maps.google.com/maps?q=SK%20Hospital%20Sannanallur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="SK Hospital Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
