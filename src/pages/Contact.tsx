import { Layout } from "@/components/layout/Layout";
import office from "../assets/office.avif";

export default function Contact() {
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
              href="mailto:newyork@pentagram.com"
              className="text-primary underline block"
            >
              newyork@pentagram.com
            </a>

            <p className="text-foreground mb-2">+91-9808983333</p>

            {/* <p className="text-muted-foreground text-lg mb-6">
              Pentagram New York is in the top two floors of a 12-story building
              located on the border of Manhattan’s Flatiron District and the
              Union Square neighborhood.
            </p> */}

            <p className="text-foreground mb-2">
              Office  #410 <br />
              Naxtra By Kavyaratna  <br />
              Sargasan Croass Road, Below  The Fern Residency . <br />
              Gandhinagar, Gujarat 
            </p>

            <a href="#" className="text-primary underline">
              Get directions
            </a>
          </div>

          <div>
            <img
              src={office}
              alt="office"
              className="w-full h-[400px] object-cover"
            />

            <h2 className="font-display text-4xl mb-2 text-foreground">
              Dubai, UAE
            </h2>

            <p className="text-foreground text-2xl mb-4">11:23 am</p>

            <a
              href="mailto:newyork@pentagram.com"
              className="text-primary underline block"
            >
              newyork@pentagram.com
            </a>

            <p className="text-foreground mb-2">+1 212 683 7000</p>

            {/* <p className="text-muted-foreground text-lg mb-6">
              Pentagram New York is in the top two floors of a 12-story building
              located on the border of Manhattan’s Flatiron District and the
              Union Square neighborhood.
            </p> */}

            <p className="text-foreground mb-2">
              250 Park Avenue South <br />
              New York, NY 10003 <br />
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
