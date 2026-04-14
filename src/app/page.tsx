import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full flex flex-col space-y-28 pb-16 pt-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </main>
  );
}
