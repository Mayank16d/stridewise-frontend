import React from "react";
import { styles } from "../styles/style";

type Props = {};

const RefundPolicy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Refund Policy
        </h1>
    <ul>
        <li>Recognizing the significance of investing in educational endeavors, we endeavor to provide stock market courses of exceptional quality. Regrettably, given the inherent characteristics of our digital offerings and the substantial value inherent in the knowledge disseminated, all transactions are considered final, and refunds are not accommodated. So no refund refundPolicy.</li>
    </ul>
    <br/>
    <p>Last Updated: April, 2024</p>
    <br/>
    
      </div>
    </div>
  );
};

export default RefundPolicy;
