import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  { image: "/images/category-bakery.jpg", name: "Bakery" },
  { image: "/images/category-cakes.jpg", name: "Cakes" },
  { image: "/images/category-bars.jpg", name: "Chocolate Bars" },
];

const WorldOfChokoLa = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle mb-3">WORLD OF CHOKO LA</p>
          <h2 className="section-title mb-4">Chocolate. Bakery. Happiness.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-body leading-relaxed">
            Craving a bar of sweet or a bite of savoury treats — Choko La has a complete range 
            of chocolate bars, cakes, pastries, breads, croissants and drinks to choose from.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Chocolate Bars", "Cakes", "Pastries", "Cookies", "Bakery", "Chocolate Drink"].map((cat) => (
            <a
              key={cat}
              href="#"
              className="text-sm font-body font-bold text-primary hover:text-accent transition-colors underline underline-offset-2"
            >
              {cat}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary-foreground">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-primary-brand inline-block rounded-lg">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorldOfChokoLa;
