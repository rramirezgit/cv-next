import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { EducationSection } from "@/components/Education";
import { LanguagesSection } from "@/components/Languages";
import { Footer } from "@/components/Footer";
import { PrintCV } from "@/components/PrintCV";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <EducationSection />
        <LanguagesSection />
      </main>
      <Footer />
      <PrintCV />
    </>
  );
}
