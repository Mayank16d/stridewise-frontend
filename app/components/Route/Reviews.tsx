import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
 
{
  name: "Anonymous",
  avatar: "/../../../../public/assests/user-default.jpg",
  comment:
  "Gann cosmogram astrology course 😍 SIR what a course!! You just nailed it! It's a Zero - Hero experience for me!! My Life best decision is  choose this course!!  Learning very special & new things from it..Also salute to your dedication to teach & help us .. ❤Live long sirji ❤"},
  {
    name: "Kevalin",
    // avatar: {kevalin},
    comment:
    "an amazing platform for stock market learning. Very convenient to use. The best platform that ive yet come accross. Thanks stridewise",
},
{
  name: "Arun",
  // avatar: {Arun},
  comment:
  "First my comments on the course contents. For the first time I have seen such a complete explanation on how to use Ganzilla software covering all parameters and how and when to use them. Very practical methodology to use Gann square of 9. Basics of astronomy to key factors that are practical useful for the study of impact of planets on the movement of stock markets. Finding market turning dates combined levels to create a very useful trading plan.The videos are very precise, without any unnecessary stretching of time. By the time the lecture video ends, it ensures that queries one may have during the session are properly addressed.",
},
  {
    name: "Siddharth",
    // avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    comment:
    "Let me start by expressing my utmost admiration for the course content. It's rare to find such a comprehensive explanation of Gannzilla software, covering every parameter intricately, along with practical insights on utilizing the Gann square of 9 method. What truly sets this course apart is its seamless integration of basic astronomy with key factors essential for understanding the planetary impact on stock market movements. The guidance provided on identifying market turning points and crafting effective trading plans is invaluable.",
},
];

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Uers Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          {/* <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, praesentium quidem, quis doloribus?
          </p> */}
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-12">
  {reviews &&
    reviews.map((i, index) => (
      <div key={index} className="flex justify-center">
        <ReviewCard item={i} />
      </div>
    ))}
</div>

  </div>
  );
};

export default Reviews;
