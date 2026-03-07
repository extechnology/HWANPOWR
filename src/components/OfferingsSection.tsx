import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OfferingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/offerings-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-cream/90" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle mb-3">CHOKO LA'S OFFERING</p>
            <h2 className="section-title mb-6">
              WE CREATE INCREDIBLY TASTY CHOCOLATES
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 font-body">
              Every success is special, every moment is to be celebrated. Our team works 
              with you to envision and create memorable gifts that spark joy and melt in your mouth.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              {["Luxury Gifts", "Customised Hampers", "Thank You Gifts", "Party Favours"].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="px-4 py-2 border border-primary/30 rounded-full text-sm font-body font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {tag}
                </a>
              ))}
            </div>

            <a href="#" className="btn-primary-brand inline-block rounded-lg">
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
