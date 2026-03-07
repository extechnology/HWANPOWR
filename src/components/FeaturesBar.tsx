import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "/images/icon-superior.png", title: "Superior Quality", desc: "100% couverture chocolate\n0% chocolate compound" },
  { icon: "/images/icon-fresh.png", title: "Freshly Baked", desc: "Shipped daily from our kitchen to stores" },
  { icon: "/images/icon-custom.png", title: "Custom Orders", desc: "Personalized cakes for special events" },
  { icon: "/images/icon-secure.png", title: "Secure Checkout", desc: "Your transaction details are safe and protected" },
];

const FeaturesBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img src={f.icon} alt={f.title} className="feature-icon mx-auto mb-4" loading="lazy" />
              <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-1">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm font-body whitespace-pre-line">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
