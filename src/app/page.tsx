import React from "react";
import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation/Navigation";
import { Header } from "./components/Header";
import FrontEnd from "./components/Front-end-galery/FrontEnd";

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <Hero />
        <FrontEnd />
      </main>
    </div>
  );
}
