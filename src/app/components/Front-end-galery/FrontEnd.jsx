"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../../../lib/mui";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Reveal } from "../Reveal";

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
      <div className="animate-fade-in-up mt-8 w-full rounded-2xl bg-[#e5f2f0] px-5 py-4 text-center text-[#102a43]">
        <div className="mx-auto w-fit rounded-lg bg-white px-5 py-3 text-base font-medium shadow-sm sm:text-lg">
          <p>{info}</p>
        </div>
      </div>
    )
  );
}

export function EmptyCategory({ label }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl bg-[#f3f7f8] px-6 py-12 text-center">
      <h3 className="mb-2 text-xl font-semibold text-[#102a43]">{label}</h3>
      <p className="text-[#486581]">Proyectos próximamente...</p>
    </div>
  );
}

const CATEGORIES = [
  { id: "frontend", label: "Front-end" },
  { id: "backend", label: "Back-end" },
  { id: "ai", label: "Proyectos con IA" },
];

const FrontEnd = () => {
  const [info, setInfo] = useState("");
  const [activeCategory, setActiveCategory] = useState("frontend");
  const intervalRef = useRef(null);

  function startRotation() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = CATEGORIES.findIndex(
          (category) => category.id === prev
        );
        const nextIndex = (currentIndex + 1) % CATEGORIES.length;
        return CATEGORIES[nextIndex].id;
      });
      setInfo("");
    }, 7000);
  }

  useEffect(() => {
    startRotation();
    return () => clearInterval(intervalRef.current);
  }, []);

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

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId);
    setInfo("");
    startRotation();
  }

  return (
    <section className="bg-white px-6 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
            Selected work
          </p>
          <h2 className="mb-9 text-center text-3xl font-semibold tracking-tight text-[#102a43] sm:mb-12 sm:text-4xl">
            Projects
          </h2>
        </Reveal>
        <Reveal>
          <div className="mb-9 flex flex-wrap justify-center gap-3 sm:mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:text-base ${
                  activeCategory === category.id
                    ? "scale-105 bg-[#0f766e] text-white shadow-md shadow-[#0f766e]/30"
                    : "bg-[#f3f7f8] text-[#486581] hover:bg-[#e5f2f0] hover:text-[#0f766e]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div key={activeCategory} className="animate-fade-in-scale">
          {activeCategory === "frontend" ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {websites.map((web, index) => (
            <section
              className="animate-fade-in flex flex-col rounded-2xl bg-[#f3f7f8] p-4 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              key={web.id}
              style={{ animationDelay: `${index * 80}ms` }}
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
        ) : (
          <EmptyCategory
            label={
              CATEGORIES.find((category) => category.id === activeCategory)
                ?.label
            }
          />
        )}
        </div>
      </div>
      <InfoTech info={info} />
    </section>
  );
};

export default FrontEnd;
