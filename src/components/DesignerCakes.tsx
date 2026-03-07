import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductCard from "./ProductCard";

const cakes = [
  { image: "/images/cake-vintage-lace.jpg", name: "Vintage Lace & Roses Theme Designer Cake", price: "₹5,000" },
  { image: "/images/cake-golden-bow.jpg", name: "Golden Bow Theme Designer Cake", price: "₹5,000" },
  { image: "/images/cake-yellow-blossom.jpg", name: "Yellow Blossom Theme Designer Cake", price: "₹5,000" },
  { image: "/images/cake-royal-blue.jpg", name: "Royal Blue Theme Designer Cake", price: "₹3,750" },
];

const DesignerCakes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle mb-3">HANDCRAFTED</p>
          <h2 className="section-title">DESIGNER CAKES</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cakes.map((cake, i) => (
            <div key={cake.name} className="w-full">
              <ProductCard {...cake} index={i} />
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

export default DesignerCakes;
