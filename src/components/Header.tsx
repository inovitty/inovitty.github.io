import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Casos de Sucesso", href: "/casos-de-sucesso" },
    { name: "Blog", href: "/blog" },
    { name: "Materiais Gratuitos", href: "/materiais" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "/#contact";
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-background/70 border-b border-border/40 shadow-sm">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl md:text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            Inovitty
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                activeClassName="text-primary font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
            <Button onClick={scrollToContact} size="sm" className="ml-2">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="block py-2 text-foreground/80 hover:text-foreground font-medium transition-colors"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button onClick={scrollToContact} className="w-full mt-2">
              Contato
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
