import { motion } from "framer-motion";

const projects = [
  {
    title: "Sales Data Dashboard",
    desc: "Interactive Power BI dashboard analyzing regional sales trends and forecasting revenue.",
    tech: ["Power BI", "Excel", "SQL"]
  },
  {
    title: "ETL Automation Pipeline",
    desc: "Built a Python-based ETL pipeline with Airflow and Docker to clean and load data into PostgreSQL.",
    tech: ["Python", "Airflow", "Docker", "PostgreSQL"]
  },
  {
    title: "Customer Segmentation",
    desc: "Used clustering algorithms and visualization to identify customer segments from large datasets.",
    tech: ["Python", "Pandas", "Scikit-learn"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white/10 border border-gray-700 p-6 rounded-2xl hover:bg-white/20 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-accent mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-3">{p.desc}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {p.tech.map((t) => (
                <span key={t} className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
