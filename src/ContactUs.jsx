import React, { useEffect } from 'react';

export default function ContactUs({ isOpen, onClose }) {
  // 支持按 Esc 键关闭弹窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          width: '90%',
          maxWidth: '460px',
          padding: '2.5rem 2rem 2rem 2rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          color: '#111827',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          textAlign: 'left' // 设置全局靠左对齐
        }}
        onClick={(e) => e.stopPropagation()} // 阻止冒泡，点击内部不关闭
      >
        {/* 右上角关闭按钮 */}
        <button 
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: '#9ca3af',
            cursor: 'pointer'
          }}
        >
          &times;
        </button>

 

        {/* 3. Contact us 部分 */}
        <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', textAlign: 'left' }}>
            Contact us:
          </h3>

          {/* WhatsApp 联系方式 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '1.2rem', justifyContent: 'flex-start' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '0.9rem',
              flexShrink: 0,
              marginTop: '2px'
            }}>
              💬
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#0f172a', marginBottom: '0.2rem', textAlign: 'left' }}>
                Chat on WhatsApp
              </div>
              <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.4', fontWeight: '600', textAlign: 'left' }}>
                +1 206-928-2651
              </div>
              <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.4', fontWeight: '600', textAlign: 'left' }}>
                +1 672-673-0689
              </div>
            </div>
          </div>

          {/* Email 联系方式 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem', justifyContent: 'flex-start' }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '0.75rem',
              flexShrink: 0
            }}>
              ✉
            </div>
            <a 
              href="mailto:info@noahmedhub.com" 
              style={{
                color: '#1d4ed8',
                fontSize: '0.95rem',
                fontWeight: '700',
                textDecoration: 'underline',
                wordBreak: 'break-all',
                textAlign: 'left'
              }}
            >
              info@noahmedhub.com
            </a>
          </div>

          {/* 电话联系方式 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', justifyContent: 'flex-start' }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: '1.5px solid #475569',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#475569',
              fontSize: '0.8rem',
              flexShrink: 0,
              marginTop: '2px'
            }}>
              📞
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.4', fontWeight: '600', textAlign: 'left' }}>
                +1 206-928-2651
              </div>
              <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.4', fontWeight: '600', textAlign: 'left' }}>
                +1 672-673-0689
              </div>
            </div>
          </div>
        </div>

        {/* 4. 页脚版权信息 */}
        <div style={{
          paddingTop: '1rem',
          borderTop: '1px solid #f1f5f9',
          color: '#0f172a',
          fontWeight: '700',
          fontSize: '0.95rem',
          textAlign: 'left' // 版权信息靠左对齐
        }}>
          Noah MedHub @ 2026
        </div>
      </div>
    </div>
  );
}