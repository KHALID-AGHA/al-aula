import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { Titles } from "../ui/Titles";

const About = () => {
  return (
    <div className="-z-[999]">
      <SectionWrapper
        isLanding={false}
        name="Mission & Vision"
        img="/assets/about-bg.jpg"
      >
        <Titles
          title="About The Conference"
          subTitle={`The AlUla Emerging Market Economies Conference brings together global leaders, policymakers, economists, and innovators to discuss the challenges and opportunities facing emerging markets in an interconnected world.`}
        />
        <Card />
      </SectionWrapper>
    </div>
  );
};

export default About;
