"use client";
import { useState } from "react";
// import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../../lib/mui";
import { ClassNames } from "@emotion/react";

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
        className="text-2xl sm:hidden my-auto"
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
    <ul className={`space-x-10 px-5 pt-10 sm:flex ${props.classtype} flex-row`}>
      {navLinks.map((link) => (
        <li className="flex text-center text-white text-xl hover:text-2xl ml-0" key={link.id}>
          <Link className="block m-0 p.0" href={`${link.path}`}>
            {link.linkName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Navigation = () => {
  return (
    <nav className="w-full bg-slate-900 h-28">
      <HamburgerMenu />
    </nav>
  );
};

export default Navigation;
