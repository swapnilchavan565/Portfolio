import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Skills } from "@/components/Skills";
import { AILab } from "@/components/AILab";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Skills />
      <AILab />
      <Contact />
      <Footer />
    </main>
  );
}
