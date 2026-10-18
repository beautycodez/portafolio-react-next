"use client";
import { useState } from "react";
// import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { Button } from "../../../lib/mui";

export function HamburgerMenu() {
  const [isHamburger, setIsNotHamburger] = useState(true);

  function handleClick() {
    if (isHamburger == true) {
      setIsNotHamburger(false);
    } else {
      setIsNotHamburger(true);
    }
  }

  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        aria-label={isHamburger ? "Open navigation menu" : "Close navigation menu"}
        sx={{
          display: { xs: "inline-flex", sm: "none" },
          minWidth: 44,
          backgroundColor: "#0f766e",
          "&:hover": { backgroundColor: "#0b5f59" },
        }}
      >
        {isHamburger ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </Button>
      <>
        {!isHamburger ? (
          <NavUlLinks classtype="flex" />
        ) : (
          <NavUlLinks classtype="hidden" />
        )}
      </>
    </>
  );
}

export function NavUlLinks(props: { classtype: string }) {
  let navLinks = [
    { id: 1, linkName: "Home", path: "/" }
  ];
  // { id: 2, linkName: "About Me", path: "./about-me" },
  // { id: 3, linkName: "Work With Me", path: "./work-with-me" },
  // { id: 4, linkName: "Blog", path: "./blog" }
  // "hidden space-x-10 px-5 py-6 h-full sm:flex"
  return (
    <ul
      className={`flex-col items-center gap-4 px-5 py-4 sm:flex sm:flex-row sm:gap-8 sm:py-0 ${props.classtype}`}
    >
      {navLinks.map((link) => (
        <li
          className="text-center text-base font-medium text-white transition-colors hover:text-[#a8d8d2]"
          key={link.id}
        >
          <Link
            className="block rounded-md p-2"
            href={link.path}
            aria-label={link.linkName}
            title={link.linkName}
          >
            <AiFillHome aria-hidden="true" className="text-2xl" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Navigation = () => {
  return (
    <nav className="flex min-h-16 w-full items-center justify-between bg-[#16324f] px-5">
      <HamburgerMenu />
    </nav>
  );
};

export default Navigation;
