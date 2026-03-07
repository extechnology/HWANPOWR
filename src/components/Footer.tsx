import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground/80">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-10 md:py-14">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-display font-bold text-primary-foreground mb-2">
              Subscribe & Get 10% Off
            </h3>
            <p className="text-sm text-primary-foreground/60 font-body mb-6">
              Stay updated with our latest collections and exclusive offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary font-body"
              />
              <button className="btn-primary-brand rounded-lg text-xs px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-display font-bold text-primary-foreground text-lg mb-4">
              CHOKO <span className="text-primary">LA</span>
            </h4>
            <p className="text-xs text-primary-foreground/50 font-body leading-relaxed mb-4">
              Handcrafted artisanal chocolates made with 100% couverture chocolate for a rich, indulgent taste.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About Us", "Chocolates", "Designer Cakes", "Corporate Gifting", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary transition-colors font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2">
              {["Shipping Policy", "Return Policy", "Privacy Policy", "Terms of Service", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary transition-colors font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-primary-foreground/50 font-body">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Khan Market, New Delhi
              </li>
              <li className="flex items-center gap-2 text-xs text-primary-foreground/50 font-body">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 99104 57772
              </li>
              <li className="flex items-center gap-2 text-xs text-primary-foreground/50 font-body">
                <Mail className="w-4 h-4 flex-shrink-0" />
                hello@chokola.in
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-5">
          <p className="text-center text-xs text-primary-foreground/30 font-body">
            © 2026 Choko La. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
