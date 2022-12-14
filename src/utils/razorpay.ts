import axios from "axios";
import Router from "next/router";

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const makePayment = async (eventId: number) => {
  console.log("here...");
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }
  // Make API call to the serverless API
  const { data } = await axios.post("/api/razorpay", {
    eventId,
  });
  console.log(data);
  const options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "Eventsider",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Test Transaction",
    image: "/images/logo.svg",
    handler: function (response: any) {
      Router.push("/profile");
      alert(response.razorpay_payment_id);
    },
    prefill: {
      email: data.email,
      name: data.name,
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
};
