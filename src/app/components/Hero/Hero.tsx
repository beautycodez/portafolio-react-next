"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useState } from "react";
import Modal from '../Modal/Modal';

const Hero = () => {

  const [modal, setModal] = useState(false);

  return (
    // picture of me
    <div className="text-purple-950">
      <section className="flex flex-col w-full mx-auto my-20 space-x-10 bg-slate-50 max-w-xl border-2 border-black lg:flex-row">
        <Image
          src="http://placekitten.com/300/300"
          width={300}
          height={300}
          alt="image"
          className="mx-auto w-72"
        />
        <div className="flex flex-col justify-between pr-8 lg:pr-0">
          <h1 className="text-2xl h-64  pt-4 text-slate-800 text-center">
            The best personalized websites to meat and overcome your goals
          </h1>
          <Button onClick={() => {setModal(true)}} className="text-red-600 bottom-3 w-fit mx-auto mb-3" variant="contained">
            Know Me Better
          </Button>
        </div>
      </section>
      <Modal modal={modal} setModal={setModal}>
        <p>My name is Angello Ruiz and I am a software developer very passionate for technology. My purpose is to bring the best experience to the user and help companies to achieve their goals with amazing designs.</p>
      </Modal>
    </div>
  );
};

export default Hero;
