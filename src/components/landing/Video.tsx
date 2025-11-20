"use client";
import LandingContent from "../ui/LandingContent";
import LandingItems from "../ui/LandingItems";
import Navbar from "../ui/Navbar";
import SectionWrapper from "../ui/SectionWrapper";

const Video = () => {
  return (
    <SectionWrapper isLanding={false} name="Landing" img="/assets/landing.png">
      <Navbar />

      <div className="flex flex-col items-start justify-center w-full h-full m-auto">
        <LandingContent />
        <LandingItems />
      </div>
    </SectionWrapper>
  );
};

export default Video;
