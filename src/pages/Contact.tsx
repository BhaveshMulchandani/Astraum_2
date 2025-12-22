import React from "react";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import office from "../assets/office.avif";
import dubai_office from "../assets/dubai_office.jpeg"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz-h40G5hwGsfH1vMl7xZdut9O-31BRR0URprRsK8gJWXb4BZt8wc2DUaQ4KNaqQO7Y/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting us. We'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Our Offices
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 animate-fade-up animation-delay-200">
              Visit Us
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-400">
              Explore our global locations and learn more about the spaces where
              creativity happens.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGES ROW */}
      <section className="bg-background pb-12 mt-10">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={office}
              alt="office"
              className="w-full h-[400px] object-cover"
            />

            <h2 className="font-display text-4xl mb-2 text-foreground">
              India
            </h2>

            <p className="text-foreground text-2xl mb-4">11:23 am</p>

            <a
              href="mailto:info@astraumai.com"
              className="text-primary underline block"
            >
              info@astraumai.com
            </a>

            <p className="text-foreground mb-2">+91-9808983333</p>

            {/* <p className="text-muted-foreground text-lg mb-6">
              Pentagram New York is in the top two floors of a 12-story building
              located on the border of Manhattan’s Flatiron District and the
              Union Square neighborhood.
            </p> */}

            <p className="text-foreground mb-2">
              Office #410 <br />
              Naxtra By Kavyaratna <br />
              Sargasan Croass Road, Below The Fern Residency . <br />
              Gandhinagar, Gujarat
            </p>

            <a href="#" className="text-primary underline">
              Get directions
            </a>
          </div>

          <div>
            <img
              src={dubai_office}
              alt="office"
              className="w-full h-[400px] object-cover"
            />

            <h2 className="font-display text-4xl mb-2 text-foreground">
              Dubai, UAE
            </h2>

            <p className="text-foreground text-2xl mb-4">11:23 am</p>

            <a
              href="mailto:info@astraumai.com"
              className="text-primary underline block"
            >
              info@astraumai.com
            </a>

            <p className="text-foreground mb-2">+971-524899993</p>

            {/* <p className="text-muted-foreground text-lg mb-6">
              Pentagram New York is in the top two floors of a 12-story building
              located on the border of Manhattan’s Flatiron District and the
              Union Square neighborhood.
            </p> */}

            <p className="text-foreground mb-2">
              SUITE-B-30-159 <br />
              SRTI BUILDING ,UAE
            </p>

            <a href="#" className="text-primary underline">
              Get directions
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-background rounded-lg shadow-lg p-8 mt-16 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-primary mb-8 text-center">
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="service" className="text-foreground mb-2 block">
                  Service Interested In
                </Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-card border border-border rounded-md px-3 py-2 focus:outline-none focus:border-primary text-foreground"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Design Consultant">Design Consultant</option>
                  <option value="Interior Fitout">Interior Fitout</option>
                  <option value="Commercial Interior Design">
                    Commercial Interior Design
                  </option>
                  <option value="Residential Interior Design">
                    Residential Interior Design
                  </option>
                  <option value="Landscaping & Horticulture">
                    Landscaping & Horticulture
                  </option>
                </select>
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-card border-border focus:border-primary resize-none"
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
      </section>
    </Layout>
  );
}
