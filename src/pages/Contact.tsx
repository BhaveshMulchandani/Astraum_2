import React, { useEffect } from "react";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import india_office from "../assets/03.webp";
import dubai_office from "../assets/dubai_office.jpeg";
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
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz-h40G5hwGsfH1vMl7xZdut9O-31BRR0URprRsK8gJWXb4BZt8wc2DUaQ4KNaqQO7Y/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

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

  const [indiaTime, setIndiaTime] = useState("");
  const [dubaiTime, setDubaiTime] = useState("");

  const getTimeByZone = (timeZone) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone,
    }).format(new Date());
  };

  useEffect(() => {
    const updateTime = () => {
      setIndiaTime(getTimeByZone("Asia/Kolkata"));
      setDubaiTime(getTimeByZone("Asia/Dubai"));
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container-luxury px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Our Offices
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 animate-fade-up animation-delay-200">
              Visit Us
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed animate-fade-up animation-delay-400">
              Explore our global locations and learn more about the spaces where
              creativity happens.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGES ROW */}
      <section className="bg-background pb-12 mt-10">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={india_office}
                alt="India Office"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-2 text-foreground mt-4 text-center md:text-left">
              India
            </h2>
            <p className="text-foreground text-lg sm:text-xl md:text-2xl mb-4 text-center md:text-left">
              {indiaTime}
            </p>
            <a
              href="mailto:info@astraumai.com"
              className="text-primary underline block text-center md:text-left"
            >
              info@astraumai.com
            </a>
            <p className="text-foreground mb-2 text-center md:text-left">
              +91-9808983333
            </p>
            <p className="text-foreground mb-2 text-center md:text-left">
              Office #410 <br />
              Naxtra By Kavyaratna Sargasan Croass Road, Below The Fern
              Residency, Gandhinagar, Gujarat, India.
            </p>
            <a
              href="https://maps.app.goo.gl/3GN9z45NKP4D2ATR8"
              className="text-primary underline text-center md:text-left"
            >
              Get directions
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={dubai_office}
                alt="Dubai Office"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-2 text-foreground mt-4 text-center md:text-left">
              Dubai, UAE
            </h2>
            <p className="text-foreground text-lg sm:text-xl md:text-2xl mb-4 text-center md:text-left">
              {dubaiTime}
            </p>
            <a
              href="mailto:info@astraumai.com"
              className="text-primary underline block text-center md:text-left"
            >
              info@astraumai.com
            </a>
            <p className="text-foreground mb-2 text-center md:text-left">
              +971-524899993
            </p>
            <p className="text-foreground mb-2 text-center md:text-left">
              SUITE-B-30-159 <br />
              SRTI BUILDING ,UAE
            </p>
            <a
              href="https://maps.app.goo.gl/ZJFszasERdGxfk3b7"
              className="text-primary underline text-center md:text-left"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl bg-background rounded-lg shadow-lg p-4 sm:p-8 mt-12 sm:mt-16 mb-8">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-primary mb-6 sm:mb-8 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
