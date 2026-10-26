import React, { useState, useEffect } from 'react';
import './App.css'; // <--- 必须加上这一行！否则 CSS 样式不会被打包！
import GetStarted from './GetStarted'; // 引入 GetStarted 弹窗组件
import AboutUs from './AboutUs';       // 引入 AboutUs 弹窗组件
import ContactUs from './ContactUs';   // 引入 ContactUs 弹窗组件
import FAQModal from './FAQModal';     // 引入 FAQ 弹窗组件
import PrivacyPolicy from './PrivacyPolicy'; // 引入 Privacy Policy 弹窗
import CookiePolicy from './CookiePolicy';   // 引入 Cookie Policy 弹窗
import Terms from './Terms';                 // 引入 Terms of Service 弹窗
import RealStories from './RealStories';     // 引入 Real Stories 视频弹窗
import Blogs from './Blogs';                 // 引入 Blogs 博客列表弹窗
import Services from './Services';           // 引入 Services 服务弹窗


// 抽离通用样式，保持组件整洁
const linkStyle = {
  color: '#374151',
  textDecoration: 'none',
  transition: 'color 0.2s',
  cursor: 'pointer'
};

// 默认的回退 Logo SVG (Data URI)
const fallbackLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 110"><path d="M10 65 Q 50 85 90 65 Q 50 75 10 65 Z" fill="%231d4ed8"/><rect x="42" y="10" width="6" height="55" fill="%231d4ed8"/><path d="M50 15 Q 85 20 80 60 Q 55 60 50 15 Z" fill="%2310b981"/><text x="50%" y="100" font-family="sans-serif" font-weight="bold" font-size="12" fill="%230f172a" text-anchor="middle">NOAH Medhub</text></svg>';

