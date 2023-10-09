import { CopyBlock } from "ui";
import { FeaturedCards } from "../components/FeaturedCards";
import { ChannelCards } from "../components/ChannelCards";
import { SponsorCards } from "../components/SponsorCards";
import { FeaturedContentSlider } from "../components/FeaturedContentSlider";

export default function Page(): JSX.Element {
  return (
    <div className="space-y-8 bg-background-color lg:px-12 pt-14 pb-10 max-w-[1720px] mx-auto">
      <div key="0">
        <FeaturedContentSlider />
      </div>
      <div key="1">
        <FeaturedCards />
      </div>
      <div key="2">
        <ChannelCards columnCount={4} />
      </div>
      <div key="3">
        <CopyBlock />
      </div>
      <div key="4">
        <SponsorCards columnCount={4} />
      </div>
    </div>
  );
}
