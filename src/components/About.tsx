const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-12 bg-background">
      <div className="container-fluid max-w-screen-2xl mx-auto">
        <div className="mb-16 impact-border">
          <h2 className="text-large">ABOUT ME</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5">
            <h3 className="text-4xl md:text-5xl leading-[0.9] italic font-serif tracking-tight">
              "Jack of all trades, <br />
              master of none. <br />
              But sometimes better <br />
              than master of one."
            </h3>
          </div>

          <div className="md:col-span-1 hidden md:block" />

          <div className="md:col-span-6 space-y-12">
            <p className="text-2xl md:text-4xl font-medium leading-[1.1] tracking-tight">
              I believe in building software that doesn't just work, but feels purposeful.
              My focus is on C++, Python, and Machine Learning—where massive data meets meaningful action.
            </p>
            <div className="space-y-6 text-xl text-muted-foreground leading-snug">
              <p>
                Currently a student at NSUT, New Delhi. I spend my hours digging into algorithmic efficiencies,
                designing robust backends, and bridging the gap between raw data and intelligent insights.
              </p>
              <p>
                My approach is straightforward: Strip away the noise, focus on the core logic, and over-engineer
                for reliability.
              </p>
            </div>

            <div className="pt-12 border-t border-border flex flex-wrap gap-x-12 gap-y-6">
              {[
                { label: "Based", value: "Delhi, IN" },
                { label: "Status", value: "Learning Neural Networks" },
                { label: "Focus", value: "Machine Learning / Full-Stack" }
              ].map(spec => (
                <div key={spec.label}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</p>
                  <p className="text-lg font-bold uppercase">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

