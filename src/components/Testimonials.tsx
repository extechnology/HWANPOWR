import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  { text: "Hey the cake was absolutely delicious. Everyone loved it.", author: "Aditya Kashyap" },
  { text: "Love your products... bought hampers many times... love every single stuff it had!", author: "Anita Saini" },
  { text: "Thank you so much for the cake! It was beautiful!", author: "Manika Garg" },
  { text: "The kids thoroughly enjoyed the cake ❤️ Thank you so much! Please convey our gratitude to the chef and the team as well.", author: "Anubha Gupta" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img src="/images/graphic-divider.png" alt="" className="h-10 mx-auto mb-6 opacity-60" loading="lazy" />
          <p className="section-subtitle mb-3">Testimonials</p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background shadow-md rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonial-card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-50" />
              <p className="text-lg md:text-xl font-display italic text-foreground leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>
              <p className="font-body font-bold text-primary uppercase tracking-wider text-sm">
                {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background shadow-md rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
