import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import { I18nProvider, useI18n } from "@/contexts/I18nContext";

const IndexContent = () => {
  const { translations, isRTL } = useI18n();

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-background overflow-x-hidden ${isRTL ? "font-arabic" : ""}`}
    >
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

const Index = () => {
  return (
    <I18nProvider>
      <IndexContent />
    </I18nProvider>
  );
};

export default Index;
