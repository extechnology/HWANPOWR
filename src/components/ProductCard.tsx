import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  index?: number;
}

const ProductCard = ({ image, name, price, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      className="product-card-hover group cursor-pointer flex-shrink-0 w-64 md:w-72"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-secondary aspect-square mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-primary-brand rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 whitespace-nowrap">
          Add to Cart
        </button>
      </div>
      <h3 className="font-display font-semibold text-foreground text-sm md:text-base leading-tight mb-1 line-clamp-2">
        {name}
      </h3>
      <p className="text-primary font-bold font-body text-sm md:text-base">
        {price}
      </p>
    </motion.div>
  );
};

export default ProductCard;
