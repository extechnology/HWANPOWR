import { motion } from "framer-motion";

const CorporateBanner = () => {
  return (
    <motion.section
      className="relative w-full overflow-hidden cursor-pointer group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/corporate-banner.webp"
        alt="hwampower corporate banner"
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
    </motion.section>
  );
};

export default CorporateBanner;
