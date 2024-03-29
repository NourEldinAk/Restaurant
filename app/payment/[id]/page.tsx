"use client"
import React, { useEffect,useState } from 'react'
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '@/components/CheckoutForm';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const PaymentPage = ({params} : {params :{id:string}}) => {
const {id} = params
const [clientSecret, setClientSecret] = React.useState("");

useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [id]);

    const options:StripeElementsOptions  = {
        clientSecret,
        appearance : {
            theme: "light"
        }
    }
  return (
    <div>
        {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements> 
        )}
    </div>
  )
}

export default PaymentPage
