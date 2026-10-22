import React, { useEffect, useRef } from 'react';

export default function RealStories({ isOpen, onClose }) {
  const videoRef = useRef(null);

  // 支持 ESC 键关闭弹窗
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // 当弹窗关闭时自动暂停视频
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
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
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: '#0f172a',
          borderRadius: '16px',
          width: '90%',
          maxWidth: '860px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          padding: '1.5rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 右上角关闭按钮 */}
        <button
          onClick={handleClose}
          type="button"
          style={{
            position: 'absolute',
            top: '0.8rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            color: '#9ca3af',
            cursor: 'pointer',
            zIndex: 10,
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {/* 标题 */}
        <h2 style={{ 
          margin: '0 0 1rem 0', 
          color: '#ffffff', 
          fontSize: '1.5rem', 
          fontWeight: '700',
          textAlign: 'left' 
        }}>
          Real Stories
        </h2>

        {/* 视频播放器 */}
        <div style={{
          width: '100%',
          backgroundColor: '#000000',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <video
            ref={videoRef}
            src="/v001.mp4"
            controls
            autoPlay
            style={{
              width: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              display: 'block'
            }}
          >
            您的浏览器不支持 HTML5 视频播放。
          </video>
        </div>
      </div>
    </div>
  );
}