const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              About Me
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Content */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a student developer who genuinely enjoys understanding how things work under the hood. 
              I started programming out of curiosity and built my first complete project in Class 12 — 
              an experience that taught me more about problem-solving than any tutorial ever could.
            </p>

            <p>
              Right now, I'm focused on strengthening my fundamentals: data structures, algorithms, 
              and writing clean, readable code. I believe a strong foundation makes everything else 
              easier to learn. I'm not chasing every new framework; I prefer understanding <em>why</em>{" "}
              something works before using it.
            </p>

            <p>
              I primarily work with <span className="text-foreground font-medium">Python</span> and{" "}
              <span className="text-foreground font-medium">C++</span> for algorithmic problem-solving, 
              and I'm developing my web skills using HTML, CSS, and JavaScript. I've also started 
              exploring the basics of machine learning to understand how intelligent systems are built.
            </p>

            <p>
              What drives me is the satisfaction of solving a problem after hours of thinking and 
              the excitement of building something that actually works. I don't claim to be an 
              expert — just someone consistently putting in the work to get better every day.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Focus", value: "Fundamentals" },
              { label: "Stage", value: "Student" },
              { label: "Approach", value: "Learn by Building" },
              { label: "Goal", value: "Software Engineer" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
