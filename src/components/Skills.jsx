import { motion } from "framer-motion";

const skills = [
  "Python", "SQL", "Power BI", "Tableau",
  "Pandas", "NumPy", "Airflow", "Spark",
  "Docker", "AWS (EC2, S3, RDS)", "FastAPI", "React", "Tailwind"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills & Tools
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="bg-white/10 border border-gray-700 px-4 py-2 rounded-xl text-gray-200 hover:bg-accent hover:text-white transition"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
