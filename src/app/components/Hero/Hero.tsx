"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="bg-[#f3f7f8] px-6 py-12 text-[#102a43] sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="relative mx-auto flex h-[360px] w-full max-w-[360px] items-end justify-center overflow-hidden rounded-3xl bg-[#cce9e5] shadow-xl shadow-[#102a43]/10 sm:h-[420px] md:h-[460px]">
          <div className="absolute bottom-0 h-2/3 w-4/5 rounded-t-full bg-[#a8d8d2]" />
          <Image
            src="/images/angello-photo.png"
            width={200}
            height={600}
            alt="Angello Ruiz"
            priority
            className="relative z-10 h-[350px] w-auto object-contain sm:h-[410px] md:h-[450px]"
          />
        </div>

        <div className="mx-auto max-w-2xl text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
            Front-end developer
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Design your website according to your needs and make whatever you want for real!
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#486581] md:mx-0 sm:text-lg">
            I build thoughtful digital experiences that help businesses connect
            with their customers.
          </p>
          <Button
            onClick={() => {
              setModal(true);
            }}
            variant="outlined"
            sx={{
              mt: 4,
              borderColor: "#0f766e",
              borderRadius: "9999px",
              color: "#0f766e",
              fontWeight: 600,
              px: 3,
              py: 1.25,
              "&:hover": {
                borderColor: "#102a43",
                backgroundColor: "rgba(15, 118, 110, 0.08)",
              },
            }}
          >
            Know Me Better
          </Button>
        </div>

        <Modal modal={modal} setModal={setModal}>
          <p className="leading-7 text-[#d9e2ec]">
            My name is Angello Ruiz and I am a software developer very
            passionate for technology. My purpose is to bring the best
            experience to the user and help companies to achieve their goals
            with amazing designs.
          </p>
        </Modal>
      </div>
    </section>
  );
};

export default Hero;
