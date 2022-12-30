import { RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
}

export default function RadioPayment({
  paymentMethod,
  setPaymentMethod,
}: Props) {
  const options = ["e-Money", "Cash on Delivery"];
  return (
    <RadioGroup
      defaultValue={paymentMethod}
      onChange={setPaymentMethod}
      className="flex flex-col gap-4"
    >
      <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>
      {options.map((option) => (
        <RadioGroup.Option
          key={option}
          value={option}
          className={({ active, checked }) =>
            `w-full cursor-pointer rounded-md border border-gray-200 p-4 text-xs font-semibold ${
              checked ? "border-none bg-accent text-white" : ""
            } ${active ? "border border-accent" : ""}`
          }
        >
          {({ checked }) => (
            <div className="flex items-center justify-between">
              <p>{option}</p>
              {checked ? <CheckIcon className="h-4 w-4" /> : null}
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
