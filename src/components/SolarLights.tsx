import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductCard from "./ProductCard";

const solarLights = [
  {
    image: "/images/solarLight1.jpg",
    name: "90W Solar Street Light",
    price: "₹ 2000",
    specs: {
      led: "5730 144D",
      battery: "3.2V 10Ah",
      panel: "6V 12W",
      bodyMaterial: "Plastic ABS – 625 × 240 mm",
      panelSize: "—",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
    },
  },

  {
    image: "/images/solarLight2.jpg",
    name: "120W Solar Street Light",
    price: "₹ 2000",
    specs: {
      led: "5730 192D",
      battery: "3.2V 12Ah",
      panel: "6V 15W",
      bodyMaterial: "Plastic ABS – 725 × 240 mm",
      panelSize: "—",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
      waterproofRating: "IP67",
    },
  },

  {
    image: "/images/solarLight3.jpg",
    name: "150W Solar Street Light",
    price: "₹ 2000",
    specs: {
      led: "5730 240D",
      battery: "3.2V 15Ah",
      panel: "6V 18W",
      bodyMaterial: "Plastic ABS – 820 × 240 mm",
      panelSize: "—",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
      waterproofRating: "IP67",
    },
  },

  {
    image: "/images/solarLight4.jpg",
    name: "300W Solar Street Light",
    price: "₹ 2000",
    specs: {
      led: "5730 480D",
      battery: "3.2V 15Ah",
      panel: "6V 20W",
      bodyMaterial: "Plastic ABS – 510 × 340 × 70 mm",
      panelSize: "335 × 420 mm",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
      waterproofRating: "IP67",
    },
  },

  {
    image: "/images/solarLight5.jpg",
    name: "400W Solar Street Light",
    price: "₹ 2000",
    specs: {
      led: "5730 600D",
      battery: "3.2V 20Ah",
      panel: "6V 28W",
      bodyMaterial: "Plastic ABS – 590 × 340 × 70 mm",
      panelSize: "335 × 510 mm",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
      waterproofRating: "IP67",
    },
  },

  {
    image: "/images/solarLight6.jpg",
    name: "600W Solar Street Light",
    price: "₹ 2000",
    specs: {
      led: "5730 600D",
      battery: "3.2V 25Ah",
      panel: "6V 35W",
      bodyMaterial: "Plastic ABS – 675 × 340 × 70 mm",
      panelSize: "335 × 590 mm",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
      waterproofRating: "IP67",
    },
  },

  {
    image: "/images/solarLight7.jpg",
    name: "300W Solar Street Light (Grey)",
    price: "₹ 2000",
    specs: {
      bodyColor: "Grey",
      led: "5730 48D",
      battery: "3.2V 6Ah",
      panel: "6V 10W",
      bodyMaterial: "Plastic ABS – 390 × 195 mm",
      panelSize: "—",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
      waterproofRating: "IP67",
    },
  },

  {
    image: "/images/solarLight8.jpg",
    name: "400W Solar Street Light (Grey)",
    price: "₹ 2000",
    specs: {
      bodyColor: "Grey",
      led: "5730 96D",
      battery: "3.2V 12Ah",
      panel: "6V 12W",
      bodyMaterial: "Plastic ABS – 485 × 220 mm",
      panelSize: "—",
      lightingMode:
        "Remote control + Light control + Radar sensing + Time control",
      lightingTime: "Continuous illumination for 10 to 12 hours",
      chargingTime: "6–8 hours",
      sensingDistance: "8–15 meters",
      waterproofRating: "IP67",
    },
  },
];
const SolarLights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-10 md:py-15 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-700 mb-3">
            OUR PRODUCTS
          </p>
          <h2 className="md:text-4xl text-3xl font-medium">
            Trending Solar Lights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {solarLights.map((product, i) => (
            <ProductCard key={product.name} {...product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default SolarLights;
