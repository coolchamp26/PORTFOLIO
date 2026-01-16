const skillCategories = [
  {
    title: "Core Languages",
    skills: ["Python", "C++", "C", "JavaScript", "HTML5 / CSS3"]
  },
  {
    title: "Intelligence / AI",
    skills: ["Neural Networks", "Machine Learning", "NLP (Spacy/NLTK)", "Network Graphs", "Statistical Analysis"]
  },
  {
    title: "Engineering",
    skills: ["Data Structures", "Algorithms", "OOP", "Shell Scripting", "REST APIs"]
  },
  {
    title: "Tools & Forge",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Flask", "React"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-20 px-6 md:px-12 bg-secondary/20">
      <div className="container-fluid max-w-screen-2xl mx-auto">
        <div className="mb-16 impact-border">
          <h2 className="text-large">SKILLS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="space-y-8 animate-impact opacity-0 fill-mode-forwards"
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground border-b border-border pb-4 w-fit">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="text-2xl md:text-3xl font-bold tracking-tight transition-all">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;