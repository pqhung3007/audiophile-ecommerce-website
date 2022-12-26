import { useSelector } from "react-redux";
import { totalPrice } from "../features/cartSlice";

export const useCartTotal = () => {
  const SHIPPING_FEE = 50;
  const VAT_VALUE = 0.2;

  const cartTotal = useSelector(totalPrice);
  const VAT = Math.round(cartTotal * VAT_VALUE);
  const grandTotal = Math.round(cartTotal + VAT + SHIPPING_FEE);

  return {
    cartTotal,
    SHIPPING_FEE,
    VAT,
    grandTotal,
  };
};
