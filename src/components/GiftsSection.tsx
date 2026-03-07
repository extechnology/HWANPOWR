import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductCard from "./ProductCard";

const gifts = [
  { image: "/images/gift-bonbons.jpg", name: "Signature Bonbons & Pralines Chocolate Hamper", price: "₹1,495" },
  { image: "/images/gift-regalia.jpg", name: "Regalia Chocolate Hamper", price: "₹3,195" },
  { image: "/images/gift-harmony.jpg", name: "Harmony Chocolate Hamper", price: "₹2,150" },
  { image: "/images/gift-luxury-medium.jpg", name: "Luxury Celebration Medium Hamper", price: "₹4,495" },
];

const GiftsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle mb-3">DELECTABLE</p>
          <h2 className="section-title">GIFTS & BOXES</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gifts.map((gift, i) => (
            <div key={gift.name} className="w-full">
              <ProductCard {...gift} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="#" className="btn-outline-brand inline-block rounded-lg">
            VIEW MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;
