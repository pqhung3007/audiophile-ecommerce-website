import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CategoryLinks from "../CategoryLinks";
import { links } from "../../utils/links";
import { totalQuantity } from "../../features/cartSlice";
import CartDialog from "../CartDialog";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);
  const { asPath } = useRouter();
  const quantity = useSelector(totalQuantity);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isOpen]);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === menuRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="z-30 flex h-16 w-full items-center justify-between border-b border-gray-800 bg-black px-6 lg:px-16">
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

        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />
        </Link>

        <ul className="hidden space-x-6 text-xs font-bold uppercase tracking-[2.5px] text-white lg:flex">
          {links.map((link) => (
            <li
              className={`duration-200 hover:text-accent ${
                asPath === link.url ? "text-accent" : ""
              }`}
              key={link.id}
            >
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>

        <button
          className="relative"
          onClick={() => setIsModalOpen((current) => !current)}
        >
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="logo"
            width={23}
            height={20}
          />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white">
            {quantity}
          </span>
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

      {/* Cart Dialog */}
      <CartDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default Navbar;
