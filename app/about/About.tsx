import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Welcome to <span className="text-gradient">Stride Wise?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">Where we empower individuals to master the complexities of the stock market and achieve their financial goals. Here&apos;s what you need to know about us:</p>
        <br/><br/>
        <h2 className="text-[18px] font-Poppins">Company Overview:</h2>
        <ul>
            <li>Stride Wise is a leading provider of online stock market courses, offering expert-led training to students worldwide.</li>
        </ul>
        <br/>
        <h2 className="text-[18px] font-Poppins">Learning Experience:</h2>
        <ul>
            <li>With interactive lessons, real-world examples, and practical exercises, <strong>Stride Wise</strong> provides a dynamic and engaging learning environment.</li>
        </ul>
        <br/>
        <h2 className="text-[18px] font-Poppins">Community Engagement:</h2>
        <ul>
            <li>Join our community of like-minded individuals and connect with fellow instructors, and industry professionals through our forums and social media channels.</li>
        </ul>
        <br/>
        <h2 className="text-[18px] font-Poppins">Contact Information:</h2>
        <ul>
            <li>Have questions or need assistance? Our dedicated support team is here to help. Feel free to reach out to us via email.</li>
        </ul>
        <br/>
        <br />
        <span className="text-[22px]">Ankit Saraswat</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of Stride Wise
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
