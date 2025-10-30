import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "/profile.jpg";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import ContactModal from "./components/ContactModal";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`min-h-screen overflow-hidden transition-all duration-700 ${
        darkMode
          ? "bg-black text-[#C0C0C0]"
          : "bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#60a5fa] text-black"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-4/5 ${
          darkMode
            ? "bg-white/5 border border-yellow-400/30 text-yellow-400"
            : "bg-white/20 border border-white/40 text-black"
        } backdrop-blur-md rounded-2xl shadow-lg flex justify-between items-center px-8 py-3 mt-4 z-50 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-yellow-300">
          Shubham{" "}
          <span className="text-indigo-200">// Engineer | Analyst | Builder</span>
        </h1>

        <div className="hidden md:flex space-x-8 font-medium items-center">
          <div className="flex space-x-5 text-xl">
            <a
              href="https://github.com/shubhu1112"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shubhu11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1JNWhUPl3TS6u4luh-_C-F0L7RxHArjBf/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              title="View Resume"
            >
              <FaFileAlt />
            </a>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className={`ml-4 px-4 py-2 rounded-xl font-semibold transition-all ${
              darkMode
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-black/70 text-white hover:bg-black"
            }`}
          >
            Get in Touch
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded-xl font-semibold transition-all ${
            darkMode
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-black/60 text-white hover:bg-black"
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-36 flex flex-col items-center text-center px-6">
        <motion.img
          src={profilePic}
          alt="Profile"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg mb-6 hover:shadow-yellow-400/50 hover:border-yellow-300 transition-all duration-300"
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl md:text-5xl font-extrabold ${
            darkMode ? "text-yellow-400" : "text-white drop-shadow-md"
          }`}
        >
          Hey! I'm Shubham👋
        </motion.h1>

        <p className="text-lg md:text-xl mt-4 font-semibold">
          <span className="text-yellow-400 font-bold">Data Analyst</span> |{" "}
          <span className={`font-bold ${darkMode ? "text-white" : "text-black"}`}>
            <Typewriter
              words={["Data Engineer", "Web Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </p>

        <p
          className={`mt-4 text-base md:text-lg opacity-90 ${
            darkMode ? "text-gray-300" : "text-white"
          }`}
        >
          <strong>Data. Engineered. Analyzed. Displayed.</strong>
          <br />
          Engineering the data, analyzing the story, building the experience.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-24 max-w-5xl mx-auto text-center px-6">
        <h3
          className={`text-3xl font-semibold mb-6 ${
            darkMode ? "text-yellow-400" : "text-white"
          }`}
        >
          Skills & Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Python",
            "Object Oriented Programming",
            "FastAPI",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Pandas",
            "NumPy",
            "Airflow",
            "Spark",
            "Docker",
            "AWS",
            "EC2",
            "S3",
            "RDS",
            "Microsoft Excel",
            "Google Sheets",
            "Power BI",
            "Tableau",
            "HTML5",
            "CSS",
            "JavaScript",
            "React",
            "TailwindCSS",
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                darkMode
                  ? "bg-white/5 border border-yellow-400/40 text-white-300"
                  : "bg-white/20 border border-white/40 text-white backdrop-blur-lg"
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-24 max-w-6xl mx-auto px-6">
        <h3
          className={`text-3xl font-semibold text-center mb-10 ${
            darkMode ? "text-yellow-400" : "text-white"
          }`}
        >
          Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Virtual Desktop Voice Assistant",
              desc: "A smart desktop assistant built using Python that understands natural language through voice commands and performs various automated tasks for the user.",
              tools:
                "Python pyttsx3, SpeechRecognition, Wikipedia, Webbrowser, pyautogui, smtplib, datetime, speedtest",
            },
            {
              title: "Color Identification in Images",
              desc: "A computer vision project to detect and identify dominant colors in images along with their RGB values for analytical and design purposes",
              tools: "Python (OpenCV, Pandas)",
            },
            {
              title: "Automated File Analyzer",
              desc: "A Python automation tool that counts lines in text files and automatically sends the results via email with an output attachment.",
              tools: "Python (smtplib, datetime, glob, os)",
            },
            {
              title: "Full Stack Job Portal",
              desc: "A web app where users can register, log in, explore jobs, edit profiles, and verify emails.",
              tools:
                "HTML, CSS, JavaScript, React, Tailwind CSS, FastAPI, PostgreSQL",
            },
            {
              title: "Full Stack Portfolio Website",
              desc: "This portfolio website built using React + Tailwind with glassmorphism and animations.",
              tools:
                "React(Vite), TailwindCSS, Framer Motion, FastAPI, PostgreSQL",
            },
          ].map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-3xl shadow-lg backdrop-blur-xl transition ${
                darkMode
                  ? "bg-white/5 border border-yellow-400/30 hover:shadow-yellow-400/40"
                  : "bg-white/20 border border-white/40 hover:shadow-purple-500/50"
              }`}
            >
              <h4
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-yellow-400" : "text-white"
                }`}
              >
                {p.title}
              </h4>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-200" : "text-white/90"
                }`}
              >
                {p.desc}
              </p>
              <p className="text-xs italic mt-3 opacity-70">{p.tools}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌐 Mobile Bottom Bar (Glassmorphic) */}
      <div
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:hidden 
        ${darkMode ? "bg-white/10 border border-yellow-400/30" : "bg-white/20 border border-white/30"} 
        backdrop-blur-lg rounded-2xl shadow-lg flex justify-around items-center py-3 text-xl z-50`}
      >
        <a
          href="https://github.com/shubhu1112"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-white"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/shubhu11"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-white"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
          <a
    href="https://drive.google.com/file/d/1JNWhUPl3TS6u4luh-_C-F0L7RxHArjBf/preview"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition text-white"
    title="View Resume"
  >
    <FaFileAlt />
  </a>

        <button
          onClick={() => setShowModal(true)}
          className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
            darkMode
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-black/70 text-white hover:bg-black"
          }`}
        >
          Get in Touch
        </button>
      </div>

      {/* Footer */}
      <footer
        className={`mt-28 text-center text-sm pb-6 opacity-80 ${
          darkMode ? "text-gray-400" : "text-white"
        }`}
      >
        © 2025 Shubham Pathak | Built by Shubham with 💛
      </footer>

      {/* Contact Modal */}
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
