import React from "react";
import ZX9Speaker from "./ZX9Speaker";
import ZX7Speaker from "./ZX7Speaker";
import YX1Earphones from "./YX1Earphones";

function ProductShowcase() {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
}

export default ProductShowcase;
