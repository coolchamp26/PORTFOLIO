import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-8 ${scrolled ? "bg-background/95 backdrop-blur-md py-4 border-b border-border shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="container-fluid flex items-center justify-between mx-auto max-w-screen-2xl">
          <a href="#" className="text-xl font-black tracking-tighter hover:italic transition-all overflow-hidden block">
            <span className="block animate-reveal opacity-0 fill-mode-forwards">ASHAMBAR</span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            <NavLink href="#about" onClick={(e) => handleLinkClick(e, "#about")}>About</NavLink>
            <NavLink href="#education" onClick={(e) => handleLinkClick(e, "#education")}>Education</NavLink>
            <NavLink href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>Skills</NavLink>
            <NavLink href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>Works</NavLink>
            <NavLink href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>Contact</NavLink>
          </div>

          <div className="flex items-center gap-6">
            <ThemeToggle />
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 group z-[60]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`w-6 h-px bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : "group-hover:w-4"}`} />
              <div className={`w-6 h-px bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-px bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : "group-hover:w-4 self-end"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background z-[55] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col justify-center px-12 md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="space-y-8">
          <MobileNavLink href="#about" onClick={(e) => handleLinkClick(e, "#about")} num="01">About</MobileNavLink>
          <MobileNavLink href="#education" onClick={(e) => handleLinkClick(e, "#education")} num="02">Education</MobileNavLink>
          <MobileNavLink href="#skills" onClick={(e) => handleLinkClick(e, "#skills")} num="03">Skills</MobileNavLink>
          <MobileNavLink href="#projects" onClick={(e) => handleLinkClick(e, "#projects")} num="04">Works</MobileNavLink>
          <MobileNavLink href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} num="05">Contact</MobileNavLink>
        </div>
      </div>
    </>
  );
};

const MobileNavLink = ({ href, children, num, onClick }: { href: string; children: React.ReactNode; num: string; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="block group overflow-hidden"
  >
    <div className="flex items-baseline gap-4">
      <span className="text-xs font-bold text-muted-foreground font-serif italic">{num}</span>
      <span className="text-5xl font-black uppercase tracking-tighter transition-transform duration-500 group-hover:italic group-hover:translate-x-4 block">
        {children}
      </span>
    </div>
  </a>
);

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-[10px] font-bold uppercase tracking-[0.3em] hover:italic transition-all relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-500 group-hover:w-full" />
  </a>
);

export default Navbar;
