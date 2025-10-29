import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 w-[90%] md:w-[400px] border border-white/30 text-center shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-yellow-300">Get in Touch</h2>
        <p className="text-white/90 mb-6 text-sm">
          Let’s connect and collaborate!  
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="https://github.com/shubhu1112"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 text-white hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shubhu11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 text-white hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 px-5 py-2 rounded-xl font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
