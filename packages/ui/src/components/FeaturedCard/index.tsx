import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";

export function FeaturedCard({
  title = "TRAINING",
  description = " Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  date = "March 30-April 23, 2",
  time = "9:00 am • 90mins",
  children,
}: {
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className="min-w-[514px]">
      {children}
      <div className="p-6 bg-white text-accessible-grey">
        <p className="text-sm font-bold mb-3">{title}</p>
        <p className="font-bold text-2xl text-primary-gable-green mb-6">
          {/**TODO: CHECK IF WE NEED TO CONSTRAIN THE HEIGHT */}
          {description}
        </p>
        <div className="flex flex-row items-center space-x-2 text-accessible-grey mb-2">
          <CalendarIcon />
          <p className="text-xs font-normal">{date}</p>
        </div>
        <div className="flex flex-row items-center space-x-2 text-accessible-grey">
          <ClockIcon />
          <p className="text-xs font-normal">{time}</p>
        </div>
      </div>
    </div>
  );
}
