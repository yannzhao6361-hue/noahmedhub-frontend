import React, { useEffect } from 'react';

export default function PrivacyPolicy({ isOpen, onClose }) {
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
          Privacy Policy
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

            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Website:</strong> www.noahmedhub.com</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Operating Entity:</strong> NOAH MEDHUB INC.</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Contact Email:</strong> yannzhao@hotmail.com</p>

{/* 修改前的单行长文本可能导致错位 */}
{/* <p><strong>Business Address:</strong> 112-970 Burrard Street, Office# 1565, Vancouver, BC V6Z 2R4, Canada</p> */}

{/* 优化后的结构（可以采用 Flex 左右对齐，或者用换行标签让地址整体缩进对齐） */}
<div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
  <strong style={{ minWidth: '130px', display: 'inline-block' }}>Business Address: &nbsp;</strong>
  <span style={{ lineHeight: '1.5' }}>
    112-970 Burrard Street, Office# 1565,<br />
    Vancouver, BC V6Z 2R4, Canada
  </span>
</div>
          </div>

          {/* 章节 1 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '1.5rem', 
            marginBottom: '1rem' 
          }}>
            1. Introduction
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            NOAH MEDHUB INC. (“we,” “us,” or “our”) is a Vancouver-based cross-border medical service coordination platform that helps international patients explore and organize their medical journeys in China.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We understand that seeking medical services in another country involves sharing highly personal information, including medical records, personal circumstances, travel plans, and family information. We recognize that protecting this information is essential to maintaining our patients’ trust.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our team’s experience living and working in both Canada and China informs our approach to cross-border communication, cultural understanding, and patient privacy.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you visit our website, contact us, request our services, or participate in a medical journey coordinated by us.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We aim to handle personal information responsibly, transparently, and only for appropriate purposes, in accordance with applicable privacy laws.
          </p>

          {/* 重要声明子块 */}
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ 
              fontSize: '1.05rem', 
              fontWeight: '700', 
              color: '#111827', 
              margin: '0 0 0.5rem 0' 
            }}>
              Important distinction:
            </h3>
            <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
              We provide medical journey coordination and related administrative and logistical support. We do not diagnose medical conditions, prescribe medication, perform medical procedures, or provide medical treatment. Medical decisions and treatment are the responsibility of appropriately qualified healthcare professionals and healthcare institutions.
            </p>
          </div>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            By using our website or services, you acknowledge that you have had an opportunity to review this Privacy Policy. Where consent is required, we will seek it separately and in an appropriate manner. Using our website does not automatically constitute consent to every type of personal information processing described here.
          </p>

          {/* 章节 2 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            2. Personal Information We Collect
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            The information we collect depends on the services you request and your interactions with us.
          </p>

          {/* 2.1 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            2.1 Identification and Contact Information
          </h3>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>We may collect:</p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Full name and preferred form of address.</li>
            <li style={{ marginBottom: '0.35rem' }}>Email address and telephone number.</li>
            <li style={{ marginBottom: '0.35rem' }}>Country or region of residence.</li>
            <li style={{ marginBottom: '0.35rem' }}>Preferred language, including English or Chinese.</li>
            <li style={{ marginBottom: '0.35rem' }}>Contact preferences and communication history.</li>
            <li style={{ marginBottom: '0.35rem' }}>Emergency contact information, where appropriate and authorized.</li>
          </ul>

          {/* 2.2 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            2.2 Medical and Health-Related Information
          </h3>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            If you request medical journey coordination, you may choose to provide information relevant to arranging consultations or communicating with healthcare providers, including:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Medical history and summaries prepared by you or your healthcare providers.</li>
            <li style={{ marginBottom: '0.35rem' }}>Existing diagnoses and reported symptoms.</li>
            <li style={{ marginBottom: '0.35rem' }}>Medical examination results, laboratory reports, imaging reports, and pathology reports.</li>
            <li style={{ marginBottom: '0.35rem' }}>Medication lists, allergies, and previous treatment records.</li>
            <li style={{ marginBottom: '0.35rem' }}>Medical documents requiring translation or organization.</li>
            <li style={{ marginBottom: '0.35rem' }}>Questions or concerns you wish to communicate to a healthcare provider.</li>
            <li style={{ marginBottom: '0.35rem' }}>Relevant information about accessibility or assistance requirements.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Medical and health-related information is sensitive personal information. We will seek the consent required by applicable law before collecting, using, or disclosing such information and will limit our handling of it to appropriate and specified purposes.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Please provide only information reasonably necessary for the services you request.
          </p>

          {/* 非医疗提供方强调 */}
          <div style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
            <h3 style={{ 
              fontSize: '1.05rem', 
              fontWeight: '700', 
              color: '#111827', 
              margin: '0 0 0.5rem 0' 
            }}>
              We are not a medical provider.
            </h3>
            <p style={{ margin: 0, color: '#374151' }}>
              Our receipt or translation of medical records does not constitute a medical assessment, diagnosis, treatment recommendation, or clinical second opinion.
            </p>
          </div>

          {/* 2.3 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.5rem', 
            marginBottom: '0.75rem' 
          }}>
            2.3 Travel and Medical Journey Information
          </h3>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            Where relevant to your requested services, we may collect:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Proposed travel dates and destination cities.</li>
            <li style={{ marginBottom: '0.35rem' }}>Appointment schedules and hospital visit arrangements.</li>
            <li style={{ marginBottom: '0.35rem' }}>Accommodation and transportation preferences.</li>
            <li style={{ marginBottom: '0.35rem' }}>Accessibility and language assistance requirements.</li>
            <li style={{ marginBottom: '0.35rem' }}>Passport or identity document information when genuinely necessary for an agreed arrangement.</li>
            <li style={{ marginBottom: '0.35rem' }}>Booking details and other information needed to coordinate travel-related services.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We will not request identity documents or other sensitive information merely because they might be useful. We will explain the purpose of collecting such information when it is requested.
          </p>

          {/* 2.4 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.5rem', 
            marginBottom: '0.75rem' 
          }}>
            2.4 Communications and Service Records
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may retain information you provide when communicating with us through email, telephone, messaging applications, website forms, video meetings, or other agreed channels.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            This may include your inquiries, service preferences, consent records, coordination instructions, complaints, and feedback.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you communicate with us through a third-party messaging platform, that platform may separately collect and process information under its own privacy policy.
          </p>

          {/* 2.5 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.5rem', 
            marginBottom: '0.75rem' 
          }}>
            2.5 Website and Technical Information
          </h3>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            When you visit our website, we or our service providers may collect certain technical information, such as:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>IP address and approximate location derived from it.</li>
            <li style={{ marginBottom: '0.35rem' }}>Browser type, device type, and operating system.</li>
            <li style={{ marginBottom: '0.35rem' }}>Pages visited, referring pages, and interaction information.</li>
            <li style={{ marginBottom: '0.35rem' }}>Website security logs and diagnostic information.</li>
            <li style={{ marginBottom: '0.35rem' }}>Cookie and analytics information, where applicable.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We use this information for website operation, security, troubleshooting, and, where appropriately configured and permitted, website analytics.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our website will explain the use of non-essential cookies or similar technologies where required. You may be able to manage these technologies through your browser or our cookie settings.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We do not intentionally use website analytics to collect medical records or sensitive health information.
          </p>

          {/* 章节 3 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            3. How We Use Personal Information
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may use personal information for the following purposes:
          </p>

          {/* 3.1 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            3.1 Responding to Inquiries
          </h3>

          <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Responding to your questions about our services.</li>
            <li style={{ marginBottom: '0.35rem' }}>Understanding your general medical journey coordination needs.</li>
            <li style={{ marginBottom: '0.35rem' }}>Communicating service scope, procedures, fees, and next steps.</li>
          </ul>

          {/* 3.2 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            3.2 Coordinating Medical Journey Services
          </h3>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            Where requested and authorized, we may use relevant information to:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Organize and translate medical documents.</li>
            <li style={{ marginBottom: '0.35rem' }}>Communicate administrative requests to selected hospitals or healthcare providers.</li>
            <li style={{ marginBottom: '0.35rem' }}>Coordinate appointments and consultations.</li>
            <li style={{ marginBottom: '0.35rem' }}>Arrange bilingual assistance and local medical escorts.</li>
            <li style={{ marginBottom: '0.35rem' }}>Coordinate transportation, accommodation, and travel agencies.</li>
            <li style={{ marginBottom: '0.35rem' }}>Communicate appointment schedules and logistical instructions.</li>
            <li style={{ marginBottom: '0.35rem' }}>Organize medical documents and discharge information for your records.</li>
            <li style={{ marginBottom: '0.35rem' }}>Coordinate administrative follow-up with relevant service providers.</li>
          </ul>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Our role is to facilitate communication and arrangements. We do not independently determine which treatment is clinically appropriate for you.
          </p>

          {/* 3.3 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            3.3 Service Administration
          </h3>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            We may use personal information to:
          </p>
          <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Prepare service proposals and invoices.</li>
            <li style={{ marginBottom: '0.35rem' }}>Manage payments and bookings.</li>
            <li style={{ marginBottom: '0.35rem' }}>Maintain service records and document your instructions.</li>
            <li style={{ marginBottom: '0.35rem' }}>Handle complaints and resolve disputes.</li>
            <li style={{ marginBottom: '0.35rem' }}>Improve our coordination procedures and service quality.</li>
          </ul>

          {/* 3.4 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            3.4 Website Security and Legal Compliance
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may process information to protect our website, detect suspected fraud or misuse, comply with legal obligations, respond to lawful requests, and establish or defend legal claims where appropriate.
          </p>

          {/* 3.5 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            3.5 Marketing and Optional Communications
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may occasionally wish to send educational articles, service updates, or other marketing communications.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We will obtain consent where required by law and provide an appropriate way to unsubscribe. Your decision not to receive marketing communications will not affect your ability to request our core services.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We do not use sensitive medical information to target marketing communications without an appropriate legal basis and any consent required by law.
          </p>

          {/* 章节 4 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            4. Consent and Your Choices
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We seek to handle personal information with your knowledge and, where required, your consent.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            For sensitive medical information, we will provide relevant information about why it is needed, how it may be used, and who may receive it. Where applicable law requires separate or express consent, we will obtain it before proceeding.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            For example, before sharing medical records with a hospital in China, we will seek appropriate authorization identifying the intended recipient or recipients, the purpose of sharing, and the information involved, as required by applicable law.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You may decline to provide certain information or withdraw consent where permitted by law. However, doing so may prevent us from arranging some or all of the services you requested.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Withdrawal of consent does not invalidate processing that was lawfully conducted before withdrawal. We may also retain or process certain information where legally permitted or required.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We will explain the practical consequences of a consent withdrawal when relevant.
          </p>

          {/* 章节 5 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            5. Disclosure to Hospitals and Other Service Providers
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We do not disclose personal information indiscriminately. We share information only when reasonably necessary for an authorized purpose, with appropriate safeguards and a lawful basis.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Depending on the services you request, recipients may include:
          </p>

          {/* 5.1 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            5.1 Hospitals and Healthcare Professionals in China
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            With your appropriate authorization, we may share relevant medical records, translated documents, contact details, and appointment information with a hospital, clinic, specialist, or other healthcare provider you have selected or authorized us to contact.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            The receiving healthcare provider may independently collect and process your information under its own policies and applicable laws.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We do not control every aspect of a healthcare provider’s privacy practices. Before you proceed, we encourage you to review the provider’s privacy arrangements and understand how it will handle your information.
          </p>

          {/* 5.2 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            5.2 Medical Escorts and Translation Personnel
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may provide authorized personnel with the information they need to perform their assigned tasks, such as helping you navigate a hospital, communicating administrative instructions, or handling approved documents.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Access should be limited to what is necessary for the assigned role. Medical escorts and translators do not automatically receive access to your entire medical history.
          </p>

          {/* 5.3 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            5.3 Travel Agencies and Other Logistics Providers
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you ask us to arrange travel or local support, we may share necessary booking information with selected travel agencies, transportation providers, accommodation providers, or other relevant service partners.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We aim to avoid sharing medical details with travel providers unless the information is genuinely necessary, appropriate, and authorized.
          </p>

          {/* 5.4 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            5.4 Technology and Administrative Service Providers
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may use third-party providers for website hosting, secure document storage, communication, scheduling, payment processing, and other business functions.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            These providers may process personal information on our behalf. Where appropriate, we use contractual and other safeguards to restrict their use of information to authorized purposes.
          </p>

          {/* 5.5 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            5.5 Legal and Regulatory Disclosures
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may disclose information where required or permitted by applicable law, a valid legal process, or a lawful request from an authorized authority.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Where legally permitted and appropriate, we will limit the information disclosed to what is required.
          </p>

          {/* 5.6 */}
          <h3 style={{ 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginTop: '1.25rem', 
            marginBottom: '0.75rem' 
          }}>
            5.6 No Unrelated Sale of Medical Information
          </h3>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We do not sell patients’ medical records or sensitive health information to advertisers or data brokers.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We do not disclose medical information to unrelated third parties for their independent marketing purposes without the appropriate legal basis and consent required by applicable law.
          </p>

          {/* 章节 6 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            6. Cross-Border Processing and International Data Transfers
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our services involve coordination between Canada and China. Consequently, personal information may be accessed, processed, or transferred across national borders when necessary for the services you request.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            For example, if you authorize us to coordinate a hospital appointment in China, relevant medical documents may need to be sent to the selected hospital or an authorized recipient in China.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Depending on our technology arrangements and service providers, information may also be processed or stored in other countries.
          </p>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            Before a relevant transfer, we will take steps appropriate to the circumstances and applicable law, which may include:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Identifying the intended recipient and the purpose of the transfer.</li>
            <li style={{ marginBottom: '0.35rem' }}>Obtaining the consent or authorization required by law.</li>
            <li style={{ marginBottom: '0.35rem' }}>Limiting the information transferred to what is necessary.</li>
            <li style={{ marginBottom: '0.35rem' }}>Using contractual safeguards and appropriate security measures.</li>
            <li style={{ marginBottom: '0.35rem' }}>Assessing applicable restrictions on international data transfers.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Different countries have different privacy laws and legal procedures. Information transferred to another country may be subject to the laws of that country and lawful access by its authorities.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We will not represent that all information remains in Canada unless our actual storage and access arrangements support that statement.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Where applicable law requires specific notices, transfer mechanisms, assessments, or additional consent, we will address those requirements before making the relevant transfer.
          </p>

          {/* 章节 7 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            7. How We Protect Personal Information
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We recognize the sensitive nature of medical information and seek to maintain reasonable administrative, technical, and organizational safeguards appropriate to the information we handle.
          </p>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            Depending on the systems and services in use, safeguards may include:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Restricting access to personnel who need information for authorized duties.</li>
            <li style={{ marginBottom: '0.35rem' }}>Using access controls and authentication measures.</li>
            <li style={{ marginBottom: '0.35rem' }}>Using secure transfer methods for medical documents where available.</li>
            <li style={{ marginBottom: '0.35rem' }}>Maintaining appropriate confidentiality obligations for personnel and service providers.</li>
            <li style={{ marginBottom: '0.35rem' }}>Reviewing third-party services that handle sensitive information.</li>
            <li style={{ marginBottom: '0.35rem' }}>Providing staff guidance on confidentiality and responsible information handling.</li>
            <li style={{ marginBottom: '0.35rem' }}>Maintaining appropriate procedures for responding to suspected privacy incidents.</li>
            <li style={{ marginBottom: '0.35rem' }}>Securely deleting or de-identifying information when appropriate and permitted.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We aim to collect only the information needed for a defined purpose and to avoid unnecessary circulation of medical records.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            However, no website, electronic communication method, or storage system can be guaranteed to be completely secure. We therefore cannot promise absolute security.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            If a privacy incident occurs, we will take appropriate steps to investigate, reduce potential harm, and provide notifications where required by applicable law.
          </p>

          {/* 章节 8 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            8. Retention and Deletion of Information
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, subject to legal, contractual, operational, and dispute-resolution requirements.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Retention periods may differ depending on the information involved.
          </p>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            For example:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>General inquiries may be retained for a period appropriate to managing and responding to the inquiry.</li>
            <li style={{ marginBottom: '0.35rem' }}>Medical journey coordination records may be retained while a service is active and for an appropriate period afterward.</li>
            <li style={{ marginBottom: '0.35rem' }}>Consent and authorization records may be retained to document the permissions under which information was handled.</li>
            <li style={{ marginBottom: '0.35rem' }}>Financial and transaction records may be retained for periods required by applicable law.</li>
            <li style={{ marginBottom: '0.35rem' }}>Website security records may be retained according to operational and security requirements.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            When information is no longer needed, we will take appropriate steps to delete it, destroy it, or de-identify it, subject to applicable legal requirements and legitimate retention needs.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            You may contact us to request deletion of your personal information. We will assess the request under applicable law and explain any relevant limitations.
          </p>

          {/* 章节 9 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            9. Your Privacy Rights
          </h2>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            Depending on the laws that apply to you and our processing activities, you may have rights that include:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Requesting access to personal information we hold about you.</li>
            <li style={{ marginBottom: '0.35rem' }}>Requesting corrections to inaccurate or incomplete information.</li>
            <li style={{ marginBottom: '0.35rem' }}>Asking questions about how your information is collected, used, stored, or disclosed.</li>
            <li style={{ marginBottom: '0.35rem' }}>Withdrawing consent where permitted by law.</li>
            <li style={{ marginBottom: '0.35rem' }}>Requesting deletion or restriction of certain processing where legally available.</li>
            <li style={{ marginBottom: '0.35rem' }}>Requesting information about relevant recipients or cross-border handling, where applicable.</li>
            <li style={{ marginBottom: '0.35rem' }}>Making a privacy complaint to us or to an appropriate privacy regulator.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            To exercise a right, contact us using the details in Section 15.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may need to verify your identity before responding. If you are acting for another person, we may request evidence of your authority to do so.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We will respond within the time required by applicable law. Some requests may be limited by legal obligations, the rights of other individuals, or other lawful exceptions.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            If we cannot fulfill a request in full, we will explain the reasons to the extent required by law.
          </p>

          {/* 章节 10 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            10. Information About Other People
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you provide information about a family member, companion, or another patient, you should ensure that you are authorized to share it.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Where consent or other legal authorization is required, you must obtain it before providing the information to us.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may ask for additional confirmation before accepting instructions or disclosing information to a family member or representative.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We will not assume that a family relationship alone authorizes access to an adult patient's medical information.
          </p>

          {/* 章节 11 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            11. Children and Individuals Requiring Representation
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our services are primarily intended for adults.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you seek coordination services for a child or a person who requires a legally authorized representative, please contact us before submitting sensitive information.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We will take steps appropriate to the circumstances to establish the authority of a parent, guardian, or other representative and to obtain any consent required by applicable law.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We do not knowingly collect children's personal information for unrelated purposes.
          </p>

          {/* 章节 12 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            12. Cookies and Similar Technologies
          </h2>

          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            Our website may use cookies and similar technologies to:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li style={{ marginBottom: '0.35rem' }}>Enable essential website functions.</li>
            <li style={{ marginBottom: '0.35rem' }}>Maintain website security.</li>
            <li style={{ marginBottom: '0.35rem' }}>Remember certain preferences.</li>
            <li style={{ marginBottom: '0.35rem' }}>Understand website performance and usage, where permitted.</li>
          </ul>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Where required, we will seek consent before using non-essential cookies or similar technologies.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You may be able to control cookies through your browser settings or a website cookie preference tool. Disabling certain cookies may affect website functionality.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            If we introduce advertising, analytics, or other tracking technologies in the future, we will update our notices and consent mechanisms as appropriate.
          </p>

          {/* 章节 13 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            13. External Websites and Third-Party Services
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our website may contain links to hospitals, healthcare providers, travel agencies, communication platforms, payment providers, and other third-party websites.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Those websites and services may have their own privacy policies, data collection practices, and security arrangements.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We are not responsible for the independent privacy practices of third parties simply because we link to them. We encourage you to review their policies before providing personal information directly to them.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Where we engage a third party to process information on our behalf, we will take appropriate steps to establish and maintain safeguards consistent with our legal obligations.
          </p>

          {/* 章节 14 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            14. Changes to This Privacy Policy
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may update this Privacy Policy to reflect changes in our services, technology, business practices, or legal obligations.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            The revised version will be posted on our website with an updated “Last Updated” date.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If a change materially affects how we handle sensitive personal information, we will provide additional notice or seek renewed consent where required by law.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We encourage you to review this Policy periodically.
          </p>

          {/* 章节 15 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            15. Contact Us About Privacy
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you have questions about this Privacy Policy, wish to exercise your privacy rights, or would like to raise a concern about how we handle personal information, please contact:
          </p>

      /*    <div style={{ margin: '0 0 1rem 0', color: '#374151', lineHeight: '1.7' }}>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Privacy Contact:</strong> Yu, Jennifer</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Company:</strong> Noah MedHub Inc.</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Email:</strong> info@noahmedhub.com</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Mailing Address:</strong>  112-970 Burrard Street, Office#1565, Vancouver, BC V6Z 2R4, Canada</p>
            <p style={{ margin: '0 0 1rem 0' }}><strong>Website:</strong> www.noahmedhub.com</p>
          </div>
*/
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Please do not include medical records or other highly sensitive information in your initial email unless we have provided an appropriate secure submission method.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We will review privacy inquiries and complaints and respond in accordance with applicable law.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            If you are not satisfied with our response, you may have the right to contact the Office of the Information and Privacy Commissioner for British Columbia, the Office of the Privacy Commissioner of Canada, or another competent privacy authority, depending on the circumstances.
          </p>

          {/* 章节 16 */}
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#0f172a', 
            marginTop: '2rem', 
            marginBottom: '1rem' 
          }}>
            16. Important Notice About Our Services
          </h2>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Noah MedHub Inc. provides coordination and administrative support for international patients exploring or arranging medical services in China.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We do not diagnose conditions, prescribe treatments, perform medical procedures, or replace licensed healthcare professionals.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            The medical information you provide is used for the coordination purposes explained in this Policy and does not, by itself, establish a doctor-patient relationship with us.
          </p>

          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Hospitals and healthcare professionals are responsible for their own clinical assessments, treatment decisions, and medical records. Patients should direct clinical questions to appropriately qualified healthcare professionals.
          </p>

          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Our goal is to help patients navigate the administrative, language, cultural, and logistical aspects of a cross-border medical journey while treating their personal information with care and respect.
          </p>

          <p style={{ 
            margin: '2rem 0 1rem 0', 
            color: '#0f172a', 
            fontWeight: '700', 
            textAlign: 'center',
            fontSize: '1.1rem' 
          }}>
            End of Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}