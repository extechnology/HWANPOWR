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
            <p className="section-subtitle text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-3">
              WHY CHOOSE US
            </p>
            <h2 className="font-medium md:text-4xl text-3xl mb-6">
              Turn sunlight into powerful lighting. ensures brightness all night
              long.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-md mb-8 font-body">
              Choose Hwanpower solar lights for reliable, energy-efficient
              outdoor lighting solutions. Designed with high-quality solar
              panels, they ensure fast charging and long power backup for
              consistent illumination. With power ranges from 90W to 400W,
              Hwanpower lights deliver durability, superior performance, and
              eco-friendly operation, making them ideal for streets,
              communities, commercial spaces, and infrastructure projects.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              {[
                "Solar Lights",
                "Solar Panels",
                "Street Lights",
                "Lightings",
              ].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="px-4 py-2 border border-yellow-600/80 rounded-full text-sm font-body font-medium text-foreground hover:bg-yellow-500 hover:text-primary-foreground transition-all duration-300"
                >
                  {tag}
                </a>
              ))}
            </div>

            <a href="#" className="btn-primary-brand bg-gradient-to-br from-yellow-300 to-yellow-600 inline-block rounded-lg">
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
