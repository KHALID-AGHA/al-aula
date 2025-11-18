import { EventCountdown } from "../components/event-countdown/page";
import MissionVision from "../components/mission-vision/page";
import { futureDate } from "../lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <MissionVision />
      <EventCountdown targetDate={futureDate} />
      <div>asdasd</div>
    </div>
  );
}
