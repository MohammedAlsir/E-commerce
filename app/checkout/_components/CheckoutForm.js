import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import CartContext from "../../_contexts/CartContext";
import { useUser } from "@clerk/nextjs";
import OrdersApis from "../../_utils/OrdersApis";
import CartApi from "../../_utils/CartApi";

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const form = document.getElementById("payment-form");
  const submitBtn = document.getElementById("submit");

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const handleError = (error) => {
      const messageContainer = document.querySelector("#error-message");
      messageContainer.textContent = error.message;
      submitBtn.disabled = false;
    };

    creatOrder();

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const creatOrder = () => {
    // get all product id
    let productIds = [];
    cart.forEach((item) => {
      productIds.push(item?.product?.id);
    });

    // put data
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIds,
      },
    };

    // send data to api
    OrdersApis.addToOrder(data).then((res) => {
      if (res) {
        cart.forEach((el) => {
          CartApi.deleteItem(el?.id).then(() => {});
        });
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] my-12">
        <PaymentElement />
        <button disabled={!stripe} className="bg-primary p-2 text-white mt-2 w-full rounded-md">
          ${amount} Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
