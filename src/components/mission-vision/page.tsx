import Card from "../ui/Card";
import { Header } from "../ui/Header";
import SectionWrapper from "../ui/SectionWrapper";

const MissionVision = () => {
  return (
    <div>
      <SectionWrapper
        name="Mission & Vision"
        img="https://img.freepik.com/premium-photo/front-view-modern-meeting-room-with-brown-chairs-standing-along-table-white-wall-3d-rendering-mock-up_780608-26353.jpg"
      >
        <Header title="Mission & Vision" />
        <Card />
      </SectionWrapper>
    </div>
  );
};

export default MissionVision;
