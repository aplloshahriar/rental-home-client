// StripePaymentForm.js
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePaymentForm = ({ totalPrice, handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      handlePaymentSuccess(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ${totalPrice}
      </button>
    </form>
  );
};

export default stripePaymentForm;
