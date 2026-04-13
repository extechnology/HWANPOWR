import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import WhatsAppButton from "./ui/whatsappButton";

const StoreLocations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative">
      {/* Store image */}
      <div className="relative min-h-[420px] md:min-h-[300px] overflow-hidden flex items-center py-12 md:py-0">
        <img
          src="/contact_us.webp"
          alt="hwampower contact us"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-foreground/80 to-foreground/30 md:from-foreground/70 md:to-foreground/20" />

        <motion.div
          className="relative w-full z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Responsive layout */}
              <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-6 bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none border border-white/10 md:border-transparent">
                {/* Title */}
                <img src="/hwan_logo.png"  className="w-28 md:w-36 mix-blend-screen" alt="" />

                {/* Divider */}
                <div className="hidden md:block w-px bg-white/30 h-24" />
                <div className="md:hidden h-px w-2/3 bg-white/20" />

                {/* Contact Info */}
                <div className="space-y-4 md:space-y-3 w-full md:max-w-sm flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-primary-foreground font-body font-bold text-xl md:text-base">
                    Kerala
                  </h3>

                  <a
                    href="#"
                    className="flex flex-col md:flex-row items-center md:items-start gap-2 text-primary-foreground/90 hover:text-yellow-400 transition-colors text-sm font-body"
                  >
                    <MapPin className="w-5 h-5 md:w-4 md:h-4 md:mt-0.5 shrink-0 text-yellow-500 md:text-inherit" />
                    <span>KINFRA Advanced Technology Park, Ramanattukara</span>
                  </a>

                  <a
                    href="tel:9207889911"
                    className="flex flex-col md:flex-row items-center md:items-start gap-2 text-primary-foreground/90 hover:text-yellow-400 transition-colors text-sm font-body"
                  >
                    <Phone className="w-5 h-5 md:w-4 md:h-4 shrink-0 text-yellow-500 md:text-inherit" />
                    <span>9207889911</span>
                  </a>

                  <a
                    href="mailto:hwanpowerr@gmail.com"
                    className="flex flex-col md:flex-row items-center md:items-start gap-2 text-primary-foreground/90 hover:text-yellow-400 transition-colors text-sm font-body"
                  >
                    <Mail className="w-5 h-5 md:w-4 md:h-4 shrink-0 text-yellow-500 md:text-inherit" />
                    <span>hwanpowerr@gmail.com</span>
                  </a>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-white/30 h-24" />
                <div className="md:hidden h-px w-2/3 bg-white/20" />

                {/* Button */}
                <div className="w-full md:w-auto flex justify-center">
                  <WhatsAppButton
                    message="Hello, I am interested in your products"
                    className="btn-primary-brand font-light bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black rounded-lg px-8 py-3 md:px-6 md:py-2 text-base md:text-sm w-full md:w-auto text-center transform transition-all active:scale-95 shadow-lg shadow-black/20"
                  >
                    Contact Us
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreLocations;
