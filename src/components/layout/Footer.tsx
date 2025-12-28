import astraum from "../../assets/Astraum Logo.png";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Design Consultant", id: "design-consultant" },
  { name: "Interior Fitout", id: "interior-fitout" },
  { name: "Commercial Design", id: "commercial-interior-design" },
  { name: "Residential Design", id: "residential-interior-design" },
  { name: "Landscaping", id: "landscaping-horticulture" },
];

export function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* CTA Section */}
      {!isContactPage && (
        <div className="border-b border-accent-foreground/10">
          <div className="container-luxury py-16 md:py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-display text-3xl md:text-4xl font-medium mb-3">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-accent-foreground/70 text-lg">
                  Let's create something extraordinary together.
                </p>
              </div>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/contact" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="flex items-center gap-3 mb-6 justify-center md:justify-start"
            >
              <img
                src={astraum}
                alt="Astraum Infrastructure Logo"
                className="w-10 h-10 object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold tracking-tight text-primary">
                  Astraum
                </span>
                <span className="font-display text-sm tracking-wide text-primary/80">
                  Infrastructure
                </span>
              </div>
            </Link>

            <p className="text-accent-foreground/70 mb-6 leading-relaxed">
              Creating timeless interiors across homes and workspaces through
              thoughtful design and quality craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/Astraum_ai"
                className="w-10 h-10 rounded-full border border-accent-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 rounded-full border border-accent-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-accent-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-medium mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-medium mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    onClick={(e) => {
                      if (location.pathname === "/services") {
                        e.preventDefault();

                        const el = document.getElementById(service.id);
                        if (el) {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }
                    }}
                    className="text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-medium mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li>
                <a
                  href="tel:+91-9808983333"
                  className="flex items-center gap-3 justify-center md:justify-start text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span>+91-9808983333</span>
                </a>

                <a
                  href="tel:+971-524899993"
                  className="flex items-center gap-3 justify-center md:justify-start text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span>+971-524899993</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@astraumai.com"
                  className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span>info@astraumai.com</span>
                </a>
              </li>
              <li>
                <div
                  className="flex gap-3 text-accent-foreground/70
                items-center justify-center
                md:items-start md:justify-start"
                >
                  <MapPin size={18} className="flex-shrink-0" />
                  <span className="text-center md:text-left">
                    Office #410 <br />
                    Naxtra By Kavyaratna Sargasan Croass Road, Below The Fern
                    Residency, Gandhinagar, Gujarat, India.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-accent-foreground/50">
            <p>© 2025 Astraum Infrastructure . All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://www.sosiyo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designed by sosiyo
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
