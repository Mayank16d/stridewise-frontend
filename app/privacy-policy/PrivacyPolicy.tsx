import React from "react";
import { styles } from "../styles/style";
// Privacy Policy:

// At Stride Wise, we are fully committed to protecting the privacy and security of our users' personal information. Our stringent measures ensure comprehensive safeguards for your data throughout your interactions with our website and services.

// 1. *Information Collection*: We collect only the necessary personal details required for course enrollment or communication purposes. Additionally, non-personal information is gathered solely for analytical insights and website optimization.

// 2. *Use of Information*: Your personal data is exclusively used for facilitating course access, processing transactions, and improving user experience. We prioritize confidentiality and discretion in all interactions.

// 3. *Data Protection*: Your data is shielded through robust security protocols to prevent unauthorized access, alteration, or disclosure. We continuously monitor and update our systems to maintain the highest level of protection.

// 4. *Third-party Services*: Any third-party services utilized adhere to strict privacy standards, ensuring your information remains secure and confidential. We carefully vet and select partners who share our commitment to privacy protection.

// 5. *Cookies*: Our limited use of cookies is solely aimed at enhancing user experience without compromising privacy. You retain full control over cookie settings to align with your preferences.

// 6. *Information Sharing*: Your personal information is never shared, sold, or rented to third parties without your explicit consent. We uphold the utmost discretion in all data handling processes.

// 7. *Updates to Privacy Policy*: Any updates to our Privacy Policy are made with the utmost transparency and are aimed at further strengthening privacy protections. We encourage regular review of this policy to stay informed about our practices.

// Your trust is paramount to us, and we continually strive to exceed expectations in safeguarding your privacy. For any inquiries or concerns regarding our privacy practices, please don't hesitate to contact us.

// Last Updated: April, 2024
type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <div>
  <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
    <h1 className={`${styles.title} !text-start pt-2`}>
      Privacy Policy
    </h1>
    <ul>
      <li>At Stride Wise, we are fully committed to protecting the privacy and security of our users&apos; personal information. Our stringent measures ensure comprehensive safeguards for your data throughout your interactions with our website and services.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Information Collection:</h2>
    <ul>
      <li>We collect only the necessary personal details required for course enrollment or communication purposes. Additionally, non-personal information is gathered solely for analytical insights and website optimization.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Use of Information:</h2>
    <ul>
      <li>Your personal data is exclusively used for facilitating course access, processing transactions, and improving user experience. We prioritize confidentiality and discretion in all interactions.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Data Protection:</h2>
    <ul>
      <li>Your data is shielded through robust security protocols to prevent unauthorized access, alteration, or disclosure. We continuously monitor and update our systems to maintain the highest level of protection.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Third-party Services:</h2>
    <ul>
      <li>Any third-party services utilized adhere to strict privacy standards, ensuring your information remains secure and confidential. We carefully vet and select partners who share our commitment to privacy protection.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Cookies:</h2>
    <ul>
      <li>Our limited use of cookies is solely aimed at enhancing user experience without compromising privacy. You retain full control over cookie settings to align with your preferences.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Information Sharing:</h2>
    <ul>
      <li>Your personal information is never shared, sold, or rented to third parties without your explicit consent. We uphold the utmost discretion in all data handling processes.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Updates to Privacy Policy:</h2>
    <ul>
      <li>Any updates to our Privacy Policy are made with the utmost transparency and are aimed at further strengthening privacy protections. We encourage regular review of this policy to stay informed about our practices.</li>
    </ul>
    <br/>
    <p>Your trust is paramount to us, and we continually strive to exceed expectations in safeguarding your privacy. For any inquiries or concerns regarding our privacy practices, please don&apos;t hesitate to contact us.</p>
    <p>Last Updated: April, 2024</p>
    <br/>
  </div>
</div>


  );
};

export default PrivacyPolicy;
