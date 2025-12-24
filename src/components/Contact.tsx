import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    value: "ashambar.chaturvedi@gmail.com",
    href: "mailto:ashambar.chaturvedi@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: "+91-88008 69979",
    href: "tel:+918800869979",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    value: "coolchamp26",
    href: "https://github.com/coolchamp26",
    icon: <Github className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: "ashambar-chaturvedi26",
    href: "https://www.linkedin.com/in/ashambar-chaturvedi26",
    icon: <Linkedin className="h-5 w-5" />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            I'm currently looking for opportunities to learn and grow as a developer. 
            Whether you have a question, want to collaborate, or just want to say hi — 
            feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-background border border-border rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {contact.icon}
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium text-foreground truncate">
                    {contact.value}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <Button size="lg" asChild>
            <a href="mailto:ashambar.chaturvedi@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;