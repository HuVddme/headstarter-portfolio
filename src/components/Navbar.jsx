import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio.js";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .filter((link) => !link.external)
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNav = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`}>
        <a
          href="#home"
          className={styles.brand}
          onClick={(e) => handleNav(e, "home")}
        >
          {profile.firstName}
          <span className={styles.brandDot}>.</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.link} ${styles.linkExternal}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.link} ${
                    active === link.id ? styles.active : ""
                  }`}
                  onClick={(e) => handleNav(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
    </header>
  );
}
