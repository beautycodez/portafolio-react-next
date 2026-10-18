import { IconButton } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { BiHappyAlt } from "react-icons/bi";

const Modal = ({ children, modal, setModal }) => {
  return (
    <>
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#102a43]/60 p-5 backdrop-blur-sm"
          onClick={() => setModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="introduction-title"
            className="relative my-auto max-h-[80vh] min-h-20 w-full max-w-lg overflow-y-auto rounded-2xl bg-[#102a43] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 border-b border-[#486581] pb-4 pr-12">
              <h2 id="introduction-title" className="flex items-center gap-2 text-xl font-semibold text-white">
                Hi!
              </h2>
            </div>
            <IconButton
              onClick={() => {
                setModal(false);
              }}
              aria-label="Close introduction"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                width: 40,
                height: 40,
                color: "#a8d8d2",
                backgroundColor: "rgba(168, 216, 210, 0.12)",
                "&:hover": { backgroundColor: "rgba(168, 216, 210, 0.24)" },
              }}
            >
              <GrClose aria-hidden="true" />
            </IconButton>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
