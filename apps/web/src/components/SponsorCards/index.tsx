"use client";

import { SponsorCard } from "ui";
import Image from "next/image";
import { HorizontalSlider } from "../../hoc/with-horizontal-slide";
import { URLs } from "../../consts";

export function SponsorCards({
  columnCount = 4,
}: {
  columnCount: number;
}): JSX.Element {
  return (
    <HorizontalSlider
      columnCount={columnCount}
      data={URLs}
      renderHeader={() => <p className="text-[42px] font-bold">Sponsorship</p>}
      renderProp={(data) => (
        <SponsorCard key={data}>
          <div className="relative h-[162px]">
            <Image
              alt="alt-image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={data}
              title="Photo from Unsplash"
            />
          </div>
        </SponsorCard>
      )}
    />
  );
}
