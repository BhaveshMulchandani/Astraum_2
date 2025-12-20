import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const WEB_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const serviceOptions = [
  "Furniture Company",
  "Flooring",
  "Wrapping",
  "Cleaning Services",
  "Garden and Landscape",
  "Home Automation",
  "IT Equipments and CCTV",
  "Curtains",
  "Glass Work",
  "Lighting",
  "Wallpapers",
  "Painting",
  "Photographer",
  "Marbles and Stones",
  "Fit-Out Work",
  "Municipality Approvals",
];

export default function Vendor() {
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
    services: [] as string[],
    catalogue: "",
    pricingList: "",
    previousWork: "",
    referenceSource: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("formType", "Vendor");

      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          fd.append(key, value.join(", "));
        } else {
          fd.append(key, value);
        }
      });

      await fetch(WEB_URL, {
        method: "POST",
        body: fd,
      });

      toast({
        title: "Form Submitted",
        description: "Thank you for registering as a vendor.",
      });

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
        services: [],
        catalogue: "",
        pricingList: "",
        previousWork: "",
        referenceSource: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const RequiredLabel = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => (
  <Label className={className}>
    {children} <span className="text-red-500">*</span>
  </Label>
);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Vendor Registration
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Vendor Details Form
          </h1>
          <p className="text-muted-foreground text-lg">
            Please fill in the details below to register as a vendor with us.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-luxury max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <RequiredLabel>Full Name</RequiredLabel>
              <Input name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
              <RequiredLabel>Email Address</RequiredLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <RequiredLabel>Phone Number</RequiredLabel>
              <Input name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <Label>Message</Label>
              <Textarea name="message" rows={4} value={formData.message} onChange={handleChange} />
            </div>

            <div>
              <RequiredLabel>Company Name</RequiredLabel>
              <Input name="companyName" value={formData.companyName} onChange={handleChange} />
            </div>

            <div>
              <RequiredLabel>Office Address</RequiredLabel>
              <Textarea name="officeAddress" rows={3} value={formData.officeAddress} onChange={handleChange} />
            </div>

            <div>
              <Label>Website</Label>
              <Input name="website" value={formData.website} onChange={handleChange} />
            </div>

            <div>
              <Label>Social Media Link</Label>
              <Input name="socialMedia" value={formData.socialMedia} onChange={handleChange} />
            </div>

            <div>
              <RequiredLabel>Company Presence</RequiredLabel>
              <select
                name="companyPresence"
                value={formData.companyPresence}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              >
                <option value="">Select years</option>
                <option value="0-2 years">0–2 years</option>
                <option value="2-5 years">2–5 years</option>
                <option value="5-10 years">5–10 years</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>

            <div>
              <RequiredLabel>Physical Presence</RequiredLabel>
              <Input name="physicalPresence" value={formData.physicalPresence} onChange={handleChange} />
            </div>

            {/* Services */}
            <div>
              <RequiredLabel className="mb-4 block">Type of Product / Service</RequiredLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-secondary cursor-pointer hover:border-primary transition"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Catalogue Link</Label>
              <Input name="catalogue" value={formData.catalogue} onChange={handleChange} />
            </div>

            <div>
              <Label>Pricing List (Drive / PDF Link)</Label>
              <Input name="pricingList" value={formData.pricingList} onChange={handleChange} />
            </div>

            <div>
              <Label>How did you come to know about us?</Label>
              <Input name="referenceSource" value={formData.referenceSource} onChange={handleChange} />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : <>Submit Details <Send className="ml-2 h-4 w-4" /></>}
            </Button>

          </form>
        </div>
      </section>
    </Layout>
  );
}
