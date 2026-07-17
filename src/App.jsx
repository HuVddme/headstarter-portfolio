import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
