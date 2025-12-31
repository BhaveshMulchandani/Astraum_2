import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroWork from "@/assets/hero-work.jpg";
import { projects } from "../data/project";

export default function Work() {

  // Sirf 5 projects
  const visibleProjects = projects.slice(0, 5);

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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-accent-foreground mb-6">
            Featured Work
          </h1>
          <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our collection of carefully crafted spaces.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
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
                    <Link to={`/work/${project.id}`}>
                      <Button variant="outline-light" size="sm">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
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
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life.
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
