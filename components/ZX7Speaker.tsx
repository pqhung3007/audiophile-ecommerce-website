export default function ZX7Speaker() {
  return (
    <div className="relative">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
        />
        <img
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          className="w-full rounded-lg object-cover"
          alt="zx7"
        />
      </picture>

      <div className="absolute top-1/2 left-8 -translate-y-1/2 md:left-16">
        <h3 className="mb-6 text-heading4 uppercase">zx7 speaker</h3>
        <button className=" border border-black bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider duration-200 hover:bg-black hover:text-white">
          see product
        </button>
      </div>
    </div>
  );
}
