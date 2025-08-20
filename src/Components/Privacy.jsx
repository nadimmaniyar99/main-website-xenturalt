import React from 'react';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import './Privacy.css'; // Optional: For custom styling

const PrivacyPolicy = () => {
  return (
    <>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> May 27, 2025</p>

      <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service...</p>

      <h2>Terms And Conditions</h2>
      <h3>Interpretation</h3>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions...</p>

      <h3>Definitions</h3>
      <ul>
        <li><strong>Account</strong> means a unique account created for You to access our Service...</li>
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control...</li>
        <li><strong>Company</strong> refers to Xenturalt Codes IT Solution Pvt. Ltd., SPO 208 Second floor Sector 124 Sunny Enclave Mohali.</li>
        <li><strong>Cookies</strong> are small files that are placed on Your device...</li>
      </ul>

      <h2>Collecting and Using Your Personal Data</h2>
      <h3>Types of Data Collected</h3>

      <p><strong>Personal Data</strong></p>
      <p>
        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.
        Personally identifiable information may include, but is not limited to: <br />
        <br />
        Phone number<br />
        Usage Data
      </p>

      <p><strong>Usage Data</strong></p>
      <p>
        Usage Data is collected automatically when using the Service. It may include information such as Your IP address, browser type, pages visited, time
        spent, mobile device information, and more.
      </p>

      <h3>Information from Third-Party Social Media Services</h3>
      <p>The Company allows You to create an account and log in through:</p>
      <ul>
        <li>Google</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>

      <h3>Tracking Technologies and Cookies</h3>
      <p>We use Cookies and similar tracking technologies...</p>

      <h2>Use of Your Personal Data</h2>
      <p>The Company may use Personal Data for the following purposes:</p>
      <ul>
        <li><strong>To provide and maintain our Service:</strong> including to monitor usage.</li>
        <li><strong>To manage Your Account:</strong> including user registration and access.</li>
        <li><strong>For the performance of a contract:</strong> like purchase agreements.</li>
        <li><strong>To contact You:</strong> via email, phone, or other communication forms.</li>
        <li><strong>To provide You with news and offers:</strong> similar to those you’ve shown interest in.</li>
        <li><strong>To manage Your requests:</strong> support and help-related queries.</li>
        <li><strong>For business transfers:</strong> like merger, acquisition, or asset sale.</li>
        <li><strong>For other purposes:</strong> analytics, service improvement, etc.</li>
      </ul>

      <h2>We may share Your personal information in the following situations:</h2>
      <ul>
        <li><strong>With Service Providers:</strong> to analyze use or contact You.</li>
        <li><strong>For business transfers:</strong> sale, merger, etc.</li>
        <li><strong>With Affiliates:</strong> under this Privacy Policy.</li>
        <li><strong>With business partners:</strong> for promotions and offerings.</li>
        <li><strong>With other users:</strong> in public areas of the service.</li>
        <li><strong>With Your consent:</strong> for other purposes.</li>
      </ul>

      <h2>Retention of Your Personal Data</h2>
      <p>
        Your information may be stored outside of your region. By using the Service, you consent to this transfer. The Company ensures your data is treated
        securely and protected appropriately.
      </p>

      <h2>Transfer of Your Personal Data</h2>
      <p>
        Data may be transferred and maintained in other locations. Your continued use of the service represents your consent to such transfers with proper
        safeguards.
      </p>

      <h2>Delete Your Personal Data</h2>
      <p>
        You may request deletion or manage your data via your account or by contacting us. Certain data may be retained due to legal obligations.
      </p>

      <h2>Disclosure of Your Personal Data</h2>
      <p>If the Company is involved in a merger, acquisition or asset sale...</p>

      <h2>Security of Your Personal Data</h2>
      <p>The security of Your Personal Data is important to Us...</p>

      <h2>Children's Privacy</h2>
      <p>
        We do not knowingly collect data from anyone under 13. Parents may contact us for removal if such data is discovered.
      </p>

      <h2>Links to Other Websites</h2>
      <p>
        We are not responsible for external sites. Please review their privacy policies before submitting any personal data.
      </p>

      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this policy from time to time. Changes will be notified via email or a prominent notice on our site.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <p>
        By visiting this page on our website:{' '}
        <a href="https://www.xenturaltcodes.in/" target="_blank" rel="noopener noreferrer">
          https://www.xenturaltcodes.in/
        </a>
      </p>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default PrivacyPolicy;
