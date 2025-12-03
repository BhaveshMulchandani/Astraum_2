import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import heroWork from "@/assets/hero-work.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const categories = ["All", "Residential", "Commercial", "Fitout", "Landscaping"];

const projects = [
  {
    id: 1,
    image: project1,
    title: "Modern Villa Retreat",
    category: "Residential",
    description: "A contemporary villa featuring open spaces, natural materials, and seamless indoor-outdoor flow.",
  },
  {
    id: 2,
    image: project2,
    title: "Artisan Restaurant",
    category: "Commercial",
    description: "An intimate dining space with warm ambiance and sophisticated design elements.",
  },
  {
    id: 3,
    image: project3,
    title: "Luxury Kitchen Renovation",
    category: "Fitout",
    description: "A complete kitchen transformation with premium finishes and smart storage solutions.",
  },
  {
    id: 4,
    image: project4,
    title: "Wellness Spa Center",
    category: "Commercial",
    description: "A serene wellness retreat designed to promote relaxation and rejuvenation.",
  },
  {
    id: 5,
    image: project5,
    title: "Urban Garden Estate",
    category: "Landscaping",
    description: "A stunning outdoor living space with modern landscaping and fire features.",
  },
  {
    id: 6,
    image: project1,
    title: "Penthouse Suite",
    category: "Residential",
    description: "Luxurious penthouse with panoramic views and bespoke interior finishes.",
  },
  {
    id: 7,
    image: project2,
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    description: "An elegant hotel entrance that makes a lasting first impression.",
  },
  {
    id: 8,
    image: project3,
    title: "Executive Office Suite",
    category: "Fitout",
    description: "A professional workspace designed for productivity and comfort.",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroWork}
            alt="Our portfolio of interior design work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/70" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up">
            Our Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-accent-foreground mb-6 animate-fade-up animation-delay-200">
            Featured Work
          </h1>
          <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-400">
            Explore our collection of carefully crafted spaces that showcase 
            our commitment to excellence and innovation in design.
          </p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <Button variant="outline-light" size="sm">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-primary text-sm tracking-widest uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can bring your vision to life. Our team is ready 
            to create something extraordinary for you.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
