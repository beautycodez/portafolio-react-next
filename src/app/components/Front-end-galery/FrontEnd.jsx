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
        className="md:w-44 mx-auto"
      />
    </div>
  );
}

export function InfoTech({ info }) {
  return (
    <div className="bg-blue-950 py-5 w-full">
      <div className="mx-auto text-2xl bg-black text-white w-fit p-2 rounded-lg hover:bg-white hover:text-black">
        {info}
      </div>
    </div>
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
  ];

  function handleClickInfo(infoWeb) {
    const info = infoWeb;
    console.log(infoWeb);
    setInfo(info);
  }

  return (
    <div>
      <div className="bg-black py-10 px-10">
        <h1 className="text-white text-3xl text-center ">Front-end Projects</h1>
        <div className="flex flex-col md:flex-row 
          flex-wrap gap-2 lg:flex-row">
          {websites.map((web) => (
            <section
              className="block w-44 mx-auto my-5 text-center"
              key={web.id}
            >
              <h1 className="text-white text-2xl h-16 ">{web.title}</h1>
              <FrontEndExample title={web.title} img={web.img} />
              <div className="flex flex-col">
                <Button
                  onClick={() => {
                    handleClickInfo(web.infoWeb);
                  }}
                >
                  Info
                </Button>
                <Button variant="contained">
                  <Link href={web.url} target="_blank">
                    Go to the Website
                  </Link>
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>
      <InfoTech info={info} />
    </div>
  );
};

export default FrontEnd;
