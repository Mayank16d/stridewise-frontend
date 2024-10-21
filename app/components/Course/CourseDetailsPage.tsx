import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";
// import {
//   InteuseCreatePaymentntMutation,
// } from "@/redux/features/orders/ordersApi";
import { useCreatePaymentIntentMutation } from "@/redux/features/orders/ordersApi";
// import { loadStripe } from "@stripe/stripe-js";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);
  // const { data: config } = useGetStripePublishablekeyQuery({});
  const [createPaymentIntent, { data: paymentIntentData }] = useCreatePaymentIntentMutation();
  const { data: userData } = useLoadUserQuery(undefined, {});
  // const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");
  console.log(data);
  console.log(id);

  // useEffect(() => {
  //   if (config) {
  //     const publishablekey = config?.publishablekey;
  //     setStripePromise(loadStripe(publishablekey));
  //   }
  //   if (data && userData?.user) {
  //     const amount = Math.round(data.course.price * 100);
  //     createPaymentIntent(amount);
  //   }
  // }, [config, data, userData]);

  // useEffect(() => {
  //   if (paymentIntentData) {
  //     setClientSecret(paymentIntentData?.client_secret);
  //   }
  // }, [paymentIntentData]);
  useEffect(() => {
    if (data && userData?.user) {
      const amount = Math.round(data.course.price * 100);
      createPaymentIntent(amount);
    }
  }, [data, userData, createPaymentIntent]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.course) {
    return <div>Course details not available</div>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + " - Stride Wise"}
            description={
              "Stride Wise is a Stock Market Education Platform"
            }
            keywords={data?.course?.tags}
          />
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          {(
            <CourseDetails
              data={data.course}
              clientSecret={clientSecret}
              setRoute={setRoute}
              setOpen={setOpen}
            />
          )}
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
