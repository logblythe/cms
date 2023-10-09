import clsx from "clsx";

export function SponsorCard({
  children,
  redirectUrl,
  className,
}: {
  redirectUrl?: string;
  children: JSX.Element;
  className?: string;
}): JSX.Element {
  return (
    <a href={redirectUrl}>
      <div className={clsx(className, "border border-light-grey")}>
        {children}
      </div>
    </a>
  );
}
