import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroAbout from "@/assets/hero-about.jpg";
import team1 from "@/assets/team1.jpeg";
import team2 from "@/assets/team2.jpeg";
import team3 from "@/assets/team3.jpeg";

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "10", label: "Years Experience" },
  { number: "45+", label: "Team Members" },
  { number: "3", label: "Design Awards" },
];

const values = [
  {
    icon: Sparkles,
    title: "Quality",
    description:
      "We deliver interiors built with care, using thoughtful material selection and meticulous craftsmanship from start to finish.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients at every step, ensuring their vision shapes each design decision and final outcome.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description:
      "We value your time and manage each project with precision, delivering interiors on schedule without compromising quality.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We innovate & embrace new ideas, technologies, and sustainable design practices to create spaces that feel current, functional, and future-ready.",
  },
];

const team = [
  {
    name: "Swachi Sharma",
    role: "Head - AI - Driven Design & Interiors",
    image: team1,
  },
  {
    name: "Shalin Joshi",
    role: "Lead - Horticulture & Landscape",
    image: team2,
  },
  {
    name: "Krishna Barot",
    role: "Senior Interior Designer",
    image: team3,
  },
];

const achievements = [
  {
    year: "2023",
    title: "Best Interior Design Studio - Design Excellence Awards",
  },
  { year: "2022", title: "Luxury Residential Design of the Year" },
  { year: "2021", title: "Innovation in Commercial Design Award" },
  { year: "2020", title: "Sustainable Design Excellence" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroAbout}
            alt="Our creative team at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/70" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-accent-foreground mb-6 animate-fade-up animation-delay-200">
            Designing Spaces with Purpose
          </h1>
          <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-400">
            Specialising in residential interior design, commercial interiors,
            and turnkey fitout services across India and the UAE.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Over a Decade of Design Expertise
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Astraum Infra and Astraum Middle East, brings Seven
                  years of Dubai design expertise to residential and commercial
                  interior design and turnkey fitouts across India and the UAE.
                  What began as a collaboration between two design-driven
                  studios has grown into a multidisciplinary team delivering
                  thoughtful layouts, detailed 3D visualisations, and seamless
                  on-site execution.
                </p>
                <p>
                  We combine global design sensibilities with local context,
                  creating spaces that balance comfort, function, and refined
                  aesthetics. From private homes and villas to offices,
                  hospitality spaces, and boutique commercial projects, our work
                  is shaped by skilled craftsmanship, transparent project
                  delivery, and a commitment to creating interiors that feel
                  lasting and truly lived in.
                </p>
                <p>
                  Today, our team of talented designers, architects, and project
                  managers continues to push boundaries, creating spaces that
                  are both beautiful and functional.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <img
                  src={team3}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={team1}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-lg shadow-soft">
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to deliver high-quality turnkey fitout and
                interior design services for residential and commercial spaces,
                creating interiors that balance functionality, comfort, and
                timeless style. We bring every vision to life with clarity and
                care by focusing on thoughtful space planning, sustainable
                materials, and a client-first design approach.
              </p>
            </div>
            <div className="bg-card p-10 rounded-lg shadow-soft">
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Now To lead in crafting personalised, transformative interior
                experiences that improve everyday living through thoughtful
                residential and commercial design and meticulous execution. 5
                years To be recognised across the region as a trusted interior
                design firm, delivering considered residential and commercial
                projects that genuinely enhance how people live and work. 10
                years To set new standards in design leadership by advancing
                sustainable practice, refined craftsmanship, and exceptional
                client experience across turnkey fitouts and bespoke interiors.
                15 years To be a globally respected design studio known for
                timeless interiors, outstanding craftsmanship, and projects that
                inspire and empower communities everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Our Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground text-lg">
              A talented team of designers and professionals passionate about
              creating beautiful spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="section-padding bg-accent">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4">
                Recognition
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-accent-foreground mb-6">
                Awards & Achievements
              </h2>
              <p className="text-accent-foreground/70 text-lg leading-relaxed mb-8">
                Our commitment to excellence has been recognized by industry
                leaders and design organizations worldwide.
              </p>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/work">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="flex items-start gap-4 p-6 bg-accent-foreground/5 rounded-lg"
                >
                  <span className="text-primary font-display font-bold text-xl">
                    {achievement.year}
                  </span>
                  <p className="text-accent-foreground">{achievement.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
