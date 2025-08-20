import React from 'react';
import Footer from "./Footer";
import './return.css';

const ReturnRefundPolicy = () => {
  return (
     <>
    <div className="containerx">
      <div className="policy-container">
         <div className="policy-header">
          <h1>Return and Refund Policy</h1>
          <p className="subtitle">Your satisfaction is our top priority</p>
        </div>
        <div className="update-date">Last updated: May 31, 2025</div>

        <div className="section">
          <p>Thank you for shopping at xenturaltcodes.in website and xenturaltcodes.in app.</p>
          <p>If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.</p>
        </div>

        <div className="section">
          <h2>Interpretation and Definitions</h2>

          <h3>Interpretation</h3>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

          <h3>Definitions</h3>
          <p>For the purposes of this Return and Refund Policy:</p>
          <ul>
            <li><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named xenturaltcodes.in</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to xenturaltcodes IT Solution PVT LTD, SPO 208 Second floor Sector 124 Sunny Enclave Mohali.</li>
            <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
            <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
            <li><strong>Service</strong> refers to the Application or the Website or both.</li>
            <li><strong>Website</strong> refers to xenturaltcodes.in, accessible from <a href="https://www.xenturaltcodes.in/">https://www.xenturaltcodes.in/</a></li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Your Order Cancellation Rights</h2>
          <p>You are entitled to cancel Your Order within 7 days without giving any reason for doing so.</p>
          <p>The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>

          <div className="highlight-box">
            <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
            <ul>
              <li>By visiting this page on our website: <a href="https://www.xenturaltcodes.in/" style={{ color: 'var(--primary)' }}>https://www.xenturaltcodes.in/</a></li>
            </ul>
            <p>We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
          </div>
        </div>

        <div className="section">
          <h2>Conditions for Returns</h2>
          <p>In order for the Goods to be eligible for a return, please make sure that:</p>
          <ul>
            <li>The Goods were purchased in the last 7 days</li>
            <li>The Goods are in the original packaging</li>
          </ul>

          <h3>The following Goods cannot be returned:</h3>
          <ul>
            <li>The supply of Goods made to Your specifications or clearly personalized.</li>
            <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
            <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
            <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
          </ul>

          <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
          <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
        </div>

        <div className="section">
          <h2>Returning Goods</h2>
          <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
          <div className="highlight-box">
            <p>Website design<br />
              xenturaltcodes IT Solution PVT LTD<br />
              SPO 208 Second floor<br />
              Sector 124 Sunny Enclave<br />
              Mohali</p>
          </div>
          <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>
        </div>

        <div className="section">
          <h2>Gifts</h2>
          <p>If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
          <p>If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</p>
        </div>

        <div className="contact-box">
          <h3>Contact Us</h3>
          <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
          <p>By visiting this page on our website: <a href="https://www.xenturaltcodes.in/">https://www.xenturaltcodes.in/</a></p>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
   </>
  );
};

export default ReturnRefundPolicy;
