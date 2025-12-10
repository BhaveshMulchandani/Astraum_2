import { Layout } from "@/components/layout/Layout";
import office from "../assets/office.avif";
import office_1 from "../assets/office_2.avif";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Our Offices
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Visit Us
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Explore our global locations and learn more about the spaces where creativity happens.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGES ROW */}
      <section className="bg-background pb-12 mt-10">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={office}
            alt="office"
            className="w-full h-[400px] object-cover"
          />
          <img
            src={office_1}
            alt="office1"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* OFFICE INFO ROW (2 BLOCKS SIDE BY SIDE) */}
      <section className="pb-24 bg-background">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT OFFICE */}
          <div>
            <h2 className="font-display text-4xl mb-4 text-foreground">New York</h2>

            <p className="text-muted-foreground text-lg mb-6">
              Pentagram New York is in the top two floors of a 12-story building located on the 
              border of Manhattan’s Flatiron District and the Union Square neighborhood.
            </p>

            <p className="text-foreground text-xl mb-2">11:23 am</p>

            <p className="text-foreground mb-2">+1 212 683 7000</p>

            <a href="mailto:newyork@pentagram.com" className="text-primary underline block mb-2">
              newyork@pentagram.com
            </a>

            <p className="text-foreground mb-2">
              250 Park Avenue South <br />
              New York, NY 10003 <br />
              United States
            </p>

            <a href="#" className="text-primary underline">
              Get directions
            </a>
          </div>

          {/* RIGHT OFFICE */}
          <div>
            <h2 className="font-display text-4xl mb-4 text-foreground">Austin</h2>

            <p className="text-muted-foreground text-lg mb-6">
              Pentagram Austin is located in the bustling East Side neighborhood known for 
              its restaurants, bars, and creative culture.
            </p>

            <p className="text-foreground text-xl mb-2">10:10 am</p>

            <p className="text-foreground mb-2">+1 512 476 3076</p>

            <a href="mailto:austin@pentagram.com" className="text-primary underline block mb-2">
              austin@pentagram.com
            </a>

            <p className="text-foreground mb-2">
              1634 East Cesar Chavez Street <br />
              Austin, TX 78702 <br />
              United States
            </p>

            <a href="#" className="text-primary underline">
              Get directions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
