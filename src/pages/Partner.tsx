import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const WEB_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (234) 567-890",
    link: "tel:+1234567890",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "+1 (234) 567-891",
    link: "https://wa.me/1234567891",
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@eleganceinteriors.com",
    link: "mailto:hello@eleganceinteriors.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Design Avenue, Suite 500, New York, NY 10001",
    link: "#",
  },
];

export default function Partner() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    companyName: "",
    officeAddress: "",
    website: "",
    socialMedia: "",
    companyPresence: "",
    physicalPresence: "",
    productType: "",
    catalogue: "",
    previousWork: "",
    referenceSource: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const fd = new FormData();

    // identify which form
    fd.append("formType", "Vendor");

    // append ALL fields dynamically
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value);
    });

    const res = await fetch(WEB_URL, {
      method: "POST",
      body: fd,
    });

    const text = await res.text();
    console.log("Response:", text);

    toast({
      title: "Message Sent!",
      description: "We will contact you soon.",
    });

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      companyName: "",
      officeAddress: "",
      website: "",
      socialMedia: "",
      companyPresence: "",
      physicalPresence: "",
      productType: "",
      catalogue: "",
      previousWork: "",
      referenceSource: "",
    });

  } catch (error) {
    console.error(error);
    toast({
      title: "Error",
      description: "Something went wrong.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
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
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 animate-fade-up animation-delay-200">
              Let's Start a Conversation
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-400">
              Have a project in mind? We'd love to hear from you. Reach out and 
              let's discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
                Contact Information
              </h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 group"
                  >
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                
                <div>
                  <Label
                    htmlFor="companyName"
                    className="text-foreground mb-2 block"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="officeAddress"
                    className="text-foreground mb-2 block"
                  >
                    Office Address
                  </Label>
                  <Textarea
                    id="officeAddress"
                    name="officeAddress"
                    value={formData.officeAddress}
                    onChange={handleChange}
                    rows={3}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="website"
                    className="text-foreground mb-2 block"
                  >
                    Website
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="socialMedia"
                    className="text-foreground mb-2 block"
                  >
                    Social Media Link
                  </Label>
                  <Input
                    id="socialMedia"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="companyPresence"
                    className="text-foreground mb-2 block"
                  >
                    Company Presence (Cities / Countries)
                  </Label>
                  <Input
                    id="companyPresence"
                    name="companyPresence"
                    value={formData.companyPresence}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="physicalPresence"
                    className="text-foreground mb-2 block"
                  >
                    Physical Presence
                  </Label>
                  <Input
                    id="physicalPresence"
                    name="physicalPresence"
                    value={formData.physicalPresence}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="productType"
                    className="text-foreground mb-2 block"
                  >
                    Type of Product / Services
                  </Label>
                  <Input
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="catalogue"
                    className="text-foreground mb-2 block"
                  >
                    Catalogue (Drive / PDF Link)
                  </Label>
                  <Input
                    id="catalogue"
                    name="catalogue"
                    value={formData.catalogue}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="previousWork"
                    className="text-foreground mb-2 block"
                  >
                    Previous Work Sample Links
                  </Label>
                  <Textarea
                    id="previousWork"
                    name="previousWork"
                    value={formData.previousWork}
                    onChange={handleChange}
                    rows={3}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="referenceSource"
                    className="text-foreground mb-2 block"
                  >
                    How did you come to know about us?
                  </Label>
                  <Input
                    id="referenceSource"
                    name="referenceSource"
                    value={formData.referenceSource}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
