import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 animate-fade-up">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up-delay-1">
            Ashambar Chaturvedi<span className="text-primary">.</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6 animate-fade-up-delay-2">
            Aspiring Software Engineer
          </h2>

          {/* Introduction */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-up-delay-3">
            I'm a student developer focused on building strong fundamentals in programming, 
            data structures, and real-world problem solving. Currently exploring web development 
            and machine learning while creating projects that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12 animate-fade-up-delay-3">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="group"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start animate-fade-up-delay-3">
            <a
              href="https://github.com/coolchamp26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashambar-chaturvedi26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ashambar.chaturvedi@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;