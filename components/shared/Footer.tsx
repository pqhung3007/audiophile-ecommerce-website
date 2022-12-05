import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../SocialLinks";
import { links } from "../../utils/links";

function Footer() {
  return (
    <footer className="relative flex flex-col gap-8 bg-footer px-6 py-12 md:place-items-start md:pt-16 lg:px-16">
      <div className="absolute top-0 left-1/2 h-1 w-24 -translate-x-1/2 bg-accent md:left-6 md:translate-x-0 lg:left-16"></div>
      <div className="flex w-full flex-col place-items-center gap-8 md:flex-row md:justify-between">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={143}
          height={25}
        />

        <ul className="flex flex-col space-y-6 text-center text-xs font-bold uppercase tracking-[2.5px] text-white md:flex-row md:space-y-0 md:space-x-6">
          {links.map((link) => (
            <li className="duration-200 hover:text-accent" key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid-settings grid gap-8">
        <p className="grid-a row-span-full text-center text-sm text-neutral-500 md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>

        <p className="grid-b text-center font-semibold text-neutral-500 md:text-left">
          Copyright 2021. All Rights Reserved
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
