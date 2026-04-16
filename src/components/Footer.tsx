import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Building,
  MapPin,
  Phone,
} from "lucide-react";
import { SiPinterest, SiX } from "react-icons/si";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", to: "#home" },
  { name: "About Us", to: "#about" },
  { name: "Products", to: "#products" },
  { name: "Contact Us", to: "#contact" },
];

const policies = [
  { name: "Privacy Policy", to: "/privacy-policy" },
  { name: "Shipping Policy", to: "/shipping-policy" },
  { name: "Return and Refund Policy", to: "/return-and-refund-policy" },
  { name: "Terms and Conditions", to: "/terms-and-conditions" },
];

const Icons = [
  { link: "https://www.instagram.com/hwanpower/", icon: Instagram },
  { link: "https://www.facebook.com/hwanpower", icon: Facebook },
  { link: "https://x.com/hwan_power", icon: SiX },
  { link: "https://www.youtube.com/@HwanPower", icon: Youtube },
  { link: "https://in.pinterest.com/hwanpowerr/", icon: SiPinterest },
  { link: "https://www.linkedin.com/company/hwan-power", icon: Linkedin },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-brand-dark to-black text-white">
      {/* Main */}
      <div className="container mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">
              Address
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Building className="w-4 h-4 mt-0.5" />
                Hwan Power
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                KINFRA Advanced Technology Park
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                Ramanattukara
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                9207889911
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {Icons.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                  hover:scale-110 hover:bg-gradient-to-br from-yellow-400 to-yellow-600 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <HashLink
                    smooth
                    to={link.to}
                    className="hover:text-yellow-400 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Customer Care
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              {policies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="hover:text-yellow-400 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-[220px] sm:h-[250px] rounded-xl overflow-hidden border border-yellow-500/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.6839503887836!2d75.854642!3d11.180532999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDEwJzQ5LjkiTiA3NcKwNTEnMTYuNyJF!5e1!3m2!1sen!2sin!4v1773163812365!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 md:px-10 py-6 text-center">
          <p className="text-xs text-gray-500">
            © 2026 HWANPOWER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
