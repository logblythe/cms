import Image from "next/image";
import { images } from "../../consts";

export function Card({ currentIndex }: { currentIndex: number }): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 space-x-5 min-h-[550px]">
      <div className="space-y-16 py-12">
        <div className="text-black space-y-4">
          <p className="text-5xl font-bold">
            {currentIndex} San Diego release - 48px; GIlroy Bold
          </p>
          <p className="text-2xl font-semibold">
            Subtitle - 22px Gilroy Regular Subtitle
          </p>
          <p className="text-xl font-light">{images[currentIndex]}</p>
        </div>
        <div>
          <button
            className="text-secondary bg-[#032D42] px-8 py-3 rounded-md font-semibold"
            type="button"
          >
            Click Me
          </button>
        </div>
      </div>
      <div className="flex-1 relative min-h-[320px] max-h-[600px] max-w-[904px] bg-yellow-200 rounded-2xl overflow-hidden hidden lg:block">
        <Image
          alt="some text"
          fill
          src={images[currentIndex]}
          title="some title"
        />
      </div>
    </div>
  );
}
