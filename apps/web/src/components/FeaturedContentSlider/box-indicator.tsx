import clsx from "clsx";

export function BoxIndicator({
  currentIndex,
  length,
  className,
}: {
  currentIndex: number;
  length: number;
  className?: string;
}): JSX.Element {
  return (
    <div className={clsx("flex flex-row space-x-3", className)}>
      {new Array(length).fill("").map((number, index) => {
        return (
          <hr
            className={clsx(
              "w-[40px] h-2.5 bg-light-grey border-0",
              index === currentIndex && "bg-gray-900"
            )}
            key={index}
          />
        );
      })}
    </div>
  );
}
