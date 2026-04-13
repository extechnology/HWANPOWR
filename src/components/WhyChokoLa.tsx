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
            <p className="section-subtitle font-light text-2xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-700 mb-3">
              About Us
            </p>
            <h2 className="md:text-4xl text-3xl font-medium mb-6">
              Turn sunlight into powerful lighting. ensures brightness all night
              long
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify text-base md:text-md mb-4 font-body">
              Hwanpower is a growing company engaged in the supply of solar
              streetlights , electrical products and other related electrical
              items. Our company is committed to delivering reliable,
              energy-efficient, and high-quality products that meet modern
              market requirements. With a strong focus on performance,
              durability, and customer satisfaction,
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify text-base md:text-md mb-8 font-body">
              Hwanpower aims to
              provide dependable solutions suitable for residential, commercial,
              and infrastructure applications. By adopting advanced technology
              and maintaining quality standards, Hwanpower strives to support
              sustainable development through innovative and practical
              electrical solutions. Our company continuously works towards
              building trust and long-term relationships with customers by
              ensuring consistent product quality and professional service.
            </p>
            <WhatsAppButton
              message="Hello, I am interested in your products"
              className="btn-primary-brand font-light bg-gradient-to-br from-yellow-400 to-yellow-700 inline-block rounded-lg"
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
                src="/about.webp"
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
