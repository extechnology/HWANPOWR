import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WhatsAppButton from "./ui/whatsappButton";

const OfferingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-brand-cream"
    >
      {/* decorative vector elements */}
      <img
        src="/vectors/solar-shape-1.svg"
        className="absolute top-10 left-10 w-24 opacity-30"
        alt=""
      />
      <img
        src="/vectors/solar-shape-2.svg"
        className="absolute bottom-10 right-10 w-28 opacity-30"
        alt=""
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/solarLight3.jpg"
                alt="Solar lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* floating vector */}
            {/* <img
              src="/images/light-rays.svg"
              alt=""
              className="absolute -top-8 -right-8 w-20 opacity-60"
            /> */}
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-3 text-sm font-semibold tracking-widest">
              WHY CHOOSE US
            </p>

            <h2 className="font-medium text-3xl md:text-4xl mb-6 leading-tight">
              Turn sunlight into powerful lighting that ensures brightness all
              night long.
            </h2>

            <p className="text-muted-foreground leading-relaxed text-base md:text-md mb-8">
              Choose Hwanpower solar lights for reliable, energy-efficient
              outdoor lighting solutions. Designed with high-quality solar
              panels, they ensure fast charging and long power backup for
              consistent illumination.
            </p>

            {/* feature tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Solar Lights",
                "Solar Panels",
                "Street Lights",
                "Outdoor Lighting",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-yellow-600 rounded-full text-sm font-medium hover:bg-gradient-to-br from-yellow-300 to-yellow-500 hover:text-white transition"
                >
                  {tag}
                </span>
              ))}
            </div>

            <WhatsAppButton
              message="Hello, I am interested in your products"
              className="btn-primary-brand bg-gradient-to-br from-yellow-400 to-yellow-700 inline-block rounded-lg"
            >
              Learn More{" "}
            </WhatsAppButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
