"use client";

import { ChannelCard } from "ui";
import { HorizontalSlider } from "../../hoc/with-horizontal-slide";
import { names } from "../../consts";

export function ChannelCards({
  columnCount = 4,
}: {
  columnCount: number;
}): JSX.Element {
  return (
    <HorizontalSlider
      columnCount={columnCount}
      data={names}
      renderHeader={() => (
        <p className="text-[42px] font-bold">Channel Cards</p>
      )}
      renderProp={(data) => (
        <a href={data} key={data}>
          <ChannelCard
            className="overflow-hidden"
            description={data}
            title={data}
          />
        </a>
      )}
    />
  );
}
