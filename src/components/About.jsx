import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";
import styles from "./About.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.span
          className="section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          About
        </motion.span>

        <div className={styles.grid}>
          <motion.div
            className={styles.imageWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <img src={profile.headshot} alt={profile.name} loading="lazy" />
            <div className={styles.imageBorder} aria-hidden="true" />
          </motion.div>

          <motion.div
            className={styles.content}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className={styles.title}>
              Learning, growing, and contributing at scale.
            </h2>
            {profile.about.map((paragraph, index) => (
              <p key={index} className={styles.text}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
