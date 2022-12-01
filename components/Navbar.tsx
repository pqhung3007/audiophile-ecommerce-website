import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryLinks from "./CategoryLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    document.getElementById("menu-btn")?.classList.toggle("open");
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === menuRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="z-30 flex h-16 w-full items-center justify-between bg-black px-6 lg:px-16">
        {/* Hamburger */}
        <button className="block lg:hidden" onClick={handleOpenMenu}>
          <Image
            src={`${
              isOpen
                ? "/assets/shared/tablet/icon-close-menu.svg"
                : "/assets/shared/tablet/icon-hamburger.svg"
            }`}
            alt="menu icon"
            width={16}
            height={15}
          />
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

      {/* Menu */}
      {isOpen ? (
        <div
          className="fixed inset-x-0 inset-y-16 z-10 min-h-screen bg-black/50"
          ref={menuRef}
          onClick={handleClickOutside}
        >
          <div className=" bg-white px-6 pt-16">
            <CategoryLinks />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
