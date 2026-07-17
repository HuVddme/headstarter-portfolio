import { motion } from "framer-motion";
import { experiences } from "../data/portfolio.js";
import styles from "./Experience.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.span
          className="section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Experience
        </motion.span>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Where I&apos;ve worked
        </motion.h2>

        <ol className={styles.timeline}>
          {experiences.map((item, index) => (
            <motion.li
              key={`${item.company}-${index}`}
              className={styles.item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <span className={styles.dot} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>
                      {item.company}
                      <span className={styles.location}> · {item.location}</span>
                    </p>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <ul className={styles.points}>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
