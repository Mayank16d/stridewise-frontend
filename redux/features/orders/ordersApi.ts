import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (type) => ({
        url: `get-orders`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    createPaymentIntent: builder.mutation({
      query: (user) => ({
        url: `payment/${user}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    verifyPayment:builder.mutation({
      query:(merchantId)=>({
        url:`/payment/verify/${merchantId}`,
        method:"GET",
        credentials:"include" as const,
      }),
    }),
    createOrder: builder.mutation({
      query: ({ courseId, payment_info }) => ({
        url: "create-order",
        body: {
          courseId,
          payment_info,
        },
        method: "POST",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery, useCreatePaymentIntentMutation ,useVerifyPaymentMutation,useCreateOrderMutation} =
  ordersApi;
