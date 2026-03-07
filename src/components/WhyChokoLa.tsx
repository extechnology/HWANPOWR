import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyChokoLa = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="section-subtitle mb-3">WHY CHOKO LA?</p>
            <h2 className="section-title mb-6">
              WE EVOKE EMOTIONS THROUGH THE ART OF CHOCOLATE MAKING
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 font-body">
              Our handcrafted artisanal chocolates are made with 100% couverture chocolate 
              otherwise known as Real Chocolate (made from cocoa butter) for a rich, indulgent taste. 
              Our products are ethically produced and free from palm oil. We use only the finest 
              ingredients, so you can enjoy pure indulgence with every Choko La product.
            </p>
            <a href="#" className="btn-primary-brand inline-block rounded-lg">
              Learn More
            </a>
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
                src="/images/chocolate-truffle.png"
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
      <div className="mt-16 flex justify-center">
        <img src="/images/graphic-divider.png" alt="" className="h-10 md:h-14 opacity-60" loading="lazy" />
      </div>
    </section>
  );
};

export default WhyChokoLa;
