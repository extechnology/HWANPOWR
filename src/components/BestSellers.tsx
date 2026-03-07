import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ProductCard from "./ProductCard";

const bestSellers = [
  { image: "/images/product-hot-chocolate.jpg", name: "Hot Chocolate Kit", price: "₹195" },
  { image: "/images/product-chocolate-rose.jpg", name: "Chocolate Rose", price: "₹175" },
  { image: "/images/product-dark-rochers.jpg", name: "Dark Rochers", price: "₹595" },
  { image: "/images/product-rose-bouquet.jpg", name: "Special Chocolate Rose Bouquet", price: "₹925" },
];

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle mb-3">TRENDING</p>
          <h2 className="section-title">BEST SELLERS</h2>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background shadow-lg rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
          >
            {bestSellers.map((product, i) => (
              <ProductCard key={product.name} {...product} index={i} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background shadow-lg rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
