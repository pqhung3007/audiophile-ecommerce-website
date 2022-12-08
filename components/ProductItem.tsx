import Link from "next/link";
import { Product } from "../models/Product";
import NavigatingButton from "./NavigatingButton";

export default function ProductItem({
  slug,
  name,
  category,
  description,
  new: isNew,
  categoryImage,
}: Product) {
  return (
    <div className="product flex flex-col gap-6 lg:flex-row lg:odd:order-1 lg:even:flex-row-reverse">
      <div className="flex-1">
        <picture>
          <source media="(min-width: 1024px)" srcSet={categoryImage.desktop} />
          <source media="(min-width: 768px)" srcSet={categoryImage.tablet} />
          <img
            src={categoryImage.mobile}
            alt="best gear"
            className="w-full rounded-lg"
          />
        </picture>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center space-y-6 text-center lg:items-start lg:text-left">
        {isNew ? (
          <small className="font-light uppercase tracking-[5px] text-accent">
            new product
          </small>
        ) : null}

        <h2 className="max-w-xs text-heading4 md:text-heading2">{name}</h2>
        <p className="max-w-md text-neutral-500">{description}</p>

        <Link href={`/${category}/${slug}`}>
          <NavigatingButton text="see product" />
        </Link>
      </div>
    </div>
  );
}
