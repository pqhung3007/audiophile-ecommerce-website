import { links } from "../../utils/links";
import CategoryLink from "../molecules/CategoryLink";

export default function CategoryLinks() {
  return (
    <section className="flex flex-col space-y-16 pb-24 md:flex-row md:space-y-0 md:space-x-6">
      {links.slice(1).map((link) => (
        <CategoryLink {...link} key={link.id} />
      ))}
    </section>
  );
}
