"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState, useRef } from "react";
import { FeaturedCard } from "ui";
import Image from "next/image";
import { URLs } from "../../consts";

const handleHorizontalScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number,
  onScrollAbilityChange: (ability: boolean) => void
): void => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
    if (element.scrollLeft === 0) {
      onScrollAbilityChange(true);
    } else {
      onScrollAbilityChange(false);
    }
  }, speed);
};

export function FeaturedCards(): JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null);

  const [arrowDisable, setArrowDisable] = useState(true);

  const onNext = (): void => {
    if (elementRef.current) {
      handleHorizontalScroll(elementRef.current, 5, 1670, 10, setArrowDisable);
    }
  };

  const onPrev = (): void => {
    if (elementRef.current) {
      handleHorizontalScroll(elementRef.current, 5, 1670, -10, setArrowDisable);
    }
  };

  return (
    <div className="space-y-8">
      <div
        className="flex flex-row w-full items-center text-primary-gable-green"
        key="featured card"
      >
        <p className="flex-1 text-5xl font-bold"> Featured Sessions</p>
        <div className="flex flex-row ">
          <button disabled={arrowDisable} onClick={onPrev} type="button">
            <ChevronLeftIcon className="h-[24px] w-[24px]" />
          </button>
          <button onClick={onNext} type="button">
            <ChevronRightIcon className="h-[24px] w-[24px]" />
          </button>
        </div>
      </div>

      <div
        className="flex flex-row overflow-scroll w-full space-x-10"
        key="hello"
        ref={elementRef}
      >
        {URLs.map((url) => {
          return (
            <FeaturedCard key={url}>
              <div className="relative h-[240px]">
                <Image
                  alt="alt-image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={url}
                  title="Photo from Unsplash"
                />
              </div>
            </FeaturedCard>
          );
        })}
      </div>
    </div>
  );
}
