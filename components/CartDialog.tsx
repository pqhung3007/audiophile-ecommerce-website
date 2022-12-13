import { Dispatch, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  cartItems,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  totalQuantity,
  totalPrice,
} from "../features/cartSlice";
import ProductQuantity from "./ProductQuantity";
import ForwardButton from "./ForwardButton";

interface DialogProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CartDialog({
  isModalOpen,
  setIsModalOpen,
}: DialogProps) {
  const quantity = useSelector(totalQuantity);
  const price = useSelector(totalPrice);
  const items = useSelector(cartItems);
  const dispatch = useDispatch();

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm space-y-6 rounded bg-white p-6">
          <div className="mb-4 flex justify-between">
            <h3 className="text-lg font-bold uppercase">cart ({quantity})</h3>
            <button
              className="text-neutral-500 hover:underline"
              onClick={() => dispatch(clearCart())}
            >
              Remove all
            </button>
          </div>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                className="flex items-center justify-between gap-4"
                key={index}
              >
                <div className="h-16 w-16 object-cover">
                  <Image
                    src={"/" + item.image}
                    width={64}
                    height={64}
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="font-bold text-neutral-500">$ {item.price}</p>
                </div>
                <ProductQuantity
                  quantity={item.quantity}
                  increment={() => dispatch(increaseQuantity(item.id))}
                  decrement={() => dispatch(decreaseQuantity(item.id))}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <p className="uppercase text-neutral-500">total</p>
            <div className="text-lg font-bold">$ {price}</div>
          </div>

          <button className="w-full border-none bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white duration-200 hover:bg-accent-hover">
            checkout
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
