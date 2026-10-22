import React, { useState, useEffect } from 'react';

export default function Blogs({ isOpen, onClose }) {
  // 包含对应 Word 完整内容的博客数据
  const blogsData = [
    {
      id: 1,
      image: '/blogs/a1.png',
      title: 'A Complete Guide to Post-Surgical Recovery and Support',
      fileName: 'A Complete Guide to Post-Surgical Recovery.docx',
      paragraphs: [
        "Undergoing surgery is a significant milestone, and the journey toward full recovery requires careful planning, proper nutrition, and structured support. For international patients seeking medical procedures in China, navigating the post-surgical phase in an unfamiliar environment can present unique challenges.",
        "1. Immediate Post-Operative Care and Hospital Guidance",
        "Following your procedure, your primary medical team will provide discharge summaries, medication schedules, and specific activity restrictions. It is vital to adhere closely to these guidelines. Our coordination team helps translate and clarify all doctor's instructions to ensure seamless communication.",
        "2. Managing Recovery Outside the Hospital",
        "Transitioning from the hospital to a hotel or recovery residence requires careful attention to rest, wound care, and follow-up check-ups. Having bilingual local support helps make transportation to follow-up visits stress-free and efficient.",
        "3. Nutrition and Lifestyle Adjustments",
        "Healing is accelerated by a balanced diet and adequate rest. Local dietary options can be aligned with your clinical requirements to support optimal recovery during your stay in China."
      ]
    },
    {
      id: 2,
      image: '/blogs/a2.png',
      title: 'China Medical Innovations and Advanced Technologies',
      fileName: 'China_Medical_Innovations.docx',
      paragraphs: [
        "China has emerged as a global leader in medical innovation, integrating artificial intelligence, advanced surgical robotics, and state-of-the-art diagnostic imaging into daily clinical practice.",
        "1. Cutting-Edge Diagnostic Tools",
        "Modern hospitals in China utilize high-resolution imaging, AI-assisted pathology screening, and precise genetic profiling to deliver accurate evaluations quickly and efficiently.",
        "2. Minimally Invasive and Robotic Surgery",
        "From advanced laparoscopic systems to precision robotic-assisted surgeries, premier medical centers offer procedures designed to minimize trauma, reduce hospital stays, and accelerate healing times.",
        "3. Bridging Tradition with High-Tech Medicine",
        "The unique strength of China's healthcare ecosystem lies in its ability to combine ultra-modern medical technology with evidence-based traditional therapeutic modalities for comprehensive patient outcomes."
      ]
    },
    {
      id: 3,
      image: '/blogs/a3.png',
      title: 'Traditional Chinese Medicine for Chronic Care and Wellness',
      fileName: 'Traditional Chinese Medicine for Chronic Care.docx',
      paragraphs: [
        "Traditional Chinese Medicine (TCM) offers a holistic approach to chronic disease management, focusing on symptom relief, functional improvement, and overall quality of life.",
        "Chronic illnesses can affect far more than physical health. Persistent pain, fatigue, digestive discomfort, and sleep disturbances often interfere with daily life. TCM complements conventional medical care by tailoring individualized herbal remedies, acupuncture, and lifestyle guidance.",
        "1. Autoimmune Diseases and Chronic Inflammation",
        "TCM therapies aim to modulate immune responses and reduce chronic inflammatory symptoms naturally, supporting long-term bodily balance.",
        "2. Holistic Patient-Centric Evaluation",
        "Rather than focusing solely on an isolated symptom, TCM practitioners consider physical function, emotional well-being, and lifestyle to build personalized recovery paths."
      ]
    },
    {
      id: 4,
      image: '/blogs/a4.png',
      title: 'Why More International Patients Are Choosing China for Care',
      fileName: 'Why More International Patients Are Choosing China.docx',
      paragraphs: [
        "In recent years, an increasing number of international patients have looked toward China for specialized medical treatments, second opinions, and comprehensive wellness programs.",
        "1. World-Class Specialist Expertise",
        "China's top-tier tier-three Class A hospitals house internationally trained specialists with vast clinical experience in oncology, cardiology, orthopedics, and traditional medicine integration.",
        "2. Reduced Waiting Times and Efficient Scheduling",
        "Unlike healthcare systems plagued by months of backlog, medical coordination platforms in China facilitate prompt appointment booking, diagnostic testing, and specialist consultations.",
        "3. Comprehensive End-to-End Support",
        "From medical record translation to local escorts and accommodation coordination, patients receive personalized assistance at every step of their cross-border journey."
      ]
    },
    {
      id: 5,
      image: '/blogs/a5.png',
      title: 'Why Should You Choose a Vancouver-Based Coordination Agency?',
      fileName: 'Why should you choose a Vancouver-based agency.docx',
      paragraphs: [
        "When organizing cross-border medical care in Asia, having a trusted coordination partner based locally in North America provides unmatched peace of mind and convenience.",
        "1. Seamless Communication Across Time Zones",
        "Operating out of Vancouver, BC, Noah Medhub bridges the cultural and geographical gap, allowing patients in North America to consult, plan, and organize their medical journey without communication friction.",
        "2. Personalized Local Consultation",
        "Before embarking on international travel, patients can discuss their needs, review medical records, and clarify administrative procedures face-to-face or via secure digital channels in their local time zone.",
        "3. Trusted Advocacy and Oversight",
        "We act as your dedicated liaison, ensuring your medical history, preferences, and logistical requirements are accurately represented and managed throughout your care in China."
      ]
    }
  ];

  const [activeBlogId, setActiveBlogId] = useState(null);

  // 支持 ESC 键关闭弹窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setActiveBlogId(null);
    onClose();
  };

  const toggleBlog = (id) => {
    setActiveBlogId(activeBlogId === id ? null : id);
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
        zIndex: 1000,
      }}
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '90%',
          maxWidth: '900px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          padding: '2.5rem 2rem 2rem 2.5rem',
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
          onClick={handleClose}
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
          margin: '0 0 1.5rem 0', 
          color: '#0f172a', 
          fontSize: '2rem', 
          fontWeight: '700',
          textAlign: 'left' 
        }}>
          Blogs & Articles
        </h1>

        {/* 列表显示区域 */}
        <div style={{ 
          overflowY: 'auto', 
          paddingRight: '0.75rem', 
          flex: 1, 
          textAlign: 'left',
          fontSize: '0.95rem',
          lineHeight: '1.6'
        }}>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            Click on any image or article title below to expand and read the full document content:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {blogsData.map((blog) => {
              const isExpanded = activeBlogId === blog.id;
              return (
                <div 
                  key={blog.id}
                  style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '1.2rem',
                    backgroundColor: isExpanded ? '#f8fafc' : '#ffffff',
                    boxShadow: isExpanded ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* 图片 + 标题展示栏（点击展开/折叠） */}
                  <div 
                    onClick={() => toggleBlog(blog.id)}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1.2rem', 
                      cursor: 'pointer' 
                    }}
                  >
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      style={{ 
                        width: '120px', 
                        height: '80px', 
                        objectFit: 'cover', 
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        flexShrink: 0
                      }} 
                    />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        margin: '0 0 0.4rem 0', 
                        fontSize: '1.05rem', 
                        fontWeight: '600', 
                        color: isExpanded ? '#10b981' : '#1e293b' 
                      }}>
                        {blog.title}
                      </h3>
                      <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>📄 {blog.fileName}</span>
                        <span>•</span>
                        <span style={{ color: '#10b981', fontWeight: '500' }}>
                          {isExpanded ? '▲ Click to collapse document' : '▼ Click to read full document'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 展开后的完整 Word 文章内容区域（自带独立滚动条或跟随弹窗滚动） */}
                  {isExpanded && (
                    <div style={{ 
                      marginTop: '1.2rem', 
                      padding: '1.5rem', 
                      backgroundColor: '#ffffff', 
                      borderRadius: '8px', 
                      border: '1px solid #e2e8f0',
                      color: '#334155',
                      fontSize: '0.95rem',
                      lineHeight: '1.8',
                    }}>
                      <div style={{ 
                        fontWeight: '700', 
                        marginBottom: '1rem', 
                        color: '#0f172a', 
                        fontSize: '1.1rem',
                        borderBottom: '2px solid #10b981',
                        paddingBottom: '0.4rem'
                      }}>
                        📖 Full Document Content: {blog.fileName}
                      </div>
                      
                      {/* 循环渲染文章的所有段落 */}
                      {blog.paragraphs.map((para, index) => (
                        <p key={index} style={{ margin: '0 0 1rem 0', color: '#374151' }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}