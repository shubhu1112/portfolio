import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-center max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I’m a <b>Data Analyst</b> with over 2 years of experience in analyzing,
        visualizing, and automating data workflows using Python, SQL, and BI tools.
        Currently exploring <b>Data Engineering</b> — building efficient ETL pipelines
        and deploying data-driven solutions. I love transforming data into insights
        that help businesses make smarter decisions.
      </motion.p>
    </section>
  );
}
