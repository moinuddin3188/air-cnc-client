import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        CARD NUMBER
        <CardNumberElement

          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <div className="row">
        <div className="col-md-6 col-12">
          <label htmlFor="">
            NAME ON CARD
            <input className='mt-1' type="text"/>
          </label>
        </div>
        <div className="col-md-3 col-12">
          <label>
            EXPIRATION DATE
            <CardExpiryElement

              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
        </div>
        <div className="col-md-3 col-12">
          <label>
            CVC
            <CardCvcElement

              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
        </div>
      </div>
    </form>
  );
};

export default SplitForm;
