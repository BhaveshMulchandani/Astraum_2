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

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Design Consultant",
  "Interior Fitout",
  "Commercial Design",
  "Residential Design",
  "Landscaping",
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* CTA Section */}
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

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-semibold tracking-tight">
                Élégance
              </span>
              <span className="text-primary font-display text-2xl ml-1">
                Interiors
              </span>
            </Link>
            <p className="text-accent-foreground/70 mb-6 leading-relaxed">
              Creating timeless interiors across homes and workspaces through
              thoughtful design and quality craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-accent-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
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
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
          <div>
            <h4 className="font-display text-lg font-medium mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+91-9808983333"
                  className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span>+91-9808983333</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@eleganceinteriors.com"
                  className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span>info@astraumai.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-accent-foreground/70">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>
                    Office #410 <br />
                    Naxtra By Kavyaratna <br />
                    Sargasan Croass Road, Below The Fern Residency . <br />
                    Gandhinagar, Gujarat{" "}
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
            <p>© 2024 Élégance Interiors. All rights reserved.</p>
            <div className="flex gap-6">
              <p>Designed by Sosiyo</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
