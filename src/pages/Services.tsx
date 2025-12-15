import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Building2,
  Home,
  TreePine,
  Hammer,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const services = [
  {
    icon: Palette,
    title: "Design Consultant",
    description:
      "Our interior design consultants work closely with you to understand your vision, lifestyle, and design preferences. Through thoughtful discussions and expert guidance, we help shape a clear direction for your project, ensuring every decision aligns with your space, style, and budget.",
    image: project1,
    features: [
      "Personalized interior design consultation",
      "Space planning and layout design",
      "Material and finish selection",
      "Budget planning and optimization",
    ],
  },
  {
    icon: Hammer,
    title: "Interior Fitout",
    description:
      "From concept to completion, our interior fitout services turn empty spaces into functional, well-finished environments. We manage the entire process, from demolition and civil work to final finishes, ensuring smooth execution, consistent quality, and on-time delivery.",
    image: project3,
    features: [
      "End-to-end project management",
      "Skilled workmanship and quality finishes",
      "Timely execution and delivery",
      "Post-completion support and handover",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Interior Design",
    description:
      "We design commercial interiors that support productivity and reflect your brand identity. Our commercial interior design services cover offices, retail spaces, restaurants, and hospitality projects, with a focus on functionality, comfort, and long-term usability.",
    image: project2,
    features: [
      "Brand-aligned interior design",
      "Ergonomic workspace planning",
      "Sustainable and practical design solutions",
      "Compliance with safety and regulatory standards",
    ],
  },
  {
    icon: Home,
    title: "Residential Interior Design",
    description:
      "We design warm, functional homes that reflect your lifestyle. Our residential interior design services cover everything from single rooms to complete home renovations, with thoughtful layouts, lighting, and finishes.",
    image: project4,
    features: [
      "Custom furniture and joinery design",
      "Lighting design with layered illumination",
      "Color consultation and material selection",
      "Art, styling, and accessory curation",
      "Renovation planning and space optimization for full-home projects"
    ],
  },
  {
    icon: TreePine,
    title: "Landscaping & Horticulture",
    description:
      "Extend your living spaces outdoors with thoughtful landscaping and horticulture services. We design outdoor environments that complement your interior design while improving comfort, usability, and overall property appeal.",
    image: project5,
    features: [
      "Landscape architecture and planning",
      "Garden design and softscape detailing",
      "Outdoor living spaces for homes and villas",
      "Sustainable planting and irrigation solutions",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Our Services
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 animate-fade-up animation-delay-200">
              Comprehensive Interior Design Solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-400">
              From concept to completion, we offer end-to-end residential and commercial interior design services that bring your vision to life with clarity and care.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline-gold" size="lg" asChild>
                  <Link to="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-large">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-accent">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Our Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-accent-foreground mb-4">
              How We Work
            </h2>
            <p className="text-accent-foreground/70 text-lg">
              A clear, end-to-end interior design process from concept to completion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with an interior design consultation to understand your needs, preferences, and budget.",
              },
              {
                step: "02",
                title: "Concept Design",
                description:
                  "Initial layouts, design concepts, and mood boards are created for your approval.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Detailed drawings, 3D visualizations, and material specifications are prepared.",
              },
              {
                step: "04",
                title: "Execution",
                description:
                  "Our team manages the complete interior execution to ensure quality and timely delivery.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-xl font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-accent-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-accent-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and let's discuss how we
            can transform your space.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
