import React from "react";
import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useWatches from "../../../assets/hooks/useWatches";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
  const [watches] = useWatches();
  // console.log(watches);
  const price = watches
    .reduce((sum, item) => {
      const numericPrice = parseFloat(item.price.match(/[\d.]+/)[0]);
      return sum + numericPrice;
    }, 0)
    .toFixed(2);
  console.log("total", price);

  return (
    <div>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold">Please Process </h2>
        <h2>-----------------------------------</h2>
        <h2 className="text-3xl  font-bold uppercase">Payment</h2>
        <Elements stripe={stripePromise}>
          <CheckOutForm watches={watches} price={price}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
