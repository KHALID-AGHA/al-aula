import { ISectionProps } from "@/src/types/sections";
import Image from "next/image";

const SectionWrapper = ({ name, img, children, isLanding }: ISectionProps) => {
  return (
    <div
      className={`relative w-full lg:h-screen h-fit ${
        isLanding ? "p-0" : "px-16 pt-10 pb-5"
      }`}
    >
      {isLanding ? (
        <video
          className="object-cover -z-10 absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          style={{
            padding: 0,
            margin: 0,
          }}
          preload="none"
          autoPlay
          muted
          loop
        >
          <source src="/assets/landingVedio.mp4" type="video/mp4" />
          <track
            src="/assets/landingVedio.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={img as string}
          alt={name}
          fill
          loading="lazy"
          className="object-cover -z-10"
        />
      )}

      <div className="relative z-10 h-full my-4 lg:w-9/12 m-auto">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