export default function App() {
  const [showCookie, setShowCookie] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);     // 控制 Get Started 弹窗显隐
  const [isAboutOpen, setIsAboutOpen] = useState(false);     // 控制 About Us 弹窗显隐
  const [isContactOpen, setIsContactOpen] = useState(false);   // 控制 Contact Us 弹窗显隐
  const [isFaqOpen, setIsFaqOpen] = useState(false);         // 控制 FAQ 弹窗显隐
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);   // 控制 Privacy Policy 弹窗显隐
  const [isCookieOpen, setIsCookieOpen] = useState(false);     // 控制 Cookie Policy 弹窗显隐
  const [isTermsOpen, setIsTermsOpen] = useState(false);       // 控制 Terms of Service 弹窗显隐
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);   // 控制 Real Stories 视频弹窗显隐
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);       // 控制 Blogs 弹窗显隐
  const [isServicesOpen, setIsServicesOpen] = useState(false); // 控制 Services 弹窗显隐
  
  // 检查 localStorage，决定是否弹窗 Cookie 提示
  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_accepted');
    if (!consent) {
      setShowCookie(true);
    }
  }, []);

  // 点击授权按钮保存记录并隐藏弹窗
  const handleCookieConsent = (type) => {
    localStorage.setItem('cookie_consent_accepted', type);
    setShowCookie(false);
  };

  // 当任意弹窗打开时，禁止背景页面滚动
  useEffect(() => {
    if (
      isModalOpen || 
      isAboutOpen || 
      isContactOpen || 
      isFaqOpen || 
      isPrivacyOpen || 
      isCookieOpen || 
      isTermsOpen || 
      isStoriesOpen || 
      isBlogsOpen || 
      isServicesOpen
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [
    isModalOpen, 
    isAboutOpen, 
    isContactOpen, 
    isFaqOpen, 
    isPrivacyOpen, 
    isCookieOpen, 
    isTermsOpen, 
    isStoriesOpen, 
    isBlogsOpen, 
    isServicesOpen
  ]);

  // 处理图片加载失败的回退逻辑
  const handleLogoError = (e) => {
    const target = e.currentTarget;
    target.onerror = null; // 防止死循环
    target.src = fallbackLogo;
  };

  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#111827', margin: 0, padding: 0, width: '100%', boxSizing: 'border-box' }}>
      
      {/* 1. 顶部导航栏 (Navbar) */}
      <header className="app-header" style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.6rem 2.5rem',
        borderBottom: '1px solid #e5e7eb',
        fontSize: '0.92rem',
        fontWeight: '500',
        boxSizing: 'border-box'
      }}>
        {/* Logo 与文字 区域 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/logo.jpg" 
            alt="NOAH Medhub Logo" 
            style={{ 
              height: '68px', 
              width: 'auto', 
              objectFit: 'contain',
              display: 'block'
            }} 
            onError={handleLogoError}
          />
          <span style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#0f172a',
            letterSpacing: '0.5px'
          }}>
            NOAH MEDHUB
          </span>
        </div>

        {/* 导航菜单项 */}
        <nav className="app-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', color: '#374151' }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#consultation" style={linkStyle}>Consultation</a>
          
          {/* 绑定点击事件开启 Services 弹窗 */}
          <span 
            onClick={() => setIsServicesOpen(true)} 
            style={linkStyle}
          >
            Services
          </span>
          
          {/* 绑定点击事件开启 Real Stories 视频弹窗 */}
          <span 
            onClick={() => setIsStoriesOpen(true)} 
            style={linkStyle}
          >
            Real Stories
          </span>

          {/* 绑定点击事件开启 Blogs 弹窗 */}
          <span 
            onClick={() => setIsBlogsOpen(true)} 
            style={linkStyle}
          >
            Blog
          </span>
          
          {/* 绑定点击事件开启 FAQ 弹窗 */}
          <span 
            onClick={() => setIsFaqOpen(true)} 
            style={linkStyle}
          >
            FAQ
          </span>

          {/* 绑定点击事件开启 About Us 弹窗 */}
          <span 
            onClick={() => setIsAboutOpen(true)} 
            style={linkStyle}
          >
            About Us
          </span>

          {/* 绑定点击事件开启 Contact Us 弹窗 */}
          <span 
            onClick={() => setIsContactOpen(true)} 
            style={linkStyle}
          >
            Contact Us
          </span>
        </nav>
      </header>

      {/* 2. 主视觉区 (Hero Section) */}
      <section className="app-hero-section" style={{
        position: 'relative',
        minHeight: '85vh',
        backgroundImage: 'url("/image0.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 2.5rem',
        color: '#ffffff',
        boxSizing: 'border-box'
      }}>
        {/* 居中的 Get Started 按钮容器 */}
        <div className="hero-button-container" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '20rem' 
        }}>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              border: 'none',
              padding: '0.85rem 2.2rem',
              borderRadius: '9999px',
              fontSize: '1.05rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
              zIndex: 10
            }}
          >
            Get Started &rarr;
          </button>
        </div>

        {/* Cookie 提示弹窗 */}
        {showCookie && (
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2.5rem',
            backgroundColor: '#ffffff',
            color: '#111827',
            padding: '1.2rem',
            borderRadius: '16px',
            maxWidth: '310px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
            fontSize: '0.82rem',
            lineHeight: '1.4',
            zIndex: 20
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: '#10b981' }}>⚙</span> Cookie Preferences
            </div>
            <p style={{ color: '#6b7280', margin: '0 0 1rem 0' }}>
              We use cookies to improve your experience. Read our <span onClick={() => setIsCookieOpen(true)} style={{ color: '#10b981', textDecoration: 'underline', cursor: 'pointer' }}>Cookie Policy</span>.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => handleCookieConsent('essential')}
                style={{ flex: 1, padding: '0.45rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#fff', cursor: 'pointer' }}>
                Essential
              </button>
              <button 
                onClick={() => handleCookieConsent('accept_all')}
                style={{ flex: 1, padding: '0.45rem', borderRadius: '8px', border: 'none', backgroundColor: '#10b981', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>
                Accept all
              </button>
            </div>
          </div>
        )}

        {/* 在线客服图标，点击同样开启 Contact Us 弹窗 */}
        <div 
          onClick={() => setIsContactOpen(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2.5rem',
            backgroundColor: '#10b981',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
            cursor: 'pointer',
            zIndex: 100
          }}
        >
          💬
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            backgroundColor: '#ef4444',
            color: '#fff',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            fontSize: '0.7rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>1</span>
        </div>
      </section>

      {/* 3. 底部页脚区域 (Footer Section) */}
      <footer style={{
        padding: '0 0 0 0',
        marginTop: '-7rem',
        width: '100%',
        backgroundColor: '#fbfbfa',
        boxSizing: 'border-box'
      }}>
        <div style={{
          width: '100%',
          backgroundColor: '#0f1412',
          borderRadius: '0',
          padding: '3.5rem 3rem 2.5rem 3rem',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          boxSizing: 'border-box'
        }}>
          <div className="footer-grid-container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            position: 'relative',
            zIndex: 2
          }}>
            {/* 第1列：Logo、社交链接与联系方式 */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <img 
                  src="/logo.jpg" 
                  alt="NOAH MEDHUB" 
                  style={{ height: '28px', width: 'auto', borderRadius: '4px' }} 
                  onError={handleLogoError}
                />
                <span style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '0.5px', color: '#ffffff' }}>
                  NOAH MEDHUB
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem', color: '#9ca3af', fontSize: '0.78rem' }}>
                <span style={{ color: '#9ca3af' }}>Follow us</span>
                <a href="#youtube" style={{ color: '#9ca3af', textDecoration: 'none' }}>▶</a>
                <a href="#tiktok" style={{ color: '#9ca3af', textDecoration: 'none' }}>🎵</a>
                <a href="#instagram" style={{ color: '#9ca3af', textDecoration: 'none' }}>📷</a>
                <a href="#facebook" style={{ color: '#9ca3af', textDecoration: 'none' }}>f</a>
              </div>

              <div style={{ fontSize: '0.78rem', color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontWeight: '600', color: '#e5e7eb', marginBottom: '0.1rem' }}>Contact us</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>💬</span>
                  <span>Chat on WhatsApp<br /><span style={{ color: '#6b7280', fontSize: '0.72rem' }}>+1 206-928-2651</span></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', wordBreak: 'break-all' }}>
                  <span>✉</span>
                  <span>info@noahmedhub.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>📞</span>
                  <span>+1 206-928-2651</span>
                </div>
              </div>

              <div style={{ fontSize: '0.72rem', color: '#4b5563', marginTop: '1.5rem' }}>
                NOAH MEDHUB © 2026
              </div>
            </div>

            {/* 第2列：Explore */}
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.8rem' }}>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.78rem', color: '#9ca3af' }}>
                <li><a href="#home" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a></li>
              </ul>
            </div>

            {/* 第3列：Resources */}
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.8rem' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.78rem', color: '#9ca3af' }}>
                <li>
                  <span 
                    onClick={() => setIsStoriesOpen(true)} 
                    style={{ color: '#9ca3af', cursor: 'pointer' }}
                  >
                    User Stories
                  </span>
                </li>
                <li>
                  <span 
                    onClick={() => setIsBlogsOpen(true)} 
                    style={{ color: '#9ca3af', cursor: 'pointer' }}
                  >
                    Blog
                  </span>
                </li>
                <li>
                  <span 
                    onClick={() => setIsFaqOpen(true)} 
                    style={{ color: '#9ca3af', cursor: 'pointer' }}
                  >
                    FAQ
                  </span>
                </li>
              </ul>
            </div>

            {/* 第4列：Company */}
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.8rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.78rem', color: '#9ca3af' }}>
                <li>
                  <span 
                    onClick={() => setIsAboutOpen(true)} 
                    style={{ color: '#9ca3af', cursor: 'pointer' }}
                  >
                    About Us
                  </span>
                </li>
              </ul>
            </div>

            {/* 第5列：Legal */}
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.8rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.78rem', color: '#9ca3af' }}>
                <li>
                  <span 
                    onClick={() => setIsPrivacyOpen(true)} 
                    style={{ color: '#9ca3af', cursor: 'pointer' }}
                  >
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span 
                    onClick={() => setIsTermsOpen(true)} 
                    style={{ color: '#9ca3af', cursor: 'pointer' }}
                  >
                    Terms of Service
                  </span>
                </li>
                <li>
                  <span 
                    onClick={() => setIsCookieOpen(true)} 
                    style={{ color: '#9ca3af', cursor: 'pointer' }}
                  >
                    Cookie Policy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* 调用 GetStarted 弹窗子组件 */}
      <GetStarted 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* 调用 AboutUs 弹窗子组件 */}
      <AboutUs 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />

      {/* 调用 ContactUs 弹窗子组件 */}
      <ContactUs 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />    

      {/* 调用 FAQModal 弹窗子组件 */}
      <FAQModal 
        isOpen={isFaqOpen} 
        onClose={() => setIsFaqOpen(false)} 
      />

      {/* 调用 PrivacyPolicy 弹窗子组件 */}
      <PrivacyPolicy 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />

      {/* 调用 CookiePolicy 弹窗子组件 */}
      <CookiePolicy 
        isOpen={isCookieOpen} 
        onClose={() => setIsCookieOpen(false)} 
      />

      {/* 调用 Terms 弹窗子组件 */}
      <Terms 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />

      {/* 调用 RealStories 视频弹窗子组件 */}
      <RealStories 
        isOpen={isStoriesOpen} 
        onClose={() => setIsStoriesOpen(false)} 
      />

      {/* 调用 Blogs 弹窗子组件 */}
      <Blogs 
        isOpen={isBlogsOpen} 
        onClose={() => setIsBlogsOpen(false)} 
      />

      {/* 调用 Services 弹窗子组件 */}
      <Services 
        isOpen={isServicesOpen} 
        onClose={() => setIsServicesOpen(false)} 
      />
    </div>
  );
}