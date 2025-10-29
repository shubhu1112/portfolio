import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-b from-gray-950 to-black">
      
      {/* Glassmorphic Card */}
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl flex flex-col items-center gap-6 max-w-sm w-full">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Hey! <span className="text-teal-400">Shubham</span> here 👋
        </h1>

        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Shubham Pathak"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-teal-400 shadow-lg object-cover object-center hover:scale-105 transition-transform duration-300"
        />

        {/* Role Animation */}
        <h2 className="text-lg md:text-xl text-gray-300 mt-4">
          <span className="text-white font-semibold">Data Analyst</span> |{" "}
          <TypeAnimation
            sequence={[
              "Data Engineer",
              2000,
              "Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-teal-400 font-semibold"
          />
        </h2>

        {/* Subtext */}
        <p className="text-sm text-gray-400 mt-2 px-4">
          Data. Engineered. Analyzed. Displayed.
        </p>
        <p1 className="text-sm text-gray-400 mt-2 px-4">
          Engineering the data, analyzing the results, and developing the platform to share them.
        </p1>
      </div>
    </section>
  );
}
