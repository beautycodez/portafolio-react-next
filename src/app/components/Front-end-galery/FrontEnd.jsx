"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../../../lib/mui";
import { useState } from "react";
import Link from "next/link";

export function FrontEndExample({ img, title }) {
  return (
    <div>
      <Image
        src={img}
        alt={title}
        width={250}
        height={250}
        className="mx-auto aspect-square w-full rounded-xl object-cover"
      />
    </div>
  );
}

export function InfoTech({ info }) {
  return (
    info && (
      <div className="mt-8 w-full rounded-2xl bg-[#e5f2f0] px-5 py-4 text-center text-[#102a43]">
        <div className="mx-auto w-fit rounded-lg bg-white px-5 py-3 text-base font-medium shadow-sm sm:text-lg">
          <p>{info}</p>
        </div>
      </div>
    )
  );
}

const FrontEnd = () => {
  const [info, setInfo] = useState("");

  const websites = [
    {
      id: 1,
      title: "Bountiful Food",
      url: "https://beautycodez.github.io/wdd230/final-project-wdd230/bountiful-food-homepage.html",
      img: "/images/bountiful-400.png",
      infoWeb: "Bountiful Food: Html, CSS, JavaScript",
    },
    {
      id: 2,
      title: "Claudie's",
      url: "https://beautycodez.github.io/wdd230/personal-project/claudie.html",
      img: "/images/claudie-400.png",
      infoWeb: "Claudie: Html, CSS, JavaScript",
    },
    {
      id: 3,
      title: "Neferet",
      url: "https://beautycodez.github.io/wdd230/joyeria-neferet/neferet/index.html",
      img: "/images/neferet-400.png",
      infoWeb: "Neferet: Html, CSS, JavaScript",
    },
    {
      id: 4,
      title: "Chamber of Commerce",
      url: "https://beautycodez.github.io/wdd230/lesson4/chamber/index.html",
      img: "/images/naruto-400.png",
      infoWeb: "Chamber of Commerce: Html, CSS, JavaScript",
    },
    {
      id: 5,
      title: "Mis Finanzas",
      url: "https://finanzas-app-eight-flax.vercel.app/",
      img: "/images/mis-finanzas.svg",
      infoWeb: "Mis Finanzas: aplicación web para gestionar tus finanzas personales.",
    },
    {
      id: 6,
      title: "WDD 230 Assignment Portal",
      url: "https://beautycodez.github.io/wdd230/",
      img: "/images/wdd230-portal.svg",
      infoWeb: "WDD 230 Assignment Portal: portal de tareas y proyectos de desarrollo web.",
    },
  ];

  function handleClickInfo(infoWeb) {
    setInfo(infoWeb);
  }

  return (
    <section className="bg-white px-6 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
          Selected work
        </p>
        <h2 className="mb-9 text-center text-3xl font-semibold tracking-tight text-[#102a43] sm:mb-12 sm:text-4xl">
          Front-end Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {websites.map((web) => (
            <section
              className="flex flex-col rounded-2xl bg-[#f3f7f8] p-4 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              key={web.id}
            >
              <h3 className="mb-3 flex min-h-14 items-center justify-center text-lg font-semibold text-[#102a43]">
                {web.title}
              </h3>
              <FrontEndExample title={web.title} img={web.img} />
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  onClick={() => {
                    handleClickInfo(web.infoWeb);
                  }}
                  sx={{
                    color: "#0f766e",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "rgba(15, 118, 110, 0.08)" },
                  }}
                >
                  Info
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "9999px",
                    backgroundColor: "#0f766e",
                    "&:hover": { backgroundColor: "#0b5f59" },
                  }}
                >
                  <Link href={web.url} target="_blank" rel="noreferrer">
                    Go to the Website
                  </Link>
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>
      <InfoTech info={info} />
    </section>
  );
};

export default FrontEnd;
