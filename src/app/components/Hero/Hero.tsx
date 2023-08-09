"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useState } from "react";
import Modal from '../Modal/Modal';

const Hero = () => {

  const [modal, setModal] = useState(false);

  return (
    <div className="text-purple-950">
      <section className="flex flex-row w-9/12 mx-auto my-20 space-x-10 bg-slate-50 max-w-xl border-2 border-black">
        <Image
          src="http://placekitten.com/200/300"
          width={200}
          height={300}
          alt="image"
        />
        <div className="flex flex-col justify-between pr-8">
          <h1 className="text-2xl text-slate-800 text-center">
            The best personalized websites to meat and overcome your goals
          </h1>
          <Button onClick={() => {setModal(true)}} className="text-red-600 bottom-3 w-fit mx-auto mb-3" variant="contained">
            Know Me Better
          </Button>
        </div>
      </section>
      <Modal modal={modal} setModal={setModal}>
        <p>My name is Angello and I am a software developer very passionate for technology. My purpose is to bring the best experience to the user and help companies to achieve their goals with amazing designs.</p>
      </Modal>
    </div>
  );
};

export default Hero;
