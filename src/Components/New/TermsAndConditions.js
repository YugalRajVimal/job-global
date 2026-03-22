// components/TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-10 pt-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      {/* <p className="mb-4">Effective Date: <strong>October 16, 2025</strong></p> */}

      <p className="mb-4">
        These terms and conditions outline the rules and regulations for the use of <strong>KS. Job Global’s</strong> website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing this site or using our services, you agree to be bound by these terms.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Eligibility</h2>
      <p className="mb-4">You must be at least 18 years old and legally eligible to work in applicable countries.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Provide accurate information.</li>
        <li>Do not impersonate or misrepresent yourself.</li>
        <li>Use the site for lawful purposes only.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">All content is the property of KS. Job Global and may not be reproduced without permission.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Liability Limitation</h2>
      <p className="mb-4">KS. Job Global is not responsible for job outcomes or third-party content accuracy.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Governing Law</h2>
      <p className="mb-4">These terms are governed by the laws of India.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-1">📍 Gaur City Mall, Office 9111, Noida West</p>
      {/* <p className="mb-1">📞 +91 85058 11996 / +91 85058 11997</p> */}
      <p>✉️ <a href="mailto:support@ksjobglobal.com" className="text-blue-600 underline">support@ksjobglobal.com</a></p>
    </div>
  );
};

export default TermsAndConditions;
