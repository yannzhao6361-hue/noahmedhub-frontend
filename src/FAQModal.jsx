import React, { useState, useEffect } from 'react';

export default function FAQModal({ isOpen, onClose }) {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  
  // 新增：搜索关键字状态
  const [searchQuery, setSearchQuery] = useState('');

  // 1. 弹窗打开时加载后端 FAQ 数据
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError('');
      setSearchQuery(''); // 每次打开重置搜索框
      setOpenIndex(null);
      fetch('http://localhost:8080/noahmedhub/api/faq')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch FAQ data');
          return res.json();
        })
        .then((data) => {
          const cleanedData = data.map(item => ({
            ...item,
            answer: item.answer ? item.answer.replace(/\/n/g, '\n') : ''
          }));
          setFaqs(cleanedData);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to load FAQ list. Please try again later.');
          setLoading(false);
        });
    }
  }, [isOpen]);

  // 2. 支持 ESC 键关闭
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // 根据搜索框输入的字符动态过滤 question（忽略大小写）
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          textAlign: 'left'
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

        {/* 弹窗大标题 */}
        <h2 style={{ 
          margin: '0 0 1rem 0', 
          color: '#1e293b', 
          fontSize: '1.6rem', 
          fontWeight: '500', 
          fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
          textAlign: 'left' 
        }}>
          Frequently Asked Questions
        </h2>

        {/* 搜索框区域 */}
        <div style={{ marginBottom: '1.2rem' }}>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null); // 搜索时收起已展开项，避免错位
            }}
            style={{
              width: '100%',
              padding: '0.65rem 1rem',
              fontSize: '0.95rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#10b981'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </div>

        {/* 滚动区域 */}
        <div style={{ overflowY: 'auto', paddingRight: '0.5rem', flex: 1, textAlign: 'left' }}>
          {loading && <div style={{ color: '#6b7280', padding: '1rem 0', textAlign: 'left' }}>Loading FAQ...</div>}
          {error && <div style={{ color: '#ef4444', padding: '1rem 0', textAlign: 'left' }}>{error}</div>}

          {!loading && !error && filteredFaqs.length === 0 && (
            <div style={{ color: '#6b7280', padding: '1rem 0', textAlign: 'left' }}>No matching questions found.</div>
          )}

          {!loading &&
            filteredFaqs.map((faq, index) => {
              const isItemOpen = openIndex === index;
              const isHovered = hoverIndex === index;

              return (
                <div
                  key={faq.id || index}
                  style={{
                    borderBottom: '1px solid #e5e7eb',
                    padding: '1.2rem 0',
                    textAlign: 'left'
                  }}
                >
                  {/* 问题标题区 */}
                  <div
                    onClick={() => toggleQuestion(index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      gap: '1rem',
                      textAlign: 'left'
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '1.2rem',
                        fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                        fontWeight: '500',
                        color: isHovered ? '#10b981' : '#2d3748',
                        lineHeight: '1.4',
                        textAlign: 'left',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <span
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: '300',
                        color: isHovered ? '#059669' : '#10b981',
                        userSelect: 'none',
                        minWidth: '24px',
                        textAlign: 'right',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {isItemOpen ? '−' : '+'}
                    </span>
                  </div>

                  {/* 对应回答内容 */}
                  {isItemOpen && (
                    <div
                      style={{
                        marginTop: '1rem',
                        color: '#475569',
                        fontSize: '0.95rem',
                        lineHeight: '1.65',
                        textAlign: 'left'
                      }}
                    >
                      {faq.answer.split('\n').map((paragraph, pIdx) => (
                        paragraph.trim() !== '' ? (
                          <p 
                            key={pIdx} 
                            style={{ 
                              margin: '0 0 0.75rem 0', 
                              textAlign: 'left' 
                            }}
                          >
                            {paragraph}
                          </p>
                        ) : null
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}