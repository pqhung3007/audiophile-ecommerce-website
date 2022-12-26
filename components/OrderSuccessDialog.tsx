import Link from "next/link";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useSelector } from "react-redux";
import { cartItems, totalQuantity } from "../features/cartSlice";

interface SubmitModalProps {
  isSubmitModalOpen: boolean;
  setIsSubmitModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function OrderSuccessDialog({
  isSubmitModalOpen,
  setIsSubmitModalOpen,
}: SubmitModalProps) {
  const items = useSelector(cartItems);
  const quantity = useSelector(totalQuantity);
  const [showMore, setShowMore] = useState(false);

  return (
    <Dialog
      open={isSubmitModalOpen}
      onClose={() => setIsSubmitModalOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-full max-w-sm rounded bg-white p-6">
            <div className="space-y-4">
              <Image
                src="/assets/shared/desktop/icon-check.svg"
                alt=""
                width={35}
                height={30}
              />
              <h2 className="text-heading4 uppercase md:text-heading3">
                thank you for your order
              </h2>
              <p className="text-neutral-500">
                You will receive an email confirmation shortly.
              </p>
            </div>

            <div className="my-4 flex flex-col overflow-hidden rounded-lg md:my-8 md:flex-row">
              <div className="basis-7/12 space-y-4 bg-product p-4">
                {items
                  .slice(0, showMore ? items.length : 1)
                  .map((item, index) => (
                    <div
                      className="flex items-center justify-between gap-4"
                      key={index}
                    >
                      <div className="w-1/3 object-cover">
                        <Image
                          src={"/" + item.image}
                          width={64}
                          height={64}
                          alt=""
                          className="rounded-lg"
                        />
                      </div>
                      <div className="w-1/3">
                        <p className="text-sm font-bold">{item.name}</p>
                        <p className="text-sm font-bold text-neutral-500">
                          $ {item.price}
                        </p>
                      </div>
                      <p className="w-1/3 text-right font-bold text-neutral-500">
                        x{item.quantity}
                      </p>
                    </div>
                  ))}
                <div className="h-[1px] w-full bg-neutral-300"></div>
                {items.length > 1 ? (
                  <button
                    className="mx-auto w-full text-sm text-neutral-500"
                    onClick={() => setShowMore((prevState) => !prevState)}
                  >
                    {showMore
                      ? "View less"
                      : `and ${items.length - 1} other item(s)`}
                  </button>
                ) : null}
              </div>

              <div className="flex basis-5/12 flex-col justify-center bg-black p-4">
                <p className="uppercase text-neutral-500">grand total</p>
                <strong className="text-lg text-white">$1000</strong>
              </div>
            </div>
            <Link href="/">
              <button className="mt-4 w-full border-none bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white duration-200 hover:bg-accent-hover">
                back to home
              </button>
            </Link>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
