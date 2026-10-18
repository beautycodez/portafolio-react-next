import React from "react";
import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation/Navigation";
import { Header } from "./components/Header";
import FrontEnd from "./components/Front-end-galery/FrontEnd";
import Image from "next/image";
import Skills from "./components/Skills/Skills";
import Githubsection from "./components/Githubsection/Githubsection";

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <Hero />
        <FrontEnd />
        <Skills />
        <Githubsection />
      </main>

      <picture className="fixed bottom-3 right-3 z-40 sm:bottom-5 sm:right-5">
        <a
          href="https://wa.me/51923524695?text=Hola!%20Quisiera%20más%20información"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Angello on WhatsApp"
        >
          <Image
            src="/images/whatsapp-100.webp"
            alt="what's app"
            width={100}
            height={100}
            className="h-14 w-14 drop-shadow-lg sm:h-16 sm:w-16"
          />
        </a>
      </picture>
    </div>
  );
}
