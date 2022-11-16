import About from "../components/about";
import Socials from "./socials";
export default function Hero() {
  return (
    <div>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white  bg-purple-200 bg-opacity-50 rounded-xl mx-6">
          <About />
          <div className="flex justify-center pb-5">
            <Socials />
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={"/video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
}
