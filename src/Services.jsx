import React, { useEffect } from 'react';

export default function Services({ isOpen, onClose }) {
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
          maxWidth: '850px',
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
          margin: '0 0 0.5rem 0', 
          color: '#0f172a', 
          fontSize: '2rem', 
          fontWeight: '700',
          textAlign: 'left' 
        }}>
          Our Cross-Border Medical Services
        </h1>
        <p style={{ margin: '0 0 1.5rem 0', color: '#6b7280', fontSize: '0.95rem' }}>
          Comprehensive end-to-end coordination bridging North America and premier healthcare centers in China.
        </p>

        {/* 可滚动文本主体内容 */}
        <div style={{ 
          overflowY: 'auto', 
          paddingRight: '0.75rem', 
          flex: 1, 
          textAlign: 'left',
          fontSize: '0.95rem',
          lineHeight: '1.6'
        }}>
          {/* Section 1: Before Care */}
          <div style={{ 
            marginBottom: '1.8rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '12px', 
            padding: '1.5rem',
            backgroundColor: '#f8fafc' 
          }}>
            <h2 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '700', 
              color: '#0f172a', 
              margin: '0 0 0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#10b981' }}>📋</span> 1. Before Care (诊前协调与筹备)
            </h2>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#374151', lineHeight: '1.8' }}>
              <li><strong>Initial Consultation & Record Review:</strong> 初步需求沟通与病历资料梳理</li>
              <li><strong>Hospital & Specialist Matching:</strong> 匹配中国三甲医院及知名专家/中医名家</li>
              <li><strong>Medical Record Translation:</strong> 协助整理病史并提供专业双语医学翻译</li>
              <li><strong>Appointment & Consultation Scheduling:</strong> 协调专家门诊、远程会诊与住院预约</li>
              <li><strong>Medical Visa & Logistics Planning:</strong> 医疗签证邀请函协助与赴华行程规划</li>
            </ul>
          </div>

          {/* Section 2: During Care */}
          <div style={{ 
            marginBottom: '1.8rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '12px', 
            padding: '1.5rem',
            backgroundColor: '#f8fafc' 
          }}>
            <h2 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '700', 
              color: '#0f172a', 
              margin: '0 0 0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#10b981' }}>🏥</span> 2. During Care (诊中陪护与协助)
            </h2>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#374151', lineHeight: '1.8' }}>
              <li><strong>Arrival Reception & Airport Transfer:</strong> 抵达接机与当地交通、入住协助</li>
              <li><strong>Hospital Admission & Administrative Support:</strong> 协助办理医院挂号、住院手续与缴费流程</li>
              <li><strong>Bilingual Medical Escort & Interpretation:</strong> 专属双语医疗陪同，保障诊疗全过程无障碍沟通</li>
              <li><strong>Doctor-Patient Communication Bridge:</strong> 准确传达医嘱与患者需求，协助沟通治疗方案</li>
              <li><strong>Medication, Diagnostics & Daily Guidance:</strong> 检查取报告、拿药及住院期间日常生活协助</li>
            </ul>
          </div>

          {/* Section 3: After Care */}
          <div style={{ 
            marginBottom: '1rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '12px', 
            padding: '1.5rem',
            backgroundColor: '#f8fafc' 
          }}>
            <h2 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '700', 
              color: '#0f172a', 
              margin: '0 0 0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#10b981' }}>🌱</span> 3. After Care (诊后康复与追踪)
            </h2>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#374151', lineHeight: '1.8' }}>
              <li><strong>Postoperative & TCM Rehabilitation Guidance:</strong> 术后康复与中医药调理方案整理及指导</li>
              <li><strong>Discharge Summary & Prescription Translation:</strong> 出院小结、复查计划及随访医嘱整理</li>
              <li><strong>Remote Follow-up Consultations:</strong> 协助与中国主治医生/专家进行远程复诊沟通</li>
              <li><strong>Local Care Coordination in North America:</strong> 协助与北美本地家庭医生/医疗机构衔接病历</li>
              <li><strong>Revisit Scheduling & Long-Term Health Records:</strong> 再次赴华复诊预约与长期健康档案整理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}