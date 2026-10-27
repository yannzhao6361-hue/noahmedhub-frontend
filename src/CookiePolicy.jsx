import React, { useEffect } from 'react';

export default function CookiePolicy({ isOpen, onClose }) {
  // 支持 ESC 键关闭弹窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
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
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '90%',
          maxWidth: '780px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          padding: '2.5rem 2.5rem 2rem 2.5rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
          textAlign: 'left',
          fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
          color: '#111827'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 右上角关闭按钮 */}
        <button
          onClick={onClose}
          type="button"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            fontSize: '1.8rem',
            color: '#9ca3af',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>

        {/* 标题 */}
        <h1 style={{ 
          margin: '0 0 1rem 0', 
          color: '#0f172a', 
          fontSize: '2rem', 
          fontWeight: '700',
          textAlign: 'left' 
        }}>
          Cookie Policy
        </h1>

        {/* 可滚动文本主体内容 */}
        <div style={{ 
          overflowY: 'auto', 
          paddingRight: '0.75rem', 
          flex: 1, 
          textAlign: 'left',
          fontSize: '0.95rem',
          lineHeight: '1.6'
        }}>
          {/* 元信息区域 */}
          <div style={{ marginBottom: '1.5rem', color: '#1f2937' }}>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Effective Date:</strong> Feb. 27, 2026</p>
            <p style={{ margin: '0 0 1rem 0' }}><strong>Last Updated:</strong> Oct. 28, 2026</p>

            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Operating Entity:</strong> NOAH MEDHUB INC.</p>
 {/* 优化后的结构（可以采用 Flex 左右对齐，或者用换行标签让地址整体缩进对齐） */}
<div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
  <strong style={{ minWidth: '130px', display: 'inline-block' }}>Business Address:</strong>
  <span style={{ lineHeight: '1.5' }}>
    112-970 Burrard Street, Office# 1565,<br />
    Vancouver, BC V6Z 2R4, Canada
  </span>
</div>
             <p style={{ margin: '0 0 1rem 0' }}><strong>Website:</strong> www.noahmedhub.com</p>
          </div>

          {/* 章节 1 */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '1rem' }}>
            1. What are Cookies?
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Cookies are small text files that are placed on your device (computer, smartphone, or other electronic device) when you visit our website. They are widely used to make websites work more efficiently, enhance user experience, and provide operational information to website owners.
          </p>

          {/* 章节 2 */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
            2. How We Use Cookies
          </h2>
          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            We use cookies and similar technologies for the following purposes:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}><strong>Essential Cookies:</strong> These are required for the core operation of our website, such as maintaining security, ensuring stable page navigation, and enabling you to access secure areas of our platform.</li>
            <li style={{ marginBottom: '0.35rem' }}><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and understand how visitors navigate our website. This helps us improve the performance, structure, and user experience of our platform.</li>
            <li style={{ marginBottom: '0.35rem' }}><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website, enabling us to personalize our content for you and remember your preferences (such as your preferred language choice between English and Chinese to facilitate cross-border communication).</li>
            <li style={{ marginBottom: '0.35rem' }}><strong>Targeting/Marketing Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We may use this information to make our website content and any related service updates more relevant to your interests, in accordance with applicable legal requirements.</li>
          </ul>

          {/* 章节 3 */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
            3. Third-Party Cookies
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Please note that trusted third parties (including, for example, website hosting providers, analytics services, or secure communication tools) may also set cookies or tracking technologies over which we have no direct control. These are typically analytical/performance cookies or technical service cookies used to support our platform operations.
          </p>

          {/* 章节 4 */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
            4. Managing Your Cookie Preferences
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, please note that doing so may prevent you from taking full advantage of certain website features or coordination services. You can also customize your preferences through our website settings or cookie management banner where available.
          </p>

          {/* 章节 5 */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
            5. Contact Us
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you have any questions, concerns, or requests regarding our use of cookies or this Cookie Policy, please contact our privacy team:
          </p>
          <div style={{ margin: '0 0 1rem 0', color: '#374151', lineHeight: '1.7' }}>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Privacy Contact:</strong> Yu, Jennifer</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Company:</strong> Noah MedHub Inc.</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Email:</strong> info@noahmedhub.com</p>
{/* Mailing Address 左右对齐布局 */}
<div style={{ display: 'flex', alignItems: 'flex-start', margin: '0.4rem 0' }}>
  <strong style={{ minWidth: '140px', display: 'inline-block' }}>Mailing Address:</strong>
  <span style={{ lineHeight: '1.5' }}>
    112-970 Burrard Street, Office# 1565,<br />
    Vancouver, BC V6Z 2R4, Canada
  </span>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}