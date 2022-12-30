import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  text: string;
  url: string;
  imageLink: string;
}

export default function CategoryLink({ text, url, imageLink }: CategoryProps) {
  return (
    <Link
      className="group relative flex flex-1 flex-col items-center justify-center rounded-lg bg-product pt-24 pb-6"
      href={url}
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:-top-8 lg:-top-12">
        <picture>
          <source srcSet={imageLink} type="image/webp" />
          <img src={imageLink} alt={text} />
        </picture>
      </div>

      <h3 className="mb-4 text-sm font-bold uppercase lg:text-lg">{text}</h3>
      <span className="flex items-center justify-center text-xs font-bold uppercase text-neutral-500 duration-200 group-hover:text-accent">
        shop
        <Image
          src="/assets/shared/desktop/icon-arrow-right.svg"
          width={8}
          height={12}
          alt="arrow"
          className="ml-2"
        />
      </span>
    </Link>
  );
}
