import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-700 text-center text-gray-400">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Shubham Pathak | All Rights Reserved
      </motion.p>
      <div className="mt-3 space-x-4">
        <a href="https://linkedin.com/in/" target="_blank" className="hover:text-accent">
          LinkedIn
        </a>
        <a href="https://github.com/" target="_blank" className="hover:text-accent">
          GitHub
        </a>
        <a href="mailto:your.email@gmail.com" className="hover:text-accent">
          Email
        </a>
      </div>
    </footer>
  );
}
