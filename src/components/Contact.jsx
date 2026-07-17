import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { socials } from "../data/portfolio.js";
import styles from "./Contact.module.css";

const iconMap = {
  email: FiMail,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div
          className={styles.intro}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="section__eyebrow">Contact</span>
          <h2 className={styles.title}>Let&apos;s build something together.</h2>
          <p className={styles.subtitle}>
            I&apos;m always open to new opportunities, collaborations, and a good
            conversation about technology.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            const external = social.icon !== "email";
            return (
              <a
                key={social.id}
                href={social.href}
                className={styles.card}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <span className={styles.cardIcon}>
                  {Icon && <Icon size={20} />}
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.cardLabel}>{social.label}</span>
                  <span className={styles.cardValue}>{social.value}</span>
                </span>
                <FiArrowUpRight className={styles.cardArrow} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
