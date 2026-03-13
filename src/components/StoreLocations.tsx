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
      <div className="relative h-[380px] md:h-[340px] lg:h-[300px] overflow-hidden">
        <img
          src="/images/contact.png"
          alt="Choko La Boutique Store"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/20" />

        <motion.div
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Responsive layout */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground">
                  Contact Us
                </h2>

                {/* Divider */}
                <div className="hidden md:block w-px bg-white/30 h-20" />

                {/* Contact Info */}
                <div className="space-y-3 max-w-sm">
                  <h3 className="text-primary-foreground font-body font-bold">
                    Kerala
                  </h3>

                  <a
                    href="#"
                    className="flex items-start gap-2 text-primary-foreground/80 hover:text-yellow-500 transition-colors text-sm font-body"
                  >
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>KINFRA Advanced Technology Park, Ramanattukara</span>
                  </a>

                  <a
                    href="tel:9207889911"
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-yellow-500 transition-colors text-sm font-body"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    9207889911
                  </a>

                  <a
                    href="mailto:hwanpowerr@gmail.com"
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-yellow-500 transition-colors text-sm font-body"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    hwanpowerr@gmail.com
                  </a>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-white/30 h-20" />

                {/* Button */}
                <div className="w-full md:w-auto">
                  <WhatsAppButton
                    message="Hello, I am interested in your products"
                    className="btn-primary-brand bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-lg px-6 py-2 text-sm md:text-base w-full md:w-auto text-center"
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
