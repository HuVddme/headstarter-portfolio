import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { socials, profile } from "../data/portfolio.js";
import styles from "./Footer.module.css";

const iconMap = {
  email: FiMail,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.brand}>
          {profile.firstName}
          <span className={styles.dot}>.</span>
        </span>

        <p className={styles.copy}>
          &copy; {year} {profile.name}. Built with React.
        </p>

        <div className={styles.socials}>
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            const external = social.icon !== "email";
            return (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
