// components/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-10 pt-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      {/* <p className="mb-4">Effective Date: <strong>October 16, 2025</strong></p> */}

      <p className="mb-4">
        At <strong>KS. Job Global</strong>, your privacy is our priority. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Personal Information: Name, Passport Number, Contact Details, etc.</li>
        <li>Employment Information: Job experience, preferences.</li>
        <li>Technical Info: IP, browser, device type.</li>
        <li>Cookies & Tracking Data.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Match you with jobs and employers.</li>
        <li>Send job updates and communications.</li>
        <li>Improve website functionality.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        Your data may be shared with trusted international employers, government bodies (e.g., Ministry of External Affairs), or service providers. We do not sell your data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <p className="mb-4">You can request to access, modify, or delete your data. Contact us at <a className="text-blue-600 underline" href="mailto:support@ksjobglobal.com">support@ksjobglobal.com</a>.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p className="mb-4">For privacy-related concerns:</p>
      <p className="mb-1">📍 Gaur City Mall, Office 9111, Noida West</p>
      {/* <p className="mb-1">📞 +91 85058 11996 / +91 85058 11997</p> */}
      <p>✉️ <a href="mailto:support@ksjobglobal.com" className="text-blue-600 underline">support@ksjobglobal.com</a></p>
    </div>
  );
};

export default PrivacyPolicy;
