import React, { useState } from "react";
import FormField from "./shared/FormField";

export default function CheckoutForm() {
  const options = ["e-Money", "Cash on Delivery"];
  const [paymentMethod, setPaymentMethod] = useState(options[0]);

  return (
    <div className="rounded-lg bg-white px-8 pt-12 pb-8">
      <h2 className="mb-4 text-heading4 uppercase md:text-heading3 ">
        checkout
      </h2>

      <div className="space-y-12">
        <fieldset>
          <legend className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
            billing details
          </legend>
          <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
            <FormField label="Name" type="text" placeholder="John Doe" />
            <FormField
              label="Email Address"
              type="email"
              placeholder="john.doe@gmail.com"
            />
            <FormField
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
              label="Your Address"
              type="text"
              placeholder="Vin Ocean Park"
            />
            <FormField label="ZIP Code" type="text" placeholder="100000" />
            <FormField label="City" type="text" placeholder="Hanoi" />
            <FormField label="Country" type="text" placeholder="Vietnam" />
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
            payment details
          </legend>
          <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
            <label htmlFor="name" className="mb-2 block text-xs font-bold">
              Payment Method
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
