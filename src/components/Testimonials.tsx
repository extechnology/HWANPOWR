import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Md. Asees",
    location: "Kondotty",
    text: "Hwanpower solar lights provide excellent brightness and long backup. Very satisfied with the quality and performance.",
  },
  {
    name: "Fahtima Suhara",
    location: "Malappuram",
    text: "The solar street lights work perfectly and charge very fast. A reliable and eco-friendly lighting solution.",
  },
  {
    name: "Mr. Sree Kumar",
    location: "Calicut",
    text: "Strong build quality and powerful lighting. Hwanpower solar lights are perfect for outdoor areas.",
  },
  {
    name: "Mr. Bibin Jose",
    location: "Kottayam",
    text: "Very efficient solar lighting with great battery backup. Highly recommended for streets and open spaces.",
  },
  {
    name: "Mr. Shyam Prasad",
    location: "Ernakulam",
    text: "Excellent performance and durability. Hwanpower solar lights give bright illumination all night.",
  },
  {
    name: "Md. Shamseer Ali",
    location: "Ottapalam",
    text: "Good quality solar street lights with fast charging. Really happy with the product and service.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-12 md:py-20 bg-brand-cream">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle text-transparent font-medium text-2xl bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-700 mb-3">
            Testimonials
          </p>
          <h2 className="section-title">What Our Customers Say</h2>
        </motion.div>

        {/* Scrollable cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[280px] md:min-w-[340px] bg-white rounded-xl shadow-md p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="w-6 h-6 text-yellow-500 opacity-40 mb-3" />

              <p className="text-sm md:text-base text-foreground italic leading-relaxed mb-6">
                {t.text}
              </p>

              <div className="mt-auto">
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
