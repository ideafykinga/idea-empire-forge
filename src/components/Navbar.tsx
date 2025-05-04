
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 glass shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="flex items-center space-x-2 z-50">
          <span className={`font-bold text-2xl transition-colors ${isScrolled ? "gradient-text" : "text-ideify-purple"}`}>Ideify</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-700 hover:text-ideify-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Call to Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="link" className="text-ideify-purple" asChild>
            <Link to="/signin">Log In</Link>
          </Button>
          <Button className="bg-ideify-purple text-white hover:bg-ideify-deep-purple" asChild>
            <Link to="/signin">Sign Up Free</Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8 mb-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg text-gray-800 hover:text-ideify-purple transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-4">
              <Button variant="link" className="text-ideify-purple" asChild>
                <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
              </Button>
              <Button className="bg-ideify-purple text-white hover:bg-ideify-deep-purple" asChild>
                <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>Sign Up Free</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
