import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/portfolio.js";
import styles from "./Hero.module.css";

function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={`container ${styles.inner}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className={styles.greeting} variants={item}>
          Hello, I&apos;m
        </motion.p>

        <motion.h1 className={styles.name} variants={item}>
          {profile.name}
        </motion.h1>

        <motion.div className={styles.typewriter} variants={item}>
          <span>{typed}</span>
          <span className={styles.cursor} aria-hidden="true" />
        </motion.div>

        <motion.p className={styles.tagline} variants={item}>
          Software engineer passionate about AI/ML and full-stack development —
          building technology that solves real problems and drives meaningful
          change.
        </motion.p>

        <motion.div className={styles.actions} variants={item}>
          <button
            className="btn btn--primary"
            onClick={() => scrollTo("contact")}
          >
            Get in touch <FiArrowUpRight />
          </button>
          <a
            className="btn btn--ghost"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
        </motion.div>
      </motion.div>

      <button
        className={styles.scrollHint}
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
      >
        <FiArrowDown />
      </button>
    </section>
  );
}
