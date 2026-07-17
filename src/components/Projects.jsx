import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaBrain, FaRobot, FaMoneyBillTrendUp } from "react-icons/fa6";
import { projects } from "../data/portfolio.js";
import styles from "./Projects.module.css";

const iconMap = {
  brain: FaBrain,
  finance: FaMoneyBillTrendUp,
  robot: FaRobot,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.span
          className="section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Projects
        </motion.span>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Things I&apos;ve built
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className={styles.cardTop}>
                  <span className={styles.icon}>
                    {Icon && <Icon size={22} />}
                  </span>
                  <FiArrowUpRight className={styles.arrow} />
                </div>

                <h3 className={styles.name}>{project.name}</h3>
                {project.tagline && (
                  <p className={styles.tagline}>{project.tagline}</p>
                )}
                <p className={styles.description}>{project.description}</p>

                <ul className={styles.tech}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
