"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);

  return (
    // picture of me
    <div className="bg-white">
      <div className="container-angello">
        <div className="yellow-div bg-yellow-500 mx-auto">
        </div>
        <Image
            src="/images/angello-photo.png"
            width={200}
            height={600}
            alt="image"
            className="angello mx-auto"
          />
      </div>

      <div className="bg-slate-900 py-8">
        <div className="flex flex-col lg:pr-0 bg-black w-2/3 mx-auto py-8 rounded-xl">
          <h1 className="text-xl h-64  pt-4 px-4 leading-normal text-white text-center font-extralight">
            Design your website according to your needs and make whatever you want for real!
          </h1>
          <Button
            onClick={() => {
              setModal(true);
            }}
            className="bottom-3 w-fit mx-auto mb-3 animate-pulse"
            variant="outlined"
          >
            Know Me Better
          </Button>
        </div>
        <Modal modal={modal} setModal={setModal}>
          <p className="text-white text-justify">
            My name is Angello Ruiz and I am a software developer very
            passionate for technology. My purpose is to bring the best
            experience to the user and help companies to achieve their goals
            with amazing designs.
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default Hero;
