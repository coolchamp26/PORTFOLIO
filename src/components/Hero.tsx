import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-8 md:pb-16 relative overflow-hidden px-6 md:px-12">
      <div className="container-fluid relative z-10 w-full max-w-screen-2xl mx-auto">
        {/* Massive Impact Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xl md:text-2xl font-medium mb-8 animate-impact opacity-0 fill-mode-forwards tracking-tight">
            Aspiring Software Engineer
          </p>
          <h1 className="text-huge">
            <span className="block overflow-hidden">
              <span className="block animate-reveal opacity-0 fill-mode-forwards delay-100">ASHAMBAR</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-reveal opacity-0 fill-mode-forwards delay-200">CHATURVEDI.</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;