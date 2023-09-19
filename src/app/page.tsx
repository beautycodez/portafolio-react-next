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

      <picture className="whatsapp">
        <a
          href="https://wa.me/51923524695?text=Hola!%20Quisiera%20más%20información"
          target="_blank"
        >
          <Image
            src="/images/whatsapp-100.webp"
            alt="what's app"
            width={100}
            height={100}
          />
        </a>
      </picture>
    </div>
  );
}
