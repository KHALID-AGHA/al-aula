import { ISectionProps } from "@/src/types/sections";
import Image from "next/image";

const SectionWrapper = ({ name, img, children }: ISectionProps) => {
  return (
    <div className="relative w-full px-16 pt-10 lg:h-screen h-fit pb-5">
      <Image
        src={img}
        alt={name}
        fill
        loading="lazy"
        className="object-cover -z-10"
      />

      <div className="relative z-10 h-full my-4 lg:w-9/12 m-auto">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
