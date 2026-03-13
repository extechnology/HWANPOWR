import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./ui/whatsappButton";

const WhyChokoLa = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 md:py-15 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="section-subtitle font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-700 mb-3">
              About Us
            </p>
            <h2 className="md:text-4xl text-3xl font-medium mb-6">
              Turn sunlight into powerful lighting. ensures brightness all night
              long
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-md mb-8 font-body">
              Hwanpower is a trusted manufacturer and distributor of advanced
              solar street lighting solutions, committed to delivering reliable
              and energy-efficient lighting systems. The company offers a wide
              range of solar panel-mounted street lights with power capacities
              ranging from 90W to 400W, designed to meet diverse outdoor
              lighting needs. Hwanpower products are engineered with
              high-performance solar panels, ensuring fast charging capability
              and long power backup for uninterrupted illumination. With a
              strong focus on quality, durability, and sustainable technology,
              Hwanpower aims to support modern infrastructure with eco-friendly
              lighting solutions. Its innovative products are ideal for streets,
              highways, residential areas, commercial spaces, and public
              infrastructure projects.
            </p>
            <WhatsAppButton
              message="Hello, I am interested in your products"
              className="btn-primary-brand bg-gradient-to-br from-yellow-400 to-yellow-700 inline-block rounded-lg"
            >
              Order Now
            </WhatsAppButton>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/images/solarPanel.png"
                alt="Handcrafted chocolate truffle"
                className="w-full max-w-md animate-float"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider graphic */}
      <div className="mt-10 flex justify-center">
        <img
          src="/images/graphic-divider.png"
          alt=""
          className="h-10 md:h-14 opacity-60"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default WhyChokoLa;
