import { useState } from "react";
import { MapPin, Clock, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const jobs = [
  {
    id: 1,
    title: "Senior Interior Designer",
    location: "New York, NY",
    type: "Full-time",
    description: "We're looking for an experienced interior designer to lead residential and commercial projects from concept to completion.",
    requirements: [
      "5+ years of interior design experience",
      "Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite",
      "Strong portfolio demonstrating design excellence",
      "Excellent client communication skills",
    ],
  },
  {
    id: 2,
    title: "Junior Designer",
    location: "New York, NY",
    type: "Full-time",
    description: "An exciting opportunity for a talented junior designer to grow their skills in a supportive, creative environment.",
    requirements: [
      "Bachelor's degree in Interior Design or related field",
      "1-2 years of relevant experience or internship",
      "Knowledge of design software",
      "Strong attention to detail",
    ],
  },
  {
    id: 3,
    title: "Project Manager",
    location: "New York, NY",
    type: "Full-time",
    description: "Oversee the execution of interior design projects, ensuring timely delivery and client satisfaction.",
    requirements: [
      "3+ years of project management experience",
      "Background in interior design or construction",
      "Excellent organizational skills",
      "Strong leadership abilities",
    ],
  },
  {
    id: 4,
    title: "3D Visualization Artist",
    location: "Remote",
    type: "Contract",
    description: "Create stunning 3D renderings and visualizations to bring design concepts to life for our clients.",
    requirements: [
      "Expertise in 3ds Max, V-Ray, or similar software",
      "Strong portfolio of architectural visualizations",
      "Attention to lighting and material details",
      "Ability to work independently",
    ],
  },
];

const culturePoints = [
  {
    title: "Creative Freedom",
    description: "We encourage original thinking and give our teams the space to explore fresh design ideas and creative solutions.",
  },
  {
    title: "Growth Opportunities",
    description: "Continuous learning and professional development are central to our culture, ensuring you grow your craft and your career.",
  },
  {
    title: "Collaborative Environment",
    description: "Work closely with experienced designers, architects, and project specialists who share a passion for thoughtful, high-quality design.",
  },
  {
    title: "Work-Life Balance",
    description: "We prioritise your well-being and support a balanced work environment where you can thrive personally and professionally.",
  },
];

export default function Careers() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApply = (job: (typeof jobs)[0]) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", portfolio: "", message: "" });
    setIsDialogOpen(false);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Careers
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 animate-fade-up animation-delay-200">
              Join Our Creative Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-400">
             We’re always looking for designers, architects, and project professionals who share our passion for thoughtful, high-quality interior design. Explore opportunities to grow with us and contribute to meaningful residential and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Our Culture
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground text-lg">
            We create a supportive, collaborative environment where designers and project teams can grow, experiment, and do meaningful work that shapes exceptional interiors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturePoints.map((point, index) => (
              <div
                key={point.title}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Open Positions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Current Opportunities
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-card p-6 md:p-8 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="gold" onClick={() => handleApply(job)}>
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div>
                  <p className="font-medium text-foreground mb-2">Requirements:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {job.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Apply for {selectedJob?.title}
            </DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="apply-name">Full Name</Label>
              <Input
                id="apply-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="apply-email">Email</Label>
              <Input
                id="apply-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="apply-phone">Phone</Label>
              <Input
                id="apply-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="apply-portfolio">Portfolio URL</Label>
              <Input
                id="apply-portfolio"
                name="portfolio"
                type="url"
                placeholder="https://"
                value={formData.portfolio}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="apply-message">Cover Letter</Label>
              <Textarea
                id="apply-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1"
              />
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="gold"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
