"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "../../consts";
import { Card } from "./card";
import { BoxIndicator } from "./box-indicator";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export function FeaturedContentSlider(): JSX.Element {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const imageIndex: number = wrap(0, images.length, page);

  const paginate = (newDirection: number): void => {
    setPage((currentPage) => currentPage + newDirection);
    setDirection(newDirection);
  };

  return (
    <div className="max-w-[1720px] h-[600px] bg-white relative py-4">
      <AnimatePresence custom={direction} initial={false}>
        <button
          className="bg-[#1a1717] rounded-full p-3 h-[48px] w-[48px] hover:bg-secondary text-white float-left absolute top-1/2 left-8 "
          onClick={() => {
            paginate(-1);
          }}
          type="button"
        >
          <ChevronLeftIcon className="h-[24px] w-[24px] " />
        </button>
        <div className="px-[100px]">
          <motion.div
            animate="center"
            custom={direction}
            exit="exit"
            initial="enter"
            key={page}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            variants={variants}
          >
            <Card currentIndex={imageIndex} />
          </motion.div>
          <BoxIndicator
            className="-mt-4"
            currentIndex={imageIndex}
            length={images.length}
          />
        </div>
        <button
          className="bg-[#181818] rounded-full p-3 h-[48px] w-[48px] hover:bg-secondary text-white float-right absolute top-1/2 right-8"
          onClick={() => {
            paginate(1);
          }}
          type="button"
        >
          <ChevronRightIcon className="h-[24px] w-[24px]" />
        </button>
      </AnimatePresence>
    </div>
  );
}
