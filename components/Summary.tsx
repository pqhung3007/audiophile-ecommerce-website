import { useSelector } from "react-redux";
import Image from "next/image";
import { cartItems, totalPrice } from "../features/cartSlice";

export default function Summary() {
  const items = useSelector(cartItems);
  const total = useSelector(totalPrice);
  const shippingFee: number = 50;
  const VAT: number = Math.floor(total * 0.2);

  return (
    <div className=" rounded-lg bg-white p-8">
      <h3 className="text-lg font-bold uppercase tracking-wide">summary</h3>
      {items.length > 0 ? (
        <div>
          <div className="mt-8 space-y-6">
            {items.map((item, index) => (
              <div
                className="flex items-center justify-between gap-4"
                key={index}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={"/" + item.image}
                    width={64}
                    height={64}
                    alt=""
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-sm font-bold text-neutral-500">
                      $ {item.price}
                    </p>
                  </div>
                </div>

                <span className="font-bold text-neutral-500">
                  x{item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex justify-between">
              <p className="uppercase text-neutral-500">total</p>
              <strong className="text-lg">$ {total}</strong>
            </div>
            <div className="flex justify-between">
              <p className="uppercase text-neutral-500">shipping</p>
              <strong className="text-lg">$ {shippingFee}</strong>
            </div>
            <div className="flex justify-between">
              <p className="uppercase text-neutral-500">vat (included)</p>
              <strong className="text-lg">$ {VAT}</strong>
            </div>
            <div className="mt-4 flex justify-between">
              <p className="uppercase text-neutral-500">grand total</p>
              <strong className="text-lg text-accent">
                $ {total + shippingFee + VAT}
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <strong className="text-center">Your cart is empty</strong>
        </div>
      )}
      <button
        className="mt-8 w-full border-none bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-neutral-300"
        type="submit"
        disabled={items.length < 1}
      >
        continue &amp; pay
      </button>
    </div>
  );
}
