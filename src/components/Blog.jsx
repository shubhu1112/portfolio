import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_BASE_URL = "http://127.0.0.1:8000";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/api/blogs") // replace with live API later
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch(() => setBlogs([]));
  }, []);

  return (
    <section id="blog" className="py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Blogs & Insights
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.length > 0 ? (
          blogs.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white/10 border border-gray-700 p-6 rounded-2xl hover:bg-white/20 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-accent mb-2">{b.title}</h3>
              <p className="text-gray-300 mb-3">{b.summary}</p>
              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400">No blogs found. Backend might be offline.</p>
        )}
      </div>
    </section>
  );
}
