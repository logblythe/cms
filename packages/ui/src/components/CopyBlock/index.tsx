import clsx from "clsx";

export function CopyBlock({
  title = "Winners dream. Of Winners Club.",
  description = "Our celebration together in Maui will be one that you and your family will cherish for a lifetime – we guarantee it. We are so proud of all your individual achievements and can’t wait to welcome you to the ultimate experience at the Greatest Show on Earth. Let’s Go!",
}: {
  title?: string;
  description?: string;
}): JSX.Element {
  return (
    <div className="bg-white text-primary-gable-green text-center py-20 px-10 space-y-2">
      <p className={clsx("text-5xl font-bold")}>{title}</p>
      <p className={clsx("text-3xl font-light")}>{description}</p>
    </div>
  );
}
