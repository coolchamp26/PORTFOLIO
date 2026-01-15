import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  learnings: string[];
  demonstrates: string[];
}

const projects: Project[] = [
  {
    title: "Janus AI Fraud Detection",
    description:
      "A sophisticated multi-layered fraud detection engine. Utilizes NLP for entity extraction and Network Analysis to identify collusive vendor rings in public procurement tenders.",
    techStack: ["Python", "NetworkX", "Scikit-learn", "NLP", "Pandas"],
    githubUrl: "https://github.com/coolchamp26/JANUS-AI-FRAUD-DETECTION",
    learnings: ["Graph Collusion Algorithms", "Ensemble Fraud Scoring", "Explainable AI"],
    demonstrates: ["Advanced Algo Solving", "Data Architecture", "Domain ML"]
  },
  {
    title: "Full-Stack Weather App",
    description:
      "A premium weather dashboard featuring a Flask proxy backend and a vanilla JS glassmorphism frontend. Real-time API integration with high-density visual feedback.",
    techStack: ["Flask", "JavaScript", "Python", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/coolchamp26/WEATHER-APP",
    learnings: ["Secure Proxy Architecture", "Static DOM Manipulation", "API Security"],
    demonstrates: ["Full-Stack Reliability", "UX / UI Perception", "System Integration"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-32 px-6 md:px-12 bg-background">
      <div className="container-fluid max-w-screen-2xl mx-auto">
        <div className="mb-16 impact-border">
          <h2 className="text-large">PROJECTS</h2>
        </div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col md:grid md:grid-cols-12 gap-12 impact-border pt-12 animate-impact opacity-0 fill-mode-forwards"
              style={{ animationDelay: `${200 + index * 300}ms` }}
            >
              <div className="md:col-span-1 hidden md:block">
                <p className="text-xl font-bold font-serif italic">0{index + 1}</p>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-large leading-[0.8] mb-12 italic-hover">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 border border-border text-[10px] uppercase font-black tracking-widest">{tech}</span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-2xl font-bold uppercase tracking-tighter hover:italic hover:underline transition-all">
                    Explore Repository <Github className="h-6 w-6" />
                  </a>
                )}
              </div>

              <div className="md:col-span-6 space-y-12">
                <p className="text-2xl md:text-3xl leading-tight font-medium text-muted-foreground uppercase tracking-tight">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-border">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6">Key Discoveries</h4>
                    <ul className="space-y-4 text-lg font-bold">
                      {project.learnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6">Demonstrates</h4>
                    <ul className="space-y-4 text-lg font-bold">
                      {project.demonstrates.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 text-foreground">✓</span>
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
      </div>
    </section>
  );
};

export default Projects;