import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between bg-black px-6 lg:px-16">
      <button
        id="menu-btn"
        className="hamburger relative z-20 block focus:outline-none lg:hidden"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <Image
        src="/assets/shared/desktop/logo.svg"
        alt="logo"
        width={143}
        height={25}
      />

      <ul className="hidden space-x-6 text-xs font-bold uppercase tracking-[2.5px] text-white lg:flex">
        <li className="duration-200 hover:text-accent">
          <Link href="/">home</Link>
        </li>
        <li className="duration-200 hover:text-accent">
          <Link href="/headphones">headphones</Link>
        </li>
        <li className="duration-200 hover:text-accent">
          <Link href="/speakers">speakers</Link>
        </li>
        <li className="duration-200 hover:text-accent">
          <Link href="/earphones">earphones</Link>
        </li>
      </ul>
      <button>
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="logo"
          width={23}
          height={20}
        />
      </button>
    </div>
  );
}

export default Navbar;
