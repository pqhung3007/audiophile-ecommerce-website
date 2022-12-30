import { CategoryImage } from "../../models/Product";

interface GalleryProps {
  first?: CategoryImage | undefined;
  second?: CategoryImage | undefined;
  third?: CategoryImage | undefined;
}

export default function ProductGallery({ first, second, third }: GalleryProps) {
  return (
    <div className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-gallery">
      <div className="row-start-1">
        <picture>
          <source media="(min-width: 1024px)" srcSet={"/" + first?.desktop} />
          <source media="(min-width: 768px)" srcSet={"/" + first?.tablet} />
          <img
            src={"/" + first?.mobile}
            alt="best gear"
            className="h-full w-full rounded-lg"
          />
        </picture>
      </div>
      <div className="row-start-2">
        <picture>
          <source media="(min-width: 1024px)" srcSet={"/" + second?.desktop} />
          <source media="(min-width: 768px)" srcSet={"/" + second?.tablet} />
          <img
            src={"/" + second?.mobile}
            alt="best gear"
            className="h-full w-full rounded-lg"
          />
        </picture>
      </div>
      <div className="row-span-2">
        <picture>
          <source media="(min-width: 1024px)" srcSet={"/" + third?.desktop} />
          <source media="(min-width: 768px)" srcSet={"/" + third?.tablet} />
          <img
            src={"/" + third?.mobile}
            alt="best gear"
            className="h-full w-full rounded-lg object-center"
          />
        </picture>
      </div>
    </div>
  );
}
