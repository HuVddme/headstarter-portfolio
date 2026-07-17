import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import { profile } from "../data/portfolio.js";
import styles from "./Resume.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Resume() {
  return (
    <section id="resume" className={`section ${styles.resume}`}>
      <div className="container">
        <motion.span
          className="section__eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Resume
        </motion.span>

        <motion.div
          className={styles.head}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="section__title" style={{ marginBottom: 0 }}>
            Experience &amp; education
          </h2>
          <div className={styles.actions}>
            <a
              className="btn btn--primary"
              href={profile.resume}
              download={profile.resumeFileName}
            >
              <FiDownload /> Download PDF
            </a>
            <a
              className="btn btn--ghost"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink /> Open in new tab
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.viewer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <object
            data={`${profile.resume}#view=FitH`}
            type="application/pdf"
            className={styles.frame}
            aria-label="Resume preview"
          >
            <div className={styles.fallback}>
              <FiFileText size={40} />
              <p>Your browser can&apos;t display the PDF inline.</p>
              <a
                className="btn btn--primary"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink /> Open the resume
              </a>
            </div>
          </object>
        </motion.div>
      </div>
    </section>
  );
}
