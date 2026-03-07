import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <motion.div
      layout // Essential for smooth height/position changes
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 overflow-hidden"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <motion.img
          layout
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Badge (Price) */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-sm font-bold bg-white/90 backdrop-blur-md rounded-full shadow-sm text-slate-900">
            {price}
          </span>
        </div>

        {/* Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-xl"
          >
            Quick Order
          </motion.button>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <motion.h3
          layout="position"
          className="text-xl font-bold text-slate-900 leading-tight"
        >
          {name}
        </motion.h3>

        {/* SPECIFICATIONS GRID */}
        <div className="mt-4 space-y-2">
          {specEntries.slice(0, 3).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between text-xs border-b border-slate-50 pb-1"
            >
              <span className="text-slate-400 uppercase tracking-wider font-medium">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span className="text-slate-700 font-semibold">{value}</span>
            </div>
          ))}

          {/* Hidden specs that reveal on expand */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden space-y-2 pt-2"
              >
                {specEntries.slice(3).map(([key, value]) => (
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    key={key}
                    className="flex justify-between text-xs border-b border-slate-50 pb-1"
                  >
                    <span className="text-slate-400 uppercase tracking-wider font-medium">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="text-slate-700 font-semibold">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER ACTION */}
        <motion.div
          layout
          className="mt-auto pt-6 flex items-center justify-between"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-black text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            {expanded ? "Less Info —" : "Full Specs +"}
          </button>

          <div
            className="h-2 w-2 rounded-full bg-green-500 animate-pulse"
            title="In Stock"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
