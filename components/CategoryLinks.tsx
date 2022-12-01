import React from "react";
import { links } from "../utils/links";
import CategoryLink from "./CategoryLink";

function CategoryLinks() {
  return (
    <section className="flex flex-col space-y-16 pb-20 md:flex-row md:space-y-0 md:space-x-6">
      {links.map((link) => (
        <CategoryLink {...link} key={link.id} />
      ))}
    </section>
  );
}

export default CategoryLinks;
