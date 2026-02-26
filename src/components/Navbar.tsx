import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/content/siteConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#333333]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={site.images.logo} alt={`${site.businessName} logo`} className="w-10 h-10 object-contain" />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-white">{site.businessName}</span>
              <span className="block text-xs text-white/60 -mt-1">
                {site.category}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#2ECC71] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {site.phoneDisplay}
              </a>
            </Button>
            <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold" asChild>
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-[#2ECC71] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10" asChild>
                  <a href={`tel:${site.phoneTel}`} className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {site.phoneDisplay}
                  </a>
                </Button>
                <Button className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white" asChild>
                  <a href="#contact">Get a Free Quote</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
