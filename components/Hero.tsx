export default function Hero() {
  return (
    <div className="relative">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-hero.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/tablet/image-header.jpg"
        />
        <img
          src="/assets/home/mobile/image-header.jpg"
          className="w-full"
          alt="hero"
        />
      </picture>

      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8 lg:left-16 lg:w-auto lg:-translate-x-0 lg:px-0">
        <div className="mx-auto max-w-md space-y-4 text-center md:space-y-8 lg:text-left">
          <small className="text-sm uppercase tracking-[5px] text-neutral-400">
            new product
          </small>
          <h1 className="text-heading3 uppercase text-white md:text-heading1">
            xx99 mark ii headphones
          </h1>
          <p className="text-neutral-400">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className=" border-none bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-white duration-200 hover:bg-accent-hover">
            see product
          </button>
        </div>
      </div>
    </div>
  );
}
