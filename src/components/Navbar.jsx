import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "/profile.jpg";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-black text-gold" : "bg-silver text-black"
      }`}
      style={{
        backgroundColor: darkMode ? "#000000" : "#C0C0C0",
        color: darkMode ? "#FFD700" : "#000000",
      }}
    >
      {/* Glass Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-white/5 backdrop-blur-2xl"
            : "bg-black/10 backdrop-blur-2xl"
        }`}
      ></div>

      {/* Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-4/5 px-6 py-3 rounded-2xl border shadow-lg flex justify-between items-center z-50 transition-all duration-700 ${
          darkMode
            ? "bg-white/10 border-gold text-gold"
            : "bg-black/10 border-black text-black"
        }`}
      >
        <h1
          className={`font-bold text-2xl tracking-wide ${
            darkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
              : "text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700"
          }`}
        >
          Shubham<span className="opacity-80">Pathak</span>
        </h1>

        <div className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-all duration-300 hover:scale-105 ${
                darkMode ? "hover:text-white" : "hover:text-gray-700"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-500 ${
            darkMode
              ? "bg-gold text-black hover:bg-yellow-400"
              : "bg-black text-silver hover:bg-gray-800"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center text-center pt-40 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Hey! <span className="text-yellow-400">Shubham</span> here
        </motion.h2>

        {/* Circular Image */}
        <motion.img
          src={profile}
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-6 w-40 h-40 rounded-full object-cover shadow-lg border-4 border-yellow-400"
        />

        {/* Typewriter Text */}
        <motion.p
          className="mt-6 text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span
            className={`font-extrabold ${
              darkMode ? "text-yellow-400" : "text-black"
            }`}
          >
            Data Analyst
          </span>{" "}
          |{" "}
          <span className="font-bold">
            <Typewriter
              words={["Data Engineer", "Web Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.p>

        {/* Taglines */}
        <p className="mt-6 font-semibold text-lg opacity-90">
          Data. Engineered. Analyzed. Displayed.
        </p>
        <p className="mt-2 text-sm opacity-75">
          Engineering the data, analyzing the story, building the experience.
        </p>

        {/* Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className={`mt-8 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
            darkMode
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-black text-white hover:bg-gray-900"
          }`}
        >
          View My Work
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="mt-28 text-center pb-6 text-sm opacity-70">
        © 2025 Shubham Pathak | Built with 💛 using React & TailwindCSS
      </footer>
    </div>
  );
};

export default App;
