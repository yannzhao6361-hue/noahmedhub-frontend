import React, { useState, useEffect } from 'react';

export default function GetStarted({ isOpen, onClose }) {
  // 提交成功状态
  const [isSubmitted, setIsSubmitted] = useState(false);
  // 加载中状态（防止重复点击提交）
  const [loading, setLoading] = useState(false);
  // 错误提示信息
  const [errorMessage, setErrorMessage] = useState('');

  // 表单数据
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // 表单字段验证状态
  const [isValid, setIsValid] = useState(false);

  // 实时校验逻辑
  useEffect(() => {
    const isFirstNameValid = formData.firstName.trim().length > 0;
    const isLastNameValid = formData.lastName.trim().length > 0;
    
    // Email 格式正则验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email.trim());
    
    // 电话号码必须为纯数字，且长度不少于 7 位
    const phoneRegex = /^[0-9]{7,15}$/;
    const isPhoneValid = phoneRegex.test(formData.phone.trim());

    setIsValid(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid);
  }, [formData]);

  // 按 Esc 键关闭弹窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // 输入框变化处理
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // 电话号码仅允许输入数字
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 异步提交表单到后端接口
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || loading) return;

    setLoading(true);
    setErrorMessage('');

    try {
      // 直连后端 WildFly 接口，跳过 Vite 代理层
     // const response = await fetch('http://localhost:8080/noahmedhub/api/users', {
        const response = await fetch('https://noahmedhub-backend.onrender.com/noahmedhub/api/users', {
     method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim()
        }),
      });

      const errorData = await response.json().catch(() => ({}));

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // 捕获后端返回的错误信息（如 "The email or phone number has already been used!"）
        setErrorMessage(
          errorData.message || 
          errorData.error || 
          `提交失败，请稍后重试 (错误码: ${response.status})`
        );
      }
    } catch (error) {
      console.error('Network or Server Error:', error);
      setErrorMessage('网络错误，请检查网络或后端服务');
    } finally {
      setLoading(false);
    }
  };

  // 关闭并重置表单
  const handleClose = () => {
    setIsSubmitted(false);
    setLoading(false);
    setErrorMessage('');
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    onClose();
  };

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
    >
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '460px',
        padding: '2rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        color: '#111827'
      }}>
        {/* 右上角关闭按钮 */}
        <button 
          onClick={handleClose}
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

        {!isSubmitted ? (
          <>
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.6rem', color: '#0f172a' }}>
              Get Started
            </h2>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: '#64748b' }}>
              Please fill in your details to connect with our specialists.
            </p>

            {/* 错误提示展示区域 */}
            {errorMessage && (
              <div style={{
                backgroundColor: '#fef2f2',
                color: '#ef4444',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                marginBottom: '1rem',
                border: '1px solid #fca5a5',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>⚠</span>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* First Name & Last Name */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>First Name *</label>
                  <input 
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Last Name *</label>
                  <input 
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input 
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Phone No. */}
              <div>
                <label style={labelStyle}>Phone No. * (Numbers only)</label>
                <input 
                  type="text"
                  name="phone"
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Submit 按钮 */}
              <button 
                type="submit"
                disabled={!isValid || loading}
                style={{
                  marginTop: '0.8rem',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: (isValid && !loading) ? '#10b981' : '#d1d5db',
                  color: (isValid && !loading) ? '#ffffff' : '#9ca3af',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: (isValid && !loading) ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        ) : (
          /* 提交成功提示 */
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#d1fae5',
              color: '#10b981',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              margin: '0 auto 1.2rem auto'
            }}>
              ✓
            </div>
            <h3 style={{ margin: '0 0 0.8rem 0', fontSize: '1.3rem', color: '#0f172a' }}>Thank you !</h3>
            <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '0.95rem', margin: '0 0 1.8rem 0' }}>
              Our health consultant will contact you as soon as possible.
            </p>
            <button 
              onClick={handleClose}
              type="button"
              style={{
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                padding: '0.65rem 1.8rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 可复用输入框样式
const labelStyle = {
  display: 'block',
  fontSize: '0.82rem',
  fontWeight: '600',
  color: '#374151',
  marginBottom: '0.35rem'
};

const inputStyle = {
  width: '100%',
  padding: '0.65rem 0.8rem',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box'
};