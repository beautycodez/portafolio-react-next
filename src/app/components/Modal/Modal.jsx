import { Button } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import {BiHappyAlt} from 'react-icons/bi'

const Modal = ({ children, modal, setModal }) => {
  return (
    <>
      {modal && (
        <div className="flex justify-center align-middle w-full h-full fixed top-0 bg-black/50">
          <div className="w-7/12 max-h-60 min-h-20 bg-white relative rounded-md shadow-lg p-5 my-auto">
            <div className="flex align-middle justify-between mb-5 pb-8 border-b-2 border-black h-2">
              <h1 className="text-black text-xl flex">Hi! Nice to meet you<BiHappyAlt /></h1>
            </div>
            <Button
              onClick={() => {
                setModal(false);
              }}
              className="absolute top-5 right-5 w-5 border-none rounded-md hover:bg-slate-200 cursor-pointer text-center "
            >
              <GrClose />
            </Button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
