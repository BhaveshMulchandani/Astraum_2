import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroAbout from "@/assets/hero-about.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "12", label: "Years Experience" },
  { number: "45+", label: "Team Members" },
  { number: "8", label: "Design Awards" },
];

const values = [
  {
    icon: Sparkles,
    title: "Quality",
    description: "We never compromise on quality. Every detail matters, from material selection to final finishes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, ensuring their vision guides every decision we make.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "We respect your time and deliver projects on schedule without sacrificing quality.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to create forward-thinking designs.",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    image: team1,
  },
  {
    name: "Michael Foster",
    role: "Lead Architect",
    image: team2,
  },
  {
    name: "Emma Richards",
    role: "Senior Interior Designer",
    image: team3,
  },
];

const achievements = [
  { year: "2023", title: "Best Interior Design Studio - Design Excellence Awards" },
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
            Crafting Spaces, Creating Stories
          </h1>
          <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-400">
            A passionate team of designers, architects, and craftsmen dedicated 
            to transforming spaces into extraordinary experiences.
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
                A Decade of Design Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2012, Élégance Interiors began with a simple vision: to create 
                  spaces that inspire and elevate everyday living. What started as a small 
                  studio has grown into a full-service design firm with a reputation for 
                  excellence.
                </p>
                <p>
                  Our journey has been defined by a commitment to quality, innovation, and 
                  client satisfaction. We believe that great design should be accessible, 
                  and we work with clients of all backgrounds to bring their visions to life.
                </p>
                <p>
                  Today, our team of talented designers, architects, and project managers 
                  continues to push boundaries, creating spaces that are both beautiful 
                  and functional.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <img
                  src={team1}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={team2}
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
                To transform spaces into extraordinary environments that enhance 
                the quality of life for our clients, while maintaining the highest 
                standards of design excellence and sustainable practices.
              </p>
            </div>
            <div className="bg-card p-10 rounded-lg shadow-soft">
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading interior design firm recognized for innovative 
                solutions, exceptional craftsmanship, and unwavering commitment 
                to client satisfaction across residential and commercial sectors.
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
      <section className="section-padding bg-accent">
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
                Our commitment to excellence has been recognized by industry leaders 
                and design organizations worldwide.
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
      </section>
    </Layout>
  );
}
