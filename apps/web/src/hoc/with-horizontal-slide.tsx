import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useScreenDetector } from "../hooks/use-screen-detector";

export function HorizontalSlider<T>({
  columnCount = 1,
  data,
  renderHeader,
  renderProp,
}: {
  columnCount: number;
  data: T[];
  renderHeader: () => JSX.Element;
  renderProp: (data: T) => JSX.Element;
}): JSX.Element {
  const { isMobile, isTablet } = useScreenDetector();

  const count: number = useMemo(() => {
    if (isMobile) {
      return 1;
    }
    if (isTablet) {
      return 2;
    }
    return columnCount;
  }, [isMobile, isTablet, columnCount]);

  const [index, setIndex] = useState({
    begin: 0,
    end: 1,
  });

  useEffect(() => {
    setIndex({
      begin: 0,
      end: count,
    });
  }, [count]);

  const onNext = (): void => {
    setIndex({
      begin: index.begin + count,
      end: index.end + count,
    });
  };

  const onPrev = (): void => {
    setIndex({
      begin: index.begin - count,
      end: index.end - count,
    });
  };

  return (
    <div className="space-y-10">
      <div
        className="flex flex-row w-full items-center  text-primary-gable-green"
        key="channel card"
      >
        <div className="flex-1">{renderHeader()}</div>
        <div className="flex flex-row ">
          <button
            className="disabled:cursor-not-allowed"
            disabled={index.begin === 0}
            onClick={onPrev}
            type="button"
          >
            <ChevronLeftIcon className="h-[24px] w-[24px]" />
          </button>
          <button
            className="disabled:cursor-not-allowed"
            disabled={index.end >= data.length}
            onClick={onNext}
            type="button"
          >
            <ChevronRightIcon className="h-[24px] w-[24px]" />
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "grid gap-10 grid-cols-1 md:grid-cols-2",
          columnCount === 1 && "lg:grid-cols-1",
          columnCount === 2 && "lg:grid-cols-2",
          columnCount === 4 && "lg:grid-cols-4"
        )}
      >
        {[...data].slice(index.begin, index.end).map((datum) => {
          return <div key={datum as string}>{renderProp(datum)}</div>;
        })}
      </div>
    </div>
  );
}
