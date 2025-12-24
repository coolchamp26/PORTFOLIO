import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ashambar Chaturvedi | Aspiring Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Ashambar Chaturvedi - Student developer focused on Python, C++, web development, and building strong programming fundamentals."
        />
        <meta
          name="keywords"
          content="Ashambar Chaturvedi, software engineer, developer, Python, C++, web development, portfolio"
        />
        <link rel="canonical" href="https://coolchamp26.github.io/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
