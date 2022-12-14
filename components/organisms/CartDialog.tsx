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
} from "../../features/cartSlice";
import ProductQuantity from "../atoms/ProductQuantity";
import Link from "next/link";

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
        <Dialog.Panel className="mx-auto w-full max-w-sm space-y-6 rounded bg-white p-6">
          {items.length > 0 ? (
            <div>
              <div className="mb-4 flex justify-between">
                <h3 className="text-lg font-bold uppercase">
                  cart ({quantity})
                </h3>
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
                    <div className="object-cover">
                      <Image
                        src={"/" + item.image}
                        width={64}
                        height={64}
                        alt=""
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-sm font-bold text-neutral-500">
                        $ {item.price}
                      </p>
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
                <strong className="text-lg">$ {price}</strong>
              </div>

              <Link href="/checkout">
                <button
                  className="mt-4 w-full border-none bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white duration-200 hover:bg-accent-hover"
                  onClick={() => setIsModalOpen(false)}
                >
                  checkout
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <strong>Your cart is empty</strong>
              <Image
                src="/assets/cart/cart.svg"
                width={96}
                height={96}
                alt=""
                className="mx-auto h-32 w-32"
              />
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
