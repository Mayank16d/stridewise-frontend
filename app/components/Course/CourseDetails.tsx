import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { format } from "timeago.js";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import Link from "next/link";
import { styles } from "@/app/styles/style";
import CourseContentList from "../Course/CourseContentList";
import axios from "axios"; // To handle API requests

type Props = {
  data: any;
  setRoute: any;
  setOpen: any;
};

const CourseDetails = ({ data, setRoute, setOpen: openAuthModal }: Props) => {
  const { data: userData } = useLoadUserQuery(undefined, {});
  const [user, setUser] = useState<any>();

  useEffect(() => {
    setUser(userData?.user);
  }, [userData]);

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment success
  const handlePaymentSuccess = async (paymentResponse: any) => {
    try {
      // Make a post request to your backend to save the order details
      console.log("Payment details:", {
        userId: user._id,
        courseId: data._id,
        payment_info: paymentResponse,
      });
      const response = await axios.post(
        "https://stride-wise-backend-1-a30b.onrender.com/api/v1/payment-success"
        // "http://localhost:8000/api/v1/payment-success"
        , {
        userId: user._id,
        courseId: data._id,
        payment_info: paymentResponse, // Send payment details
      });

      if (response.data.success) {
        alert("Payment successful! Course purchased.");
      } else {
        alert("Order creation failed.");
      }
    } catch (error) {
      console.error("Order creation error:", error);
      alert("An error occurred while creating the order.");
    }
  };

  // Initiate the payment process
  const handleBuyNow = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your internet.");
      return;
    }

    try {
      // Call the backend to create a Razorpay order
      // console.log("Order request data:", {
      //   amount: data.price * 100,
      //   currency: "INR",
      //   receipt: `receipt_${Date.now()}`,
      // });
      const orderResponse = await axios.post(
        "https://stride-wise-backend-1-a30b.onrender.com/api/v1/create-order"
        // "http://localhost:8000/api/v1/create-order"
        , {
        amount: 8999, // Convert to smallest currency unit
      });
      if (!orderResponse.data.success) {
        alert("Failed to create Razorpay order. Please try again.");
        return;
      }

      const { order_id, amount, currency } = orderResponse.data;

      // Create Razorpay options
      const options = {
        key: "rzp_live_cTBtQ8rnno8Cfi", // Razorpay key from .env
        amount,
        currency,
        name: "StrideWise Private Limited", // Your business name
        description: "Course Purchase",
        order_id, // Razorpay order ID
        handler: handlePaymentSuccess, // Function to handle successful payment
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: user?.contact,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      // console.error("Order creation error:", error.response ? error.response.data : error);
      // alert("Failed to initiate payment.");
    }
  };

  const discountPercentage =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;
  const discountPercentagePrice = 43;
  const isPurchased =
    user && user.courses && user.courses.some((course: any) => course._id === data._id);

  const handleOrder = (e: any) => {
    e.preventDefault();
    if (user) {
      handleBuyNow();
    } else {
      setRoute("Login");
      openAuthModal(true);
    }
  };

  return (
    <div>
      <div className="w-[90%] 800px:w-[90%] m-auto py-5">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 800px:w-[65%] 800px:pr-5">
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              {data.name}
            </h1>
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center">
                <Ratings rating = {4.5 } />
              </div>
              <h5 className="text-black dark:text-white">
                903 Students
              </h5>
            </div>
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              What you will learn from this course?
            </h1>
            <div>
              {data.benefits?.map((item: any, index: number) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoCheckmarkDoneOutline
                      size={20}
                      className="text-black dark:text-white"
                    />
                  </div>
                  <p className="pl-2 text-black dark:text-white">{item.title}</p>
                </div>
              ))}
            </div>
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              Course Overview
            </h1>
            <CourseContentList data={data?.courseData} isDemo={true} />
          </div>

          <div className="w-full 800px:w-[35%] relative">
            <div className="sticky top-[100px] left-0 z-50 w-full">
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
              <div className="flex items-center">
                <h1 className="pt-5 text-[25px] text-black dark:text-white">
                  {data.price === 0 ? "Free" : "Rs 8999"}
                </h1>
                <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-white">
                  {data.estimatedPrice}
                </h5>
                <h4 className="pl-5 pt-4 text-[22px] text-black dark:text-white">
                  {discountPercentagePrice}% Off
                </h4>
              </div>
              <div className="flex items-center">
                {isPurchased ? (
                  <Link
                    className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    href={`/course-access/${data._id}`}
                  >
                    Enter Course
                  </Link>
                ) : (
                  <button
                    className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    onClick={handleOrder}
                  >
                    Buy Now
                  </button>
                )}
              </div>
              <p className="pb-1 text-black dark:text-white">• 2 years access</p>
              <p className="pb-1 text-black dark:text-white">
                • Certificate of completion
              </p>
              <p className="pb-3 800px:pb-1 text-black dark:text-white">
                • One to One Query Solution  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
