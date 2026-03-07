import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  specs?: Record<string, string>;
  index?: number;
}

const ProductCard = ({
  image,
  name,
  price,
  specs = {},
  index = 0,
}: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const specEntries = Object.entries(specs);
  const visibleSpecs = expanded ? specEntries : specEntries.slice(0, 4);

  return (
    <motion.div
      className="product-card-hover group cursor-pointer flex-shrink-0 w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl bg-secondary aspect-square mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />

        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-primary-brand rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 whitespace-nowrap">
          Order Now
        </button>
      </div>

      {/* TITLE */}
      <h3 className="font-display font-semibold text-foreground text-sm md:text-base leading-tight mb-2 line-clamp-2">
        {name}
      </h3>

      {/* SPECS */}
      {specEntries.length > 0 && (
        <div className="text-xs md:text-sm text-muted-foreground space-y-1 mb-2">
          {visibleSpecs.map(([key, value]) => (
            <p key={key}>
              <span className="font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1")}:
              </span>{" "}
              {value}
            </p>
          ))}

          {specEntries.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary font-medium text-xs mt-1"
            >
              {expanded ? "Show less" : "More details"}
            </button>
          )}
        </div>
      )}

      {/* PRICE */}
      <p className="text-primary font-bold font-body text-sm md:text-base">
        {price}
      </p>
    </motion.div>
  );
};

export default ProductCard;
