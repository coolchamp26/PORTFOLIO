import { ExternalLink, Github, Home, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  learnings: string[];
  demonstrates: string[];
  icon: "home" | "mic";
}

const projects: Project[] = [
  {
    title: "Housing Price Prediction Model",
    description:
      "A machine learning project focused on predicting house prices using real-world housing data. The model analyzes factors such as location, income levels, and housing characteristics to estimate property values. The project emphasizes understanding the end-to-end ML workflow, from data preprocessing to model evaluation.",
    techStack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/coolchamp26",
    icon: "home",
    learnings: [
      "Learned how to clean and preprocess real-world datasets",
      "Understood feature selection and its impact on model performance",
      "Implemented regression models and evaluated them using appropriate metrics",
      "Gained hands-on experience with train-test split and model validation",
      "Developed intuition around how data quality affects predictions",
    ],
    demonstrates: [
      "Strong fundamentals in machine learning",
      "Ability to work with real datasets",
      "Practical understanding of regression problems",
      "Structured problem-solving approach",
    ],
  },
  {
    title: "AI Pitch Enabling System",
    description:
      "An AI-powered web application designed to help users practice and improve their startup or product pitches. The system allows users to deliver a pitch, analyzes the input using AI, and provides structured feedback on clarity, confidence, persuasion, and storytelling. The project focuses on user experience, real-time interaction, and AI-driven evaluation.",
    techStack: ["React", "Vite", "Tailwind CSS", "Web Speech API", "AI/ML APIs"],
    githubUrl: "https://github.com/coolchamp26",
    icon: "mic",
    learnings: [
      "Built a complete frontend application using modern React practices",
      "Integrated browser APIs for speech-to-text functionality",
      "Designed user flows focused on feedback and iteration",
      "Learned how to structure AI prompts and interpret AI-generated evaluations",
      "Improved understanding of frontend architecture and state management",
    ],
    demonstrates: [
      "Ability to build interactive, real-world web applications",
      "Experience integrating AI into user-facing products",
      "Strong focus on UX and practical problem-solving",
      "Understanding of modern frontend tools and workflows",
    ],
  },
];

const ProjectIcon = ({ type }: { type: "home" | "mic" }) => {
  const Icon = type === "home" ? Home : Mic;
  return <Icon className="h-6 w-6" />;
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Projects
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group bg-card border border-border rounded-xl p-6 md:p-8 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <ProjectIcon type={project.icon} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 shrink-0">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors p-1"
                              aria-label="View on GitHub"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors p-1"
                              aria-label="View live demo"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary/5 text-primary rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learnings & Demonstrates Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Key Learnings */}
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-3 text-sm">
                        Key Learnings
                      </h4>
                      <ul className="space-y-2">
                        {project.learnings.map((learning, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 shrink-0">•</span>
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What It Demonstrates */}
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-3 text-sm">
                        What This Demonstrates
                      </h4>
                      <ul className="space-y-2">
                        {project.demonstrates.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/coolchamp26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                See More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;