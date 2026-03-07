import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const navItems = [
  {name:"HOME",link:"#home"},
  {name:"ABOUT US",link:"#about"},
  {name:"PRODUCTS",link:"#products"},
  {name:"CONTACTS",link:"#contact"}
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar bg-yellow-500">
        Free delivery for orders above ₹5100.
      </div>

      {/* Navigation */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src="/images/hwan_logo.png" alt="" className="w-40 relative" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <HashLink key={item.name} smooth to={item.link} className="nav-link text-yellow-600 hover:text-primary text-xs xl:text-sm">
                  {item.name}
                </HashLink>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="p-2 text-yellow-600 hover:text-yellow-500 transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden md:block p-2 text-yellow-600 hover:text-yellow-500 transition-colors" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-yellow-600 hover:text-yellow-500 transition-colors relative" aria-label="Cart">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-yellow-500 text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-foreground/40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-background z-50 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-xl font-display font-bold text-foreground">Menu</h2>
                  <button onClick={() => setMobileOpen(false)} className="text-foreground">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      className="py-3 px-4 text-sm uppercase tracking-wider font-semibold text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors font-body"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
