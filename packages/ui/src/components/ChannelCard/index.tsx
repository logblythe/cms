import clsx from "clsx";

export function ChannelCard({
  title = "Channel Title here",
  description = "Channel description here attis gravida aliquam augueChannel description here attis gravida aliquam augue",
  className = "",
}: {
  title?: string;
  description?: string;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-secondary pt-7 pb-9 pl-8 py-9 text-primary-gable-green h-[200px]",
        className
      )}
    >
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
}
