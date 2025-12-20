import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Building2,
  Home,
  TreePine,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const services = [
  {
    icon: TreePine,
    title: "Landscaping",
    description:
      "We design calm, well-planned outdoor spaces that align with your home’s interior style. Through thoughtful planting and spatial planning, our landscape design solutions make outdoor living areas inviting, balanced, and easy to enjoy.",
  },
  {
    icon: Building2,
    title: "Commercial Interior",
    description:
      "We design functional, inspiring commercial interiors that support productivity and reflect your brand identity. From space planning to material selection, our commercial interior design solutions are built for modern workplaces.",
  },
  {
    icon: Home,
    title: "Residential Design",
    description:
      "We create cozy, practical homes that feel effortless and personal. Every element, from layout and lighting to textures and flow, is thoughtfully designed to suit your lifestyle and enhance everyday living through residential interior design.",
  },
  {
    icon: Palette,
    title: "Design Consulting",
    description:
      "Every project starts with the right direction. Our interior design consultation helps us understand your goals, lifestyle, and aesthetic preferences before offering expert guidance. This process sets a clear, confident foundation for your interior design project.",
  },
];

const projects = [
  { image: project1, title: "Modern Villa Retreat", category: "Residential" },
  { image: project2, title: "Artisan Restaurant", category: "Commercial" },
  { image: project3, title: "Luxury Kitchen", category: "Residential" },
  { image: project4, title: "Wellness Spa Center", category: "Commercial" },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Award-Winning Interior Designs",
    description:
      "Astraum AI has won numerous industry awards and produced the best interior designs in India.",
  },
  {
    number: "02",
    title: "Personalized Design Approach",
    description:
      "Every project is thoughtfully planned around your lifestyle, space requirements, and design preferences for truly custom interiors.",
  },
  {
    number: "03",
    title: "Expert Craftsmanship",
    description: "We use high-quality materials and work with top interior designers in India.",
  },
  {
    number: "04",
    title: "On-Time Project Delivery",
    description:
      "We guarantee timely execution without sacrificing design or detail through methodical planning and transparent project management.",
  },
];

const testimonials = [
  {
    text: "Élégance Interiors transformed our home beyond our wildest dreams. Their attention to detail and understanding of our vision was remarkable.",
    author: "Sarah Mitchell",
    role: "Homeowner",
  },
  {
    text: "Working with this team was an absolute pleasure. They delivered a stunning office space that truly represents our brand.",
    author: "James Chen",
    role: "CEO, TechStart Inc.",
  },
  {
    text: "The level of professionalism and creativity exceeded our expectations. Our restaurant has never looked better.",
    author: "Maria Rodriguez",
    role: "Restaurant Owner",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury modern interior living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-accent/50 to-transparent" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up opacity-0 animation-delay-200">
              Luxury Interior Designers in India | Residential & Commercial
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-accent-foreground leading-tight mb-6 animate-fade-up opacity-0 animation-delay-400">
              Designing Spaces That Complement Your Lifestyle
            </h1>
            <p className="text-accent-foreground/80 text-lg md:text-xl mb-8 leading-relaxed animate-fade-up opacity-0 animation-delay-600">
              Since humans have evolved beyond simply living under roofs, we
              design residential and commercial interiors across India that
              seamlessly blend comfort, elegance, and functionality.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: "800ms" }}
            >
              <Button variant="gold" size="lg" asChild>
                <Link to="/work">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Our Services
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Comprehensive Design Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From concept to completion, we offer a full range of interior
              design services tailored to your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card p-8 rounded-lg shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Our Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore a curated collection of our recent residential and commercial interior design projects, defined by clean aesthetics, thoughtful detailing, and quality craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.title}
                to="/work"
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary text-sm tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl font-medium text-accent-foreground">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4">
                Why Choose Us?
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Luxury Interior Designers in India Designing Spaces with Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
               Designing high-end interiors for over a decade, we have helped people all over India turn their homes and offices into beautiful, useful spaces. Astraum AI combines careful planning, high-quality materials, and clear project management to create results that are both personal and polished. We do everything from designing homes and full-home renovations to commercial fit-outs and landscaping.

              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item) => (
                <div
                  key={item.number}
                  className="p-6 bg-card rounded-lg shadow-soft"
                >
                  <span className="text-4xl font-display font-bold text-primary/20">
                    {item.number}
                  </span>
                  <h3 className="font-display text-lg font-medium text-foreground mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-accent">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-accent-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-accent-foreground/5 backdrop-blur-sm p-8 rounded-lg"
              >
                <Quote className="w-10 h-10 text-primary mb-6" />
                <p className="text-accent-foreground/90 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="font-display font-medium text-accent-foreground">
                  {testimonial.author}
                </p>
                <p className="text-accent-foreground/60 text-sm">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
