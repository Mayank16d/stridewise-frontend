import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      {/* <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
      </ul> */}
        {/* <h3 className={`${styles.title} !text-start pt-2`}>Welcome to Stride Wise</h3>
    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">Your destination for comprehensive stock market courses and learning resources. Before you embark on your journey to financial literacy and success, please take a moment to review our Terms and Conditions.</p> */}
    
    {/* <h2 className="text-[18px] font-Poppins">1. Introduction:</h2> */}
    <ul>
        <li>By accessing and using Stride Wise, you agree to comply with these Terms and Conditions, which govern your use of our website and services.</li>
    </ul>
    <br/><br/>
    <h2 className="text-[18px] font-Poppins">Registration:</h2>
    <ul>
        <li>To access our courses and materials, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Content Usage:</h2>
    <ul>
        <li>The materials provided on Stride Wise are for educational purposes only. You may not distribute, modify, or exploit our content for commercial purposes without prior consent.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Payments and Refunds:</h2>
    <ul>
        <li>Course fees are outlined on our website and are subject to change. We offer no refund policy.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Intellectual Property:</h2>
    <ul>
        <li>All content on Stride Wise, including text, graphics, and logos, is the property of Stride Wise and is protected by copyright laws.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">User Conduct:</h2>
    <ul>
        <li>We expect all users to conduct themselves in a respectful and lawful manner. Any violation of our policies may result in account suspension or termination.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Termination:</h2>
    <ul>
        <li>We reserve the right to terminate or suspend accounts at our discretion, without prior notice or liability, for any reason whatsoever.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Dispute Resolution:</h2>
    <ul>
        <li>Any disputes arising from your use of Stride Wise shall be resolved through arbitration in accordance with the laws of your jurisdiction.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Updates:</h2>
    <ul>
        <li>We may revise these Terms and Conditions from time to time. By continuing to use Stride Wise, you agree to be bound by the updated terms.</li>
    </ul>
    <br/>
    <h2 className="text-[18px] font-Poppins">Refund Policy:</h2>
    <ul>
        <li>Recognizing the significance of investing in educational endeavors, we endeavor to provide stock market courses of exceptional quality. Regrettably, given the inherent characteristics of our digital offerings and the substantial value inherent in the knowledge disseminated, all transactions are considered final, and refunds are not accommodated. So no refund policy.</li>
    </ul>
    <br/>
    <p>Last Updated: April, 2024</p>
    <br/>
    
      </div>
    </div>
  );
};

export default Policy;
