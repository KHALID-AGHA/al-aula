import About from "../components/about/page";
import Landing from "../components/landing/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Landing />
      <About />
    </div>
  );
}
