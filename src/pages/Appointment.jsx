import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { DOCTOR_SPECIALITIES } from '../constants/doctors.jsx';
import { rtdb } from '../lib/firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

const Appointment = () => {
    const specialities = DOCTOR_SPECIALITIES || [];
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        specialist: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.fullName || !formData.phone || !formData.specialist) {
            alert("Please fill in all required fields.");
            return;
        }

        setStatus('loading');
        
        try {
            const appointmentsRef = ref(rtdb, 'appointments');
            await push(appointmentsRef, {
                ...formData,
                timestamp: serverTimestamp(),
                status: 'pending'
            });

            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
            setFormData({ fullName: '', email: '', phone: '', specialist: '', message: '' });
            alert("Appointment booked successfully!");
        } catch (error) {
            console.error("Booking Error:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
            alert("Failed to connect. Please check your internet or Firebase rules.");
        }
    };

  return (
    <div className="appointment-page">
      <PageHeader 
        title="Book An Appointment" 
        description="Schedule your visit online and skip the wait. We are here to serve you." 
      />
      
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="grid lg-grid-cols-3 gap-12">
            
            {/* Appointment Form */}
            <div className="lg-col-span-2">
              <div style={{ background: 'white', padding: '4rem', borderRadius: '40px', boxShadow: 'var(--shadow-xl)', border: '1px solid #f1f5f9' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2.5rem' }}>Appointment Details</h3>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid md-grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label style={{ fontWeight: 600, color: 'var(--primary)' }}>Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #ddd', background: 'var(--bg-alt)' }} 
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={{ fontWeight: 600, color: 'var(--primary)' }}>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com" 
                        style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #ddd', background: 'var(--bg-alt)' }} 
                      />
                    </div>
                  </div>
                  <div className="grid md-grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label style={{ fontWeight: 600, color: 'var(--primary)' }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000" 
                        style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #ddd', background: 'var(--bg-alt)' }} 
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={{ fontWeight: 600, color: 'var(--primary)' }}>Choose Specialist *</label>
                      <select 
                        name="specialist"
                        value={formData.specialist}
                        onChange={handleChange}
                        style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #ddd', background: 'var(--bg-alt)' }}
                        required
                      >
                        <option value="">Choose Specialist</option>
                        {specialities.map((spec, i) => (
                          <option key={`${spec}-${i}`} value={spec}>{spec}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label style={{ fontWeight: 600, color: 'var(--primary)' }}>Message / Symptoms</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your concern..." 
                        style={{ padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #ddd', background: 'var(--bg-alt)', height: '120px' }}
                    ></textarea>
                  </div>
                  <button 
                    disabled={status === 'loading' || status === 'success'}
                    className="btn-primary" 
                    style={{ 
                      marginTop: '1rem', 
                      width: 'fit-content', 
                      padding: '1.2rem 3rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      opacity: status === 'loading' ? 0.7 : 1,
                      backgroundColor: status === 'success' ? '#22c55e' : ''
                    }} 
                    type="submit"
                  >
                    {status === 'loading' ? 'Booking...' : (status === 'success' ? 'Booked! 🎉' : 'Confirm Appointment')} <Calendar size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Support Info */}
            <div className="lg-col-span-1">
              <div style={{ position: 'sticky', top: '120px' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', padding: '3rem', borderRadius: '40px', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Need Help?</h3>
                    <p style={{ opacity: 0.7, marginBottom: '2rem', lineHeight: 1.6 }}>If you have any questions or need immediate assistance, please call our help desk.</p>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4">
                            <Phone size={24} style={{ color: 'var(--secondary-light)' }} />
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Available 24/7</div>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>+91 8282822532</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Mail size={24} style={{ color: 'var(--secondary-light)' }} />
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Email us at</div>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Skhospitalsn@gmail.com</div>
                            </div>
                        </div>
                    </div>
                  </div>
                  
                  <div style={{ background: 'var(--bg-alt)', padding: '3rem', borderRadius: '40px', border: '1px solid #eee' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Location</h3>
                    <div className="flex gap-4">
                        <MapPin size={24} style={{ color: 'var(--secondary)' }} />
                        <p className="text-muted" style={{ fontWeight: 500 }}>33/12, Nannilam Main Road, Sannanallur, Nannilam - 609504</p>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
