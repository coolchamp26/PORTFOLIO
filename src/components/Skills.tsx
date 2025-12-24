import { Code, Globe, Brain, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["Python", "C++", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    skills: ["React", "Tailwind CSS", "Responsive Design", "Git & GitHub"],
  },
  {
    title: "CS Fundamentals",
    icon: <Brain className="h-5 w-5" />,
    skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Problem Solving"],
  },
  {
    title: "Tools & Learning",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["VS Code", "Linux Basics", "Machine Learning Basics", "Debugging"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Skills
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-background border border-border rounded-xl p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-8">
            Continuously learning and expanding my skill set through projects and practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;