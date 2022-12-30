import ZX9Speaker from "../molecules/ZX9Speaker";
import ZX7Speaker from "../molecules/ZX7Speaker";
import YX1Earphones from "../molecules/YX1Earphones";

export default function ProductShowcase() {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
}
