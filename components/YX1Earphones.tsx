export default function YX1Earphones() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
        />
        <img
          src="/assets/home/mobile/image-earphones-yx1.jpg"
          className="w-full rounded-lg object-cover"
          alt="zx7"
        />
      </picture>

      <div className="flex flex-col items-start justify-center rounded-lg bg-product px-8 py-16 md:px-16">
        <h3 className="mb-6 text-heading4 uppercase">yx1 earphones</h3>
        <button className=" border border-black bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider duration-200 hover:bg-black hover:text-white">
          see product
        </button>
      </div>
    </div>
  );
}
