import React from "react";

function BestGear() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pb-20 lg:flex-row-reverse">
      <div className="flex-1">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/shared/desktop/image-best-gear.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
          <img
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="best gear"
            className="w-full rounded-lg"
          />
        </picture>
      </div>

      <div className="flex-1 text-center lg:text-left">
        <h2 className="mb-6 text-heading4 uppercase lg:text-heading2 lg:tracking-wide">
          bringing you the <span className="text-accent">best</span> audio gear
        </h2>

        <p className="indent-4 text-sm text-neutral-400 lg:indent-0 lg:leading-6">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default BestGear;
