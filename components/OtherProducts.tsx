import Link from "next/link";
import { Other } from "../models/Product";
import NavigatingButton from "./NavigatingButton";

interface OtherProps {
  others: Other[] | undefined;
}

export default function OtherProducts({ others }: OtherProps) {
  return (
    <section className="pb-20">
      <h3 className="mb-8 text-center text-heading5 uppercase md:text-heading3">
        you may also like
      </h3>
      <ul className="flex flex-col gap-6 md:flex-row">
        {others?.map((otherProduct: Other) => {
          const { name, slug, image } = otherProduct;
          return (
            <li className="flex flex-col items-center space-y-6" key={slug}>
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={"/" + image.desktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={"/" + image.tablet}
                />
                <img
                  src={"/" + image.mobile}
                  alt="best gear"
                  className=" rounded-lg"
                />
              </picture>

              <h3 className="text-heading5 uppercase">{name}</h3>

              <Link href={`/${slug}`}>
                <NavigatingButton text="see product" />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
