import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "ashambar.chaturvedi@gmail.com",
    href: "mailto:ashambar.chaturvedi@gmail.com",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    label: "LinkedIn",
    value: "ashambar-chaturvedi26",
    href: "https://www.linkedin.com/in/ashambar-chaturvedi26",
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    label: "GitHub",
    value: "coolchamp26",
    href: "https://github.com/coolchamp26",
    icon: <Github className="h-6 w-6" />,
  },
  {
    label: "Phone",
    value: "+91-88008 69979",
    href: "tel:+918800869979",
    icon: <Phone className="h-6 w-6" />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-6 md:px-12 bg-foreground text-background">
      <div className="container-fluid max-w-screen-2xl mx-auto">
        <div className="mb-16 border-t-8 border-background pt-8">
          <h2 className="text-large text-background">Get In <br /> Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-7">

            <p className="text-xl md:text-2xl font-medium max-w-xl opacity-60">
              I'm currently looking for opportunities to learn and grow as a developer. Whether you have a question, want to collaborate, or just want to say hi — feel free to reach out!
            </p>
          </div>

          <div className="md:col-span-5 space-y-12">
            {contactLinks.map((link) => (
              <div key={link.label} className="border-t border-background/20 pt-8 group">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40">{link.label}</p>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-2xl md:text-3xl font-bold flex items-center justify-between transition-all overflow-hidden"
                >
                  <span className="flex items-center gap-4 min-w-0">
                    <span className="opacity-30 group-hover:opacity-100 transition-opacity shrink-0">
                      {link.icon}
                    </span>
                    <span className="truncate">{link.value}</span>
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;