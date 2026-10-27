import React, { useEffect } from 'react';

export default function Terms({ isOpen, onClose }) {
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
          Terms of Service
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

            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Company:</strong> NOAH MEDHUB INC.</p>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Website:</strong> www.noahmedhub.com</p>
            {/* 优化后的结构（可以采用 Flex 左右对齐，或者用换行标签让地址整体缩进对齐） */}
<div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
  <strong style={{ minWidth: '130px', display: 'inline-block' }}>Business Address: &nbsp;</strong>
  <span style={{ lineHeight: '1.5' }}>
    112-970 Burrard Street, Office# 1565,<br />
    Vancouver, BC V6Z 2R4, Canada
  </span>
</div>

            <p style={{ margin: '0 0 1rem 0' }}><strong>Contact Email:</strong> yannzhao@hotmail.com</p>
          </div>

          {/* Section 1 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            1. Introduction and Acceptance of Terms
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Welcome to Noah MedHub Inc. (“we,” “us,” or “our”).
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We are a Vancouver-based cross-border medical service coordination platform designed to help international patients living outside China navigate the administrative, communication, logistical, and practical aspects of seeking medical services in China.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our services may include bilingual communication support, medical record organization and translation coordination, hospital and specialist appointment coordination, local medical escort arrangements, travel and accommodation coordination, and post-treatment administrative follow-up.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We understand the challenges international patients may face when navigating an unfamiliar healthcare system, language, culture, and set of administrative procedures. Our aim is to make the medical journey easier to organize through thoughtful coordination, clear communication, and appropriate local support.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            These Terms of Service (“Terms”) govern your access to and use of our website and the services we provide.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            By accessing our website, submitting an inquiry, requesting a service, or entering into a service agreement with us, you agree to the applicable provisions of these Terms. Where required by law, we will obtain your affirmative agreement before proceeding.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you do not agree to these Terms, please do not use the website or engage our services.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Please read these Terms together with our Privacy Policy, which explains how we collect, use, disclose, store, and protect personal information.
          </p>

          {/* Section 2 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            2. Our Role and Scope of Services
          </h2>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            2.1 Medical Journey Coordination
          </h3>
          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            We provide coordination and administrative support to help international patients explore and arrange medical services in China. Depending on the services agreed upon with you, our assistance may include:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li>Initial discussions about your medical journey coordination needs.</li>
            <li>Organizing medical records and facilitating medical history translation.</li>
            <li>Communicating administrative inquiries to hospitals and healthcare providers.</li>
            <li>Coordinating appointments, consultations, and hospital visits.</li>
            <li>Helping patients identify hospitals or specialists for further consideration.</li>
            <li>Arranging bilingual communication assistance and local medical escorts.</li>
            <li>Coordinating travel agencies, accommodation, transportation, and other logistical services.</li>
            <li>Helping organize medical documents, discharge information, and follow-up arrangements.</li>
            <li>Providing administrative assistance with communication between patients, families, and authorized service providers.</li>
          </ul>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            The exact services available to you will depend on your circumstances, the agreed service package, the availability of relevant providers, and any written service proposal or agreement. Not every service listed above is necessarily available in every location or for every patient.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            2.2 We Do Not Provide Medical Diagnosis or Treatment
          </h3>
          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            We are a medical journey coordination service, not a medical provider. We do not:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li>Diagnose medical conditions.</li>
            <li>Prescribe medications or recommend treatment as a treating clinician.</li>
            <li>Perform medical examinations, surgery, or other medical procedures.</li>
            <li>Make clinical decisions on behalf of hospitals or doctors.</li>
            <li>Guarantee that a particular treatment is medically appropriate or successful.</li>
            <li>Replace a licensed healthcare professional, hospital, clinic, or emergency service.</li>
          </ul>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Any medical diagnosis, treatment recommendation, prescription, procedure, or clinical decision must be made by an appropriately qualified healthcare professional or healthcare institution.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our assistance with medical records, translations, appointments, or hospital communications does not constitute medical advice or establish a doctor-patient relationship between you and our company.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you have questions about symptoms, diagnosis, treatment options, medication, or medical risks, please consult an appropriately qualified healthcare professional.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you experience a medical emergency, contact local emergency services or seek immediate medical attention rather than relying on our coordination service.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            2.3 No Guarantee of Clinical Suitability or Outcomes
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may assist you in gathering information about healthcare providers and arranging consultations, but we cannot determine or guarantee that a particular hospital, specialist, procedure, or treatment is suitable for your individual circumstances.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Healthcare providers may decline a consultation, request further examinations, change an appointment, recommend a different course of action, or determine that treatment is not appropriate.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Treatment outcomes depend on many factors beyond our control. We make no guarantees regarding diagnoses, treatment success, recovery time, clinical outcomes, or the availability of particular medical services.
          </p>

          {/* Section 3 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            3. Eligibility and Authority to Use Our Services
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You must have the legal capacity to enter into an agreement with us under applicable law.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you are arranging services for another person, including a family member, you confirm that you have the authority necessary to act on that person's behalf and provide the relevant information and instructions.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may request reasonable evidence of your identity or authority where necessary.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            For patients who are minors or who require a legally authorized representative, we may require additional documentation and consent before accepting instructions or arranging services.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We reserve the right to decline or suspend a service request where we reasonably believe that the request is unlawful, the required authorization is absent, or we cannot safely and appropriately provide the requested coordination.
          </p>

          {/* Section 4 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            4. Our Service Process
          </h2>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            4.1 Initial Inquiry
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You contact us through our website or another communication channel to explain your general needs and ask about our services. An initial inquiry does not automatically create a commitment by us to provide services or a commitment by you to purchase them.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            4.2 Information Gathering
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Where appropriate, we may ask for information necessary to understand your requested arrangements, including relevant medical records, language preferences, destination preferences, scheduling requirements, and other logistical details. Please provide accurate information and only submit medical or other sensitive information through an appropriate channel. We may be unable to proceed if the necessary information or authorization is missing.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            4.3 Service Proposal and Confirmation
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Before undertaking paid services, we may provide a written proposal describing the agreed scope, fees, expected arrangements, exclusions, and other relevant conditions. A service engagement will be confirmed through the applicable booking process, written agreement, payment confirmation, or other method specified in the proposal.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If there is a conflict between these Terms and a separate written service agreement signed or otherwise accepted by both parties, the specific agreement will prevail to the extent of the conflict, unless applicable law requires otherwise.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            4.4 Coordination and Updates
          </h3>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Once a service has been confirmed, we will use reasonable efforts to carry out the agreed coordination tasks and communicate material updates. Schedules and arrangements may change due to hospital availability, clinical requirements, provider decisions, travel disruptions, or other circumstances outside our reasonable control. We will make reasonable efforts to communicate relevant changes and discuss practical alternatives where available.
          </p>

          {/* Section 5 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            5. Hospitals and Independent Healthcare Providers
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Hospitals, clinics, doctors, and other healthcare professionals in China are independent third parties unless we expressly state otherwise in a separate written agreement. They are responsible for their own professional qualifications, clinical assessments, medical decisions, treatment, medical records, and patient care.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our role may include identifying potential providers based on available information, communicating administrative inquiries, arranging appointments, and facilitating the exchange of authorized information. Unless expressly agreed otherwise in writing, we do not act as the treating provider, clinical supervisor, or legal representative of any hospital or doctor.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            5.1 Provider Information
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may share publicly available information or information supplied by healthcare providers to help you understand potential options. You remain responsible for making informed decisions about whether to proceed with a particular provider or treatment, with advice from appropriately qualified healthcare professionals. You should independently confirm relevant qualifications, services, fees, clinical suitability, and treatment arrangements before proceeding.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            5.2 Appointment and Treatment Availability
          </h3>
          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            We may assist with appointment requests, but we cannot guarantee:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li>That a particular doctor or hospital will accept your case.</li>
            <li>That an appointment will be available on a preferred date.</li>
            <li>That a consultation will result in a particular diagnosis or treatment plan.</li>
            <li>That a hospital will provide a specific procedure or treatment.</li>
            <li>That estimated costs or timelines will remain unchanged.</li>
          </ul>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Any appointment, treatment, or admission remains subject to the relevant provider's confirmation and requirements.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            5.3 Provider Fees and Medical Decisions
          </h3>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Hospitals and healthcare professionals may charge their own consultation, examination, treatment, medication, admission, or other fees. Unless expressly stated otherwise in writing, these charges are separate from our service fees and are payable according to the provider's terms. We do not control a provider's clinical decisions or independently guarantee the accuracy of its estimates, availability information, or clinical representations.
          </p>

          {/* Section 6 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            6. Medical Records and Translation Services
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You may ask us to help organize, translate, or coordinate the transmission of your medical history and related documents.
          </p>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            6.1 Accuracy of Information You Provide
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You are responsible for providing information that is accurate and complete to the best of your knowledge. Please inform us of any known omissions, corrections, updates, or important changes in your medical records that may affect the coordination process. We may rely on the information you provide and generally do not independently verify the authenticity or completeness of every medical document.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            6.2 Translation Limitations
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We aim to facilitate clear and faithful communication between patients and healthcare providers. However, medical translation involves specialized terminology, context, abbreviations, and differences in medical documentation practices. Errors or ambiguities may occur despite reasonable care.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Unless expressly agreed otherwise in writing, our translation and document coordination services do not constitute a certified medical translation, clinical interpretation, independent medical review, or verification of the underlying medical information. Where a hospital or authority requires a certified translation or a specifically qualified interpreter, you may need to engage an appropriately qualified professional.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Translated documents should be reviewed by the relevant healthcare professional before they are relied upon for clinical decisions.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            6.3 Authorization to Share Medical Records
          </h3>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We will seek the consent or authorization required by applicable law before sharing your medical information with hospitals, healthcare professionals, translators, or other recipients. You should identify any restrictions or specific instructions concerning the disclosure of your information. We will handle medical records in accordance with our Privacy Policy and applicable legal obligations.
          </p>

          {/* Section 7 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            7. Local Medical Escorts and Bilingual Assistance
          </h2>
          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            Where available and agreed upon, we may arrange local medical escorts or bilingual personnel to assist you during hospital visits and related activities. Depending on the agreed scope, their duties may include:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li>Helping you navigate hospital facilities.</li>
            <li>Assisting with appointment registration and administrative procedures.</li>
            <li>Helping organize documents and appointment schedules.</li>
            <li>Facilitating ordinary communication and coordination.</li>
            <li>Providing practical guidance concerning agreed local arrangements.</li>
          </ul>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Unless expressly provided by a properly qualified healthcare professional acting in that capacity, these services do not include medical diagnosis, clinical interpretation, nursing care, physical treatment, or emergency medical assistance.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            A medical escort does not replace a treating doctor or qualified medical interpreter when one is required. You should communicate your mobility, accessibility, language, and other relevant assistance needs in advance so that we can assess whether suitable arrangements are available.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            The availability, scope, and qualifications of any escort or interpreter will be communicated as appropriate before the service is confirmed.
          </p>

          {/* Section 8 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            8. Travel, Accommodation, and Other Third-Party Arrangements
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may assist with coordinating travel agencies, transportation, accommodation, and other services related to your medical journey. Unless expressly stated otherwise in a written agreement, these arrangements are provided by independent third-party businesses. The applicable booking terms, prices, cancellation rules, and service conditions may be determined by those providers.
          </p>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            You are responsible for reviewing and complying with relevant travel requirements, including passport validity, visa or entry requirements, travel insurance, and any other applicable documentation. We can help coordinate arrangements but cannot guarantee visa approval, border entry, flight availability, accommodation availability, or uninterrupted travel.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            You should also consider whether your medical condition and treatment schedule permit the proposed travel arrangements. Decisions about fitness to travel following treatment should be made with your treating healthcare professional. Where a third-party provider changes, cancels, or fails to perform a booking, we will make reasonable efforts to help communicate and coordinate available alternatives within our agreed scope.
          </p>

          {/* Section 9 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            9. Aftercare and Follow-Up Coordination
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Where included in your service agreement, we may assist with administrative follow-up after your consultation or treatment in China. This may include helping organize medical records, communicating follow-up appointment requests, coordinating document delivery, or facilitating authorized communication with healthcare providers.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Our follow-up coordination is not a substitute for ongoing medical care. We do not monitor your medical condition continuously, provide emergency monitoring, or guarantee that a hospital or doctor will respond within a particular period unless expressly agreed in writing and legally permissible. You remain responsible for following the instructions of your treating healthcare professionals, arranging necessary care in your home country, and seeking timely medical attention when required.
          </p>

          {/* Section 10 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            10. Fees, Payments, and Expenses
          </h2>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            10.1 Service Fees
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our service fees will be communicated through the relevant service proposal, quotation, booking page, or written agreement. Fees may depend on the requested coordination tasks, duration, location, language requirements, staffing, and other factors.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            10.2 Third-Party Charges
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Unless expressly included in a written quotation, our service fees do not include hospital charges, doctor fees, medical tests, medication, travel tickets, accommodation, visa fees, insurance, transportation, or other third-party costs. Third-party charges may change and may be payable directly to the relevant provider.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            10.3 Payment Terms
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Payment methods, deposit requirements, payment deadlines, and any installment arrangements will be specified before the service is confirmed. You agree to pay the fees applicable to the services you have agreed to purchase, subject to your rights under applicable law.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            10.4 Currency and Taxes
          </h3>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Unless otherwise specified, prices will be quoted in the currency identified in your service proposal. Applicable taxes and any currency conversion or payment processing charges will be disclosed as appropriate.
          </p>

          {/* Section 11 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            11. Cancellations, Rescheduling, and Refunds
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We understand that medical journeys may change because of health concerns, medical advice, hospital availability, travel restrictions, or personal circumstances.
          </p>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            11.1 Cancellation by You
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            If you wish to cancel or reschedule, please contact us as soon as reasonably possible. Depending on the service already performed, costs already incurred, and third-party booking conditions, you may be entitled to a full or partial refund, a rescheduling option, or another agreed arrangement.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            11.2 Cancellation by Us
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may cancel or discontinue a service if we cannot reasonably provide it, necessary authorizations are not obtained, a relevant provider becomes unavailable, or continuation would be unlawful or otherwise inappropriate.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginTop: '1rem', marginBottom: '0.5rem' }}>
            11.3 Third-Party Refunds
          </h3>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Payments made directly to hospitals, travel agencies, accommodation providers, or other third parties are generally subject to those providers' terms. Where we have collected a third-party payment on your behalf, we will explain the applicable refund process and assist with communication where included in our service scope.
          </p>

          {/* Section 12 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            12. Your Responsibilities
          </h2>
          <p style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>
            To help us coordinate your medical journey effectively, you agree to:
          </p>
          <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#374151' }}>
            <li>Provide accurate information and documents to the best of your knowledge.</li>
            <li>Tell us about material changes to your arrangements or the information relevant to your requested services.</li>
            <li>Obtain appropriate authorization before sharing another person's information.</li>
            <li>Review service proposals, fees, exclusions, and third-party conditions before confirming arrangements.</li>
            <li>Provide required consent for the handling and disclosure of your personal information.</li>
            <li>Communicate your scheduling, language, accessibility, and logistical needs as early as reasonably possible.</li>
            <li>Treat our personnel and service partners respectfully.</li>
            <li>Comply with applicable laws and the reasonable rules of hospitals and other service providers.</li>
            <li>Seek appropriate professional medical advice for clinical decisions and emergencies.</li>
          </ul>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            You must not knowingly provide fraudulent documents, impersonate another person, misuse our website, or request assistance for an unlawful purpose.
          </p>

          {/* Section 13 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            13. Privacy and Confidentiality
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We understand that medical and personal information requires particular care. Our collection, use, disclosure, storage, and handling of personal information are described in our Privacy Policy.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Where consent is required, particularly for sensitive medical information and international transfers, we will obtain the appropriate consent or authorization separately.
          </p>

          {/* Section 14 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            14. Communication and Electronic Records
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            We may communicate with you through email, telephone, messaging applications, video meetings, or other agreed channels.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            You should not rely on ordinary messaging channels for emergency medical assistance.
          </p>

          {/* Section 15 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            15. Service Availability and Changes
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We will make reasonable efforts to provide the services expressly agreed upon with you. However, service availability may depend on the schedules and decisions of hospitals, healthcare professionals, translators, medical escorts, travel providers, and other third parties.
          </p>

          {/* Section 16 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            16. Intellectual Property and Website Use
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Unless otherwise stated, the website and its content, including text, graphics, branding, design, and original materials, are owned by or licensed to us. You may access and use the website for lawful personal and informational purposes.
          </p>

          {/* Section 17 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            17. Third-Party Websites and Services
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Our website or communications may contain links to hospitals, healthcare providers, travel agencies, payment processors, messaging platforms, or other third-party services. These services operate under their own terms and privacy policies.
          </p>

          {/* Section 18 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            18. Disclaimers and Limitation of Liability
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            Our website and general educational materials are provided for informational purposes and are not a substitute for professional medical advice.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            Hospitals, healthcare professionals, travel agencies, transportation providers, accommodation providers, and other third parties are responsible for their own services and decisions.
          </p>

          {/* Section 19 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            19. Indemnification
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            To the extent permitted by applicable law, you may be responsible for losses or reasonable costs that we incur as a direct result of your fraud, unlawful conduct, or material breach of these Terms.
          </p>

          {/* Section 20 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            20. Suspension or Termination of Services
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            You may request to stop using our services or terminate a service engagement in accordance with the applicable cancellation terms. We may suspend or terminate a service engagement where reasonably necessary because of unlawful activity or material breach.
          </p>

          {/* Section 21 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            21. Events Beyond Our Reasonable Control
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We will not be responsible for delays caused by circumstances beyond our reasonable control, including natural disasters, epidemics, government restrictions, travel disruptions, or hospital closures.
          </p>

          {/* Section 22 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            22. Governing Law and Dispute Resolution
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            These Terms and disputes concerning our website or services will be governed by the laws of British Columbia and the applicable laws of Canada.
          </p>

          {/* Section 23 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            23. Changes to These Terms
          </h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We may revise these Terms from time to time to reflect changes in our services, operations, website, or legal obligations.
          </p>

          {/* Section 24 */}
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            24. General Provisions
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#374151' }}>
            These Terms, together with our Privacy Policy and any applicable service agreement, form the relevant agreement governing your use of the website.
          </p>
          <p style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>
            We may provide these Terms in English and Chinese. If there is a material inconsistency, the governing language will be the version expressly identified in the relevant agreement.
          </p>

          <p style={{ 
            margin: '2rem 0 1rem 0', 
            color: '#0f172a', 
            fontWeight: '700', 
            textAlign: 'center',
            fontSize: '1.05rem' 
          }}>
            End of Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}