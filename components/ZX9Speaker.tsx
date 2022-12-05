export default function ZX9Speaker() {
  return (
    <div className="flex flex-col rounded-lg bg-accent bg-pattern-circles bg-cover bg-left-top py-8 lg:flex-row lg:pt-20 lg:pb-0">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-speaker-zx9.png"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/tablet/image-speaker-zx9.png"
        />
        <img
          src="/assets/home/mobile/image-speaker-zx9.png"
          className="mx-auto w-48 lg:mx-20 lg:w-[20rem]"
          alt="zx9"
        />
      </picture>

      <div className="mt-8 flex flex-col items-center space-y-4 text-center lg:ml-20 lg:items-start lg:text-left">
        <h3 className="text-heading3 uppercase text-white md:text-heading1">
          zx9 speaker
        </h3>
        <p className="max-w-xs text-white/80">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="border-none bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white duration-200 hover:bg-[#4C4C4C]">
          see product
        </button>
      </div>
    </div>
  );
}
