import { Sun, BatteryCharging, Zap, Shield } from "lucide-react";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const features = [
  {
    icon: Sun,
    title: "Fast Solar Charging",
    desc: "High-efficiency solar panels ensure quick charging during the day for reliable lighting at night.",
  },
  {
    icon: BatteryCharging,
    title: "Long Power Backup",
    desc: "Advanced battery technology provides extended backup, ensuring consistent illumination throughout the night.",
  },
  {
    icon: Zap,
    title: "High Power Output (90W–600W)",
    desc: "Wide power range suitable for streets, highways, residential areas, and commercial spaces.",
  },
  {
    icon: Shield,
    title: "Durable & Weather Resistant",
    desc: "Built with strong materials to withstand harsh weather conditions and ensure long-lasting performance.",
  },
];



const FeatureSection = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [features?.length]);

  return (
    <section
      ref={ref}
      className="py-14 md:py-16 bg-background border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* ✅ MOBILE CAROUSEL */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            {features.map((f: any, i: number) => {
              const Icon = f.icon;

              return (
                <div
                  key={f.title}
                  className="min-w-full flex flex-col items-center text-center px-6"
                >
                  <div
                    className="w-16 h-16 mb-5 flex items-center justify-center rounded-full 
                  bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-lg"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-semibold text-base mb-2">{f.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_: any, i: number) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-yellow-500" : "w-2 bg-gray-400/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ✅ DESKTOP (UNCHANGED) */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {features.map((f: any, i: number) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={f.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 group-hover:bg-primary/20 transition">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">
                  {f.title}
                </h3>

                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-[220px] mx-auto">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;