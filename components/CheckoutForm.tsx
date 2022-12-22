import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import FormField from "./shared/FormField";
import RadioPayment from "./RadioGroupPayment";

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("e-Money");

  const { register, handleSubmit } = useForm();

  const onSubmit = () => console.log("Hello");

  return (
    <div className="basis-2/3 rounded-lg bg-white px-8 py-12 md:pb-4">
      <h2 className="mb-4 text-heading4 uppercase md:text-heading3 ">
        checkout
      </h2>

      <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
            billing details
          </legend>
          <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              {...register("name", {
                required: "Field cannot be empty",
                pattern: {
                  value: /[a-zA-Z]+/g,
                  message: "Wrong format",
                },
              })}
              label="Name"
              type="text"
              placeholder="John Doe"
            />
            <FormField
              {...register("emailAddress", {
                required: "Field cannot be empty",
                pattern: {
                  value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                  message: "Wrong format",
                },
              })}
              label="Email Address"
              type="email"
              placeholder="john.doe@gmail.com"
            />
            <FormField
              {...register("phone", {
                required: "Field cannot be empty",
                pattern: /\d/g,
              })}
              label="Phone Number"
              type="text"
              placeholder="+84123456789"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
            shipping info
          </legend>
          <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              {...register("address", { required: "Field cannot be empty" })}
              label="Your Address"
              type="text"
              placeholder="Vin Ocean Park"
            />
            <FormField
              {...register("zipCode", { pattern: /\d/g })}
              label="ZIP Code"
              type="text"
              placeholder="100000"
            />
            <FormField
              {...register("city", { required: "Field cannot be empty" })}
              label="City"
              type="text"
              placeholder="Hanoi"
            />
            <FormField
              {...register("country")}
              label="Country"
              type="text"
              placeholder="Vietnam"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
            payment details
          </legend>
          <div className="mb-8 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4">
            <p className="mb-4 block text-xs font-bold">Payment Method</p>

            <RadioPayment
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>

          <div className="h-40 md:h-28">
            {paymentMethod === "e-Money" ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  label="e-Money Number"
                  type="text"
                  placeholder="347589510"
                />
                <FormField label="e-Money PIN" type="text" placeholder="6891" />
              </div>
            ) : (
              <div className="flex items-start space-x-8">
                <Image
                  src="/assets/checkout/icon-cash-on-delivery.svg"
                  alt="cod"
                  width={48}
                  height={48}
                />
                <p className="pr-4 text-sm text-neutral-500">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </fieldset>

        <button type="submit">Submit order</button>
      </form>
    </div>
  );
}
