import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, BatteryCharging, Zap, Shield } from "lucide-react";

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
    title: "High Power Output (90W–400W)",
    desc: "Wide power range suitable for streets, highways, residential areas, and commercial spaces.",
  },
  {
    icon: Shield,
    title: "Durable & Weather Resistant",
    desc: "Built with strong materials to withstand harsh weather conditions and ensure long-lasting performance.",
  },
];

const FeaturesBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-14 md:py-16 bg-background border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={f.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 group-hover:bg-primary/20 transition">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">
                  {f.title}
                </h3>

                {/* Description */}
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

export default FeaturesBar;
