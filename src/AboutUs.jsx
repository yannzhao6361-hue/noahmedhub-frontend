import React from 'react';

export default function AboutUs({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        overflowY: 'auto', // 确保屏幕过低时页面可整体滚动
        padding: '1.5rem 1rem'
      }}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '500px',
          boxSizing: 'border-box', // <--- 关键修复：确保 padding 不会把容器撑出屏幕
          padding: '2.5rem 1.8rem', // <--- 适当调小左右 padding，适配手机屏幕
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          position: 'relative',
          color: '#2b2b2b',
          fontFamily: 'Georgia, serif, "Times New Roman"',
          textAlign: 'left',
          lineHeight: '1.5',
          margin: 'auto'
        }}
      >
        {/* 右上角关闭按钮 ❌ */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.6rem',
            color: '#64748b',
            cursor: 'pointer',
            padding: '0.4rem 0.6rem',
            lineHeight: 1,
            zIndex: 10
          }}
        >
          &times;
        </button>

        {/* 主标题 */}
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: '#1a1a1a', 
          marginTop: 0, 
          marginBottom: '1.2rem',
          textAlign: 'left'
        }}>
          About us
        </h2>

        {/* 简介段落 */}
        <p style={{ fontSize: '0.9rem', color: '#4a4a4a', marginBottom: '1.2rem', textAlign: 'left' }}>
          Established by a team of professionals in medical-related operations, Noah MedHub Inc. is a Vancouver-based cross-border medical service platform. We bridge the global healthcare gap by connecting global patients with China's most advanced private hospitals, elite medical specialists, and holistic wellness centers. We are dedicated to provide a seamless, transparent, and trusted cross-border medical journey, ensuring that life-changing treatments are accessible to everyone and everywhere.
        </p>

        {/* Mission */}
        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.4rem', textAlign: 'left' }}>
          Our mission
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#4a4a4a', marginBottom: '1.2rem', textAlign: 'left' }}>
          Connecting global patients with China's advanced, reliable, and accessible healthcare solutions.
        </p>

        {/* Vision */}
        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.4rem', textAlign: 'left' }}>
          Our vision
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#4a4a4a', marginBottom: '1.2rem', textAlign: 'left' }}>
          Becoming the world's premier & most trusted medical gateway to China's healthcare excellence.
        </p>

        {/* Values */}
        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.4rem', textAlign: 'left' }}>
          Our values
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#4a4a4a', marginBottom: '1rem', textAlign: 'left' }}>
          These values will define our culture and always guide our approach to empowering the patients:
        </p>

        {/* 列表项 */}
        <ul style={{ 
          paddingLeft: '1.4rem', 
          margin: 0, 
          fontSize: '0.9rem', 
          color: '#4a4a4a',
          textAlign: 'left' 
        }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#1a1a1a' }}>Patient-First Compassion</strong><br />
            We promise to place the patients at the heart of everything we do, providing empathetic, personalized care & continuous support throughout their entire healing journey in China.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#1a1a1a' }}>Integrity & Transparency</strong><br />
            We commit to the highest ethical standards, ensuring total transparency in <strong>medical costs</strong>, <strong>hospital credentials</strong>, and <strong>treatment outcomes</strong>, and <strong>service charges with no hidden issues</strong>.
          </li>
          <li style={{ marginBottom: '0.2rem' }}>
            <strong style={{ color: '#1a1a1a' }}>Concierge-level Consultancy & Precision Matchmaking</strong><br />
            We provide the highest level, comprehensive & personalized pre-treatment consultancy services, so to attain precision matching between the patients and medical specialists.
          </li>
        </ul>
      </div>
    </div>
  );
}