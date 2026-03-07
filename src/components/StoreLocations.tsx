import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const StoreLocations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative">
      {/* Store image */}
      <div className="relative h-[300px] md:h-[500px] overflow-hidden">
        <img
          src="/images/store-image.jpg"
          alt="Choko La Boutique Store"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/20" />

        <motion.div
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
                Our Boutiques
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-primary-foreground font-body font-bold mb-2">Delhi</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Khan Market", "DLF Promenade", "Select Citywalk Mall"].map((store) => (
                      <a
                        key={store}
                        href="#"
                        className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary transition-colors text-sm font-body"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {store}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-primary-foreground font-body font-bold mb-2">Gurugram</h3>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary transition-colors text-sm font-body"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Galleria Market
                  </a>
                </div>
              </div>

              <a href="#" className="btn-primary-brand inline-block rounded-lg text-xs">
                Find a store near you
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreLocations;
