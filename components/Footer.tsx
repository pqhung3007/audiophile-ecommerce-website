/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="grid grid-cols-1 place-items-center gap-8 bg-footer px-6 pt-8 pb-6">
      <Image
        src="/assets/shared/desktop/logo.svg"
        alt="logo"
        width={143}
        height={25}
      />

      <ul className="flex flex-col space-y-6 text-center text-xs font-bold uppercase tracking-[2.5px] text-white md:flex-row md:space-y-0 md:space-x-6">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="">headphone</Link>
        </li>
        <li>
          <Link href="">speakers</Link>
        </li>
        <li>
          <Link href="">earphones</Link>
        </li>
      </ul>

      <p className="text-center text-neutral-500">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p className="font-semibold text-neutral-500">
        Copyright 2021. All Rights Reserved
      </p>

      <SocialLinks />
    </footer>
  );
}

export default Footer;
