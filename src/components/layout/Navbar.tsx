import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import astraum from "../../assets/Astraum Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Vendor Registration", path: "/vendorregistration" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isMobileMenuOpen
            ? "bg-background/90 backdrop-blur-md shadow-soft py-4"
            : isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-soft py-4"
            : "bg-transparent py-6"
        )}
      >
        <nav className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={astraum} alt="logo" className="w-14 h-14" />
            <span className="font-display text-2xl font-semibold text-primary">
              Astraum
            </span>
            <span className="font-display text-2xl text-primary">
              Infrastructure
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="gold" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* BACKDROP OVERLAY (FULL PAGE BLUR + DIM) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-background/90 backdrop-blur-lg transition-all duration-500 z-40",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="container-luxury py-10">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.path}
                className={cn(
                  "animate-fade-up opacity-0",
                  isMobileMenuOpen && "opacity-100"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "text-2xl font-display font-medium transition-colors hover:text-primary",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button variant="gold" size="lg" className="w-full" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
