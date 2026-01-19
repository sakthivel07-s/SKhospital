import { Activity, Droplet, Baby, Bone, Brain, Syringe, Heart, Stethoscope, Zap, Eye, Filter } from 'lucide-react';
import React from 'react';

export const SERVICES = [
  { 
    id: 'cardiology',
    name: 'Cardiology', 
    icon: <Activity />, 
    desc: 'Caters to the needs of Neonatal, Paediatric, adult and senior citizen heart problems.',
    details: [
      'Our Cardiology department is dedicated to providing the highest quality cardiovascular care to our patients. We specialize in a wide range of services, from preventive screenings to complex interventional procedures.',
      'We are equipped with state-of-the-art diagnostic tools, including 4D Echocardiography, Stress Testing, and high-resolution Holter Monitoring, ensuring accurate assessment of heart health across all age groups.',
      'Our team of expert cardiologists works closely with each patient to develop personalized treatment plans, focusing on long-term management of hypertension, coronary artery disease, and heart failure.',
      'We also offer advanced cardiac rehabilitation programs to help patients recover and strengthen their hearts after major surgeries or cardiac events.'
    ]
  },
  { 
    id: 'urology',
    name: 'Urology', 
    icon: <Droplet />, 
    desc: '24 hours world-class urological care with excellent post-operative care.',
    details: [
      'The Urology department at SK Hospital offers comprehensive care for patients with diseases of the urinary tract and the male reproductive system.',
      'Our facility is equipped with cutting-edge Laser Lithoclasty technology for non-invasive stone removal, ensuring minimal discomfort and faster recovery times for our patients.',
      'We provide expert treatment for conditions such as kidney stones, prostate issues, urinary tract infections, and complex urological cancers.',
      'Our surgical teams are pioneers in laparoscopic and minimally invasive techniques, reducing hospital stays and optimizing clinical outcomes.'
    ]
  },
  { 
    id: 'general-medicine',
    name: 'General Medicine', 
    icon: <Heart />, 
    desc: 'Treating infectious diseases, Diabetes, Hypertension, and chronic disorders.',
    details: [
      'General Medicine is the cornerstone of our hospital, handling the diagnosis and non-surgical treatment of various acute and chronic diseases.',
      'We specialize in the management of lifestyle diseases such as Diabetes Mellitus and Hypertension, offering dedicated clinics for regular monitoring and lifestyle counseling.',
      'Our Critical Care Unit is managed by highly skilled physicians who provide around-the-clock support for patients with life-threatening conditions and multi-organ failure.',
      'We emphasize preventive healthcare, offering comprehensive executive health check-ups and immunization programs for adults.'
    ]
  },
  { 
    id: 'general-surgery',
    name: 'General Surgery', 
    icon: <Syringe />, 
    desc: 'Focusing on outpatient, inpatient or emergency needs covered 24x7.',
    details: [
      'Our General Surgery department provides comprehensive surgical services for a wide variety of conditions affecting the abdominal organs, soft tissues, and endocrine system.',
      'We operate two dedicated modern operation theatres equipped with advanced imaging and surgical instrumentation to handle both elective and emergency cases.',
      'Our surgeons are experts in minimally invasive (laparoscopic) procedures, which result in smaller scars, less pain, and a quicker return to daily activities.',
      'Post-operative care is our priority, with a dedicated nursing team and pain management protocols designed to ensure a smooth recovery process.'
    ]
  },
  { 
    id: 'obstetrics',
    name: 'Obstetrics & Gynecology', 
    icon: <Baby />, 
    desc: 'Focused care for high-risk pregnancies and modern oncology screening.',
    details: [
      'Our department provides holistic care for women at every stage of life, with a special focus on maternal-fetal medicine and high-risk pregnancy management.',
      'We are equipped with modern labor suites and a specialized Neonatal Intensive Care Unit (NICU) to provide the best possible start for your newborn.',
      'We offer advanced gynecological screenings, including Pap smears, colposcopy, and HPV testing for early detection and prevention of cervical cancer.',
      'Our team also provides expert management for menopause, PCOS, and fertility-related concerns, ensuring personalized care for every patient.'
    ]
  },
  { 
    id: 'paediatrics',
    name: 'Paediatrics', 
    icon: <Stethoscope />, 
    desc: 'Preventive, promotive and curative health care for infants and children.',
    details: [
      'Our Paediatric department is designed to provide a child-friendly environment where little ones feel safe and cared for by our compassionate medical team.',
      'We offer complete immunization services, growth and development monitoring, and specialized care for childhood nutrition and respiratory illnesses.',
      'Our hospital features a dedicated Paediatric ward staffed by nurses trained specifically in the care of children and adolescents.',
      'We believe in a family-centered approach, working closely with parents to ensure the physical and emotional well-veing of their children up to 18 years of age.'
    ]
  },
  { 
    id: 'orthopedics',
    name: 'Orthopedics', 
    icon: <Bone />, 
    desc: 'Focus on musculoskeletal system: muscles, bones, joints, and tendons.',
    details: [
      'Our Orthopedics department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system, including complex bone fractures and joint disorders.',
      'We utilize advanced arthroscopic techniques for minimally invasive repair of sports-related injuries to the shoulders, knees, and ankles.',
      'Our joint replacement program offers the latest in prosthetic technology for hip and knee replacements, helping patients regain mobility and independence.',
      'We are supported by a full-fledged physiotherapy and rehabilitation center, ensuring a comprehensive recovery path from injury to full function.'
    ]
  },
  { 
    id: 'oromaxillary',
    name: 'Oromaxillary Facial Surgery', 
    icon: <Brain />, 
    desc: 'Specialized surgical treatment for conditions affecting the mouth and face.',
    details: [
      'The Oromaxillary and Facial Surgery unit provides expert care for complex conditions affecting the face, jaws, and oral cavity.',
      'We specialize in the treatment of facial trauma, corrective jaw surgery, and the removal of benign and malignant tumors of the head and neck.',
      'Our surgeons work in coordination with aesthetic specialists to ensure optimal functional and cosmetic results for our patients.',
      'We also offer advanced procedures for dental implants and wisdom tooth management under specialized sedation for maximum patient comfort.'
    ]
  }
];

export const LAB_TESTS = [
  { id: 'uroflowmetry', name: 'Uroflowmetry Study', icon: <Droplet />, desc: 'Advanced study for measuring the flow of urine to diagnose various urological conditions.' },
  { id: 'ct-scan', name: 'CT Scan', icon: <Zap />, desc: 'High-resolution computed tomography scans for detailed cross-sectional images of the body.' },
  { id: 'ultrasound', name: 'Ultrasound Scan', icon: <Eye />, desc: 'Modern ultrasound imaging for accurate internal diagnosis and monitoring.' },
  { id: 'xray', name: 'X-Ray', icon: <Zap />, desc: 'Fast and reliable diagnostic radiography services for bones and internal organs.' },
  { id: 'echo', name: 'ECHO', icon: <Activity />, desc: 'Echocardiography services for advanced heart imaging and valve condition monitoring.' },
  { id: 'ecg', name: 'ECG', icon: <Activity />, desc: 'Electrocardiogram testing for quick assessment of heart rhythm and electrical activity.' },
  { id: 'lab', name: 'Advanced Lab Specialty', icon: <Filter />, desc: 'Cutting-edge laboratory diagnostics spanning hematology and biochemistry.' }
];
