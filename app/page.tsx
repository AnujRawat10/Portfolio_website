import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Process />
      <Footer />
    </main>
  );
}
