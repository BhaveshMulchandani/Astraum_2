import { Link } from "react-router-dom";
import { ArrowRight, Palette, Building2, Home, TreePine, Hammer, CheckCircle } from "lucide-react";
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
    description: "Our expert design consultants work closely with you to understand your vision, lifestyle, and preferences. We provide comprehensive design advice, space planning, and material selection to ensure your project reflects your unique style.",
    image: project1,
    features: ["Personalized design consultation", "Space planning and layout", "Material and finish selection", "Budget optimization"],
  },
  {
    icon: Hammer,
    title: "Interior Fitout",
    description: "From concept to completion, our fitout services transform empty spaces into functional, beautiful environments. We handle everything from demolition to final finishes, ensuring seamless execution and exceptional quality.",
    image: project3,
    features: ["Complete project management", "Quality craftsmanship", "Timely delivery", "Post-completion support"],
  },
  {
    icon: Building2,
    title: "Commercial Interior Design",
    description: "Create inspiring workspaces that boost productivity and reflect your brand identity. Our commercial design services cover offices, retail spaces, restaurants, and hospitality venues.",
    image: project2,
    features: ["Brand-aligned design", "Ergonomic workspace planning", "Sustainable solutions", "Compliance with regulations"],
  },
  {
    icon: Home,
    title: "Residential Interior Design",
    description: "Transform your house into a home that perfectly suits your lifestyle. Our residential design services cover everything from single rooms to complete home renovations.",
    image: project4,
    features: ["Custom furniture design", "Lighting design", "Color consultation", "Art and accessory curation"],
  },
  {
    icon: TreePine,
    title: "Landscaping & Horticulture",
    description: "Extend your living space outdoors with our landscaping services. We create harmonious outdoor environments that complement your interior design and enhance your property's appeal.",
    image: project5,
    features: ["Landscape architecture", "Garden design", "Outdoor living spaces", "Sustainable planting"],
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
              Comprehensive Design Solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-400">
              From initial concept to final execution, we offer a complete range of 
              interior design services tailored to bring your vision to life.
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
                    <li key={feature} className="flex items-center gap-3 text-foreground">
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
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
              A seamless journey from concept to completion, ensuring your vision 
              becomes reality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We begin with an in-depth discussion of your needs, preferences, and budget." },
              { step: "02", title: "Concept Design", description: "Our team develops initial design concepts and mood boards for your approval." },
              { step: "03", title: "Development", description: "Detailed drawings, 3D visualizations, and material specifications are prepared." },
              { step: "04", title: "Execution", description: "Our project managers oversee every aspect of the implementation process." },
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
            Contact us today for a free consultation and let's discuss how we can 
            transform your space.
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
