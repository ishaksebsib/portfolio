import Footer from "@/components/base/Footer";
import NavBar from "@/components/base/NavBar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
