import React from "react";
import { Product } from "../models/Product";

export default function ProductDetail({
  name,
  description,
  new: isNew,
  price,
  image,
  features,
  includes,
}: Product) {
  return (
    <>
      {/* Product Intro */}
      <div className="product mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="h-[35rem]">
          <picture>
            {/* handle image in dynamic route: https://stackoverflow.com/questions/68327935/nextjs-public-images-not-showing-on-dynamic-routes */}
            <source media="(min-width: 1024px)" srcSet={"/" + image?.desktop} />
            <source media="(min-width: 768px)" srcSet={"/" + image?.tablet} />
            <img
              src={"/" + image?.mobile} // render image path from the root
              alt="product image"
              className="h-full w-full rounded-lg object-cover"
            />
          </picture>
        </div>

        <div className="flex flex-col justify-center  space-y-6 text-left">
          {isNew ? (
            <small className="font-light uppercase tracking-[5px] text-accent">
              new product
            </small>
          ) : null}

          <h2 className="max-w-xs text-heading4 md:text-heading2">{name}</h2>
          <p className="max-w-md text-neutral-500">{description}</p>
          <p className="text-heading6">$ {price.toLocaleString("en-US")}</p>
        </div>
      </div>

      {/* Product Feature */}
      <div className="flex flex-col gap-10 py-20 lg:flex-row lg:gap-40">
        <div className="lg:w-[42rem]">
          <h3 className="mb-8 text-heading5 uppercase md:text-heading3">
            features
          </h3>
          <p className="whitespace-pre-line text-neutral-500">{features}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-8 text-heading5 uppercase md:text-heading3">
            in the box
          </h3>
          <div className="space-y-2">
            {includes?.map((item) => (
              <div
                className="grid auto-rows-auto grid-cols-item-grid"
                key={item.item}
              >
                <span className="font-bold text-accent">{item.quantity}x</span>
                <p className="text-left text-neutral-500">{item.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}